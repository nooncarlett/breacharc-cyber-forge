-- Create jobs table for career portal
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL, -- Full-time, Part-time, Contract
  description TEXT NOT NULL,
  requirements TEXT[] NOT NULL DEFAULT '{}',
  responsibilities TEXT[] NOT NULL DEFAULT '{}',
  salary_range TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (jobs are public)
CREATE POLICY "Jobs are viewable by everyone" 
ON public.jobs 
FOR SELECT 
USING (is_active = true);

-- Create policies for admin access (assuming we'll add admin authentication later)
-- For now, we'll create policies that allow insert/update/delete without authentication
-- This should be updated when admin authentication is implemented
CREATE POLICY "Allow job creation" 
ON public.jobs 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow job updates" 
ON public.jobs 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow job deletion" 
ON public.jobs 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_jobs_updated_at
BEFORE UPDATE ON public.jobs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample job data
INSERT INTO public.jobs (title, department, location, type, description, requirements, responsibilities, salary_range) VALUES
('Senior Penetration Tester', 'Security', 'Bangalore, India', 'Full-time', 
 'Join our team as a Senior Penetration Tester and help protect our clients from cyber threats through comprehensive security assessments.',
 ARRAY['5+ years of penetration testing experience', 'OSCP, CEH, or equivalent certifications', 'Experience with Burp Suite, Metasploit, Nmap', 'Strong understanding of web application security', 'Knowledge of network protocols and infrastructure'],
 ARRAY['Conduct comprehensive penetration tests', 'Identify and document security vulnerabilities', 'Provide detailed reports with remediation recommendations', 'Collaborate with client security teams', 'Stay updated with latest security threats and tools'],
 '₹8,00,000 - ₹15,00,000'),
('Cybersecurity Analyst', 'Security', 'Remote', 'Full-time',
 'We are looking for a Cybersecurity Analyst to monitor and analyze security threats and implement protective measures.',
 ARRAY['3+ years in cybersecurity or related field', 'Knowledge of SIEM tools', 'Understanding of security frameworks (ISO 27001, NIST)', 'Experience with threat hunting', 'Strong analytical skills'],
 ARRAY['Monitor security events and incidents', 'Analyze threat intelligence', 'Implement security controls', 'Assist in incident response', 'Prepare security reports'],
 '₹6,00,000 - ₹12,00,000'),
('Cloud Security Engineer', 'Cloud', 'Hybrid', 'Full-time',
 'Join our Cloud Security team to design and implement security solutions for cloud environments.',
 ARRAY['4+ years of cloud security experience', 'AWS/Azure/GCP certifications', 'Knowledge of container security', 'Experience with DevSecOps', 'Understanding of cloud compliance'],
 ARRAY['Design cloud security architectures', 'Implement security controls in cloud environments', 'Conduct cloud security assessments', 'Automate security processes', 'Support DevSecOps initiatives'],
 '₹10,00,000 - ₹18,00,000');