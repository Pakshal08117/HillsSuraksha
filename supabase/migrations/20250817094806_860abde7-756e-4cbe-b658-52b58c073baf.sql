-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  preferred_name TEXT,
  role TEXT DEFAULT 'citizen' CHECK (role IN ('citizen', 'volunteer', 'authority', 'verified')),
  languages TEXT[],
  local_address TEXT,
  date_of_birth DATE,
  blood_group TEXT,
  medical_tags JSONB DEFAULT '[]'::jsonb,
  emergency_contacts JSONB DEFAULT '[]'::jsonb,
  verified_status TEXT DEFAULT 'unverified' CHECK (verified_status IN ('unverified', 'pending', 'verified')),
  privacy_settings JSONB DEFAULT '{}'::jsonb,
  avatar_url TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_activities table for tracking user actions
CREATE TABLE public.user_activities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL CHECK (activity_type IN ('login', 'logout', 'sos_sent', 'report_submitted', 'profile_updated', 'emergency_contact_added', 'location_shared', 'alert_received', 'volunteer_action')),
  activity_data JSONB DEFAULT '{}'::jsonb,
  ip_address INET,
  user_agent TEXT,
  location_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_activities ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles table
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Allow verified authorities to view basic profile info during emergencies
CREATE POLICY "Verified authorities can view basic profiles during emergencies" 
ON public.profiles 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    WHERE p.user_id = auth.uid() 
    AND p.role IN ('authority', 'verified')
    AND p.verified_status = 'verified'
  )
);

-- Create policies for user_activities table
CREATE POLICY "Users can view their own activities" 
ON public.user_activities 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own activities" 
ON public.user_activities 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Allow authorities to view activities during investigations (with restrictions)
CREATE POLICY "Authorities can view activities for investigations" 
ON public.user_activities 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    WHERE p.user_id = auth.uid() 
    AND p.role = 'authority'
    AND p.verified_status = 'verified'
  )
  AND activity_type IN ('sos_sent', 'report_submitted')
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates on profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, role)
  VALUES (
    NEW.id, 
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email), 
    'citizen'
  );
  
  -- Log the registration activity
  INSERT INTO public.user_activities (user_id, activity_type, activity_data)
  VALUES (
    NEW.id, 
    'login', 
    jsonb_build_object('event', 'user_registered', 'timestamp', now())
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create indexes for better performance
CREATE INDEX idx_profiles_user_id ON public.profiles(user_id);
CREATE INDEX idx_profiles_role ON public.profiles(role);
CREATE INDEX idx_profiles_verified_status ON public.profiles(verified_status);
CREATE INDEX idx_user_activities_user_id ON public.user_activities(user_id);
CREATE INDEX idx_user_activities_type ON public.user_activities(activity_type);
CREATE INDEX idx_user_activities_created_at ON public.user_activities(created_at DESC);