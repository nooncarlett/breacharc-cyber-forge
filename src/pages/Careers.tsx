import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, TrendingUp, Shield, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const jobs = [
    {
      id: 1,
      title: 'Senior Penetration Tester',
      department: 'Security Testing',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['OSCP', 'Web Application Testing', 'Network Security', 'Report Writing'],
      description: 'Lead penetration testing engagements and mentor junior team members.',
      requirements: [
        'OSCP or equivalent certification',
        '3+ years penetration testing experience',
        'Strong knowledge of OWASP Top 10',
        'Experience with Burp Suite, Metasploit, Nmap'
      ]
    },
    {
      id: 2,
      title: 'Red Team Specialist',
      department: 'Red Team Operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '4-6 years',
      skills: ['CRTE', 'Social Engineering', 'Active Directory', 'C2 Frameworks'],
      description: 'Conduct advanced red team exercises and develop custom tools.',
      requirements: [
        'CRTE/CRTO certification preferred',
        '4+ years in offensive security',
        'Experience with Cobalt Strike, Empire',
        'Social engineering expertise'
      ]
    },
    {
      id: 3,
      title: 'AI/ML Security Researcher',
      department: 'Research & Development',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '2-4 years',
      skills: ['Machine Learning', 'Adversarial AI', 'Python', 'TensorFlow'],
      description: 'Research AI/ML security vulnerabilities and develop countermeasures.',
      requirements: [
        'PhD/Masters in Computer Science or related field',
        'Experience with ML frameworks',
        'Knowledge of adversarial attacks',
        'Strong programming skills in Python'
      ]
    },
    {
      id: 4,
      title: 'Compliance Consultant',
      department: 'Governance & Compliance',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['ISO 27001', 'SOC 2', 'GDPR', 'Risk Assessment'],
      description: 'Help clients achieve and maintain security compliance standards.',
      requirements: [
        'CISSP or CISM certification',
        'Experience with compliance frameworks',
        'Strong communication skills',
        'Client-facing experience'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and career advancement paths'
    },
    {
      icon: Shield,
      title: 'Cutting-edge Tech',
      description: 'Work with the latest security tools and technologies'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with industry experts'
    },
    {
      icon: Briefcase,
      title: 'Competitive Package',
      description: 'Industry-leading compensation and benefits'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || job.location.includes(locationFilter);
    const matchesType = !typeFilter || job.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-application-email', {
        body: {
          ...applicationData,
          resumeFileName: applicationData.resume?.name || 'No resume attached'
        }
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });

      setApplicationData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build the future of cybersecurity with industry-leading experts
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Remote Friendly</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Growing</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Learning Culture</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-xl text-muted-foreground">
              Join a team that values growth, innovation, and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="cyber-card text-center h-full">
                  <CardContent className="p-6">
                    <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Open Positions</h2>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="cyber-card">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{job.experience}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="btn-cyber"
                          onClick={() => setApplicationData(prev => ({ ...prev, position: job.title }))}
                        >
                          Apply Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Apply for {job.title}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleApplicationSubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                value={applicationData.name}
                                onChange={(e) => setApplicationData(prev => ({ ...prev, name: e.target.value }))}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                type="email"
                                value={applicationData.email}
                                onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              value={applicationData.phone}
                              onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                            />
                          </div>
                          <div>
                            <Label htmlFor="experience">Years of Experience *</Label>
                            <Input
                              id="experience"
                              value={applicationData.experience}
                              onChange={(e) => setApplicationData(prev => ({ ...prev, experience: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="coverLetter">Cover Letter *</Label>
                            <Textarea
                              id="coverLetter"
                              rows={4}
                              value={applicationData.coverLetter}
                              onChange={(e) => setApplicationData(prev => ({ ...prev, coverLetter: e.target.value }))}
                              placeholder="Tell us why you're interested in this position..."
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="resume">Resume</Label>
                            <Input
                              id="resume"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={(e) => setApplicationData(prev => ({ ...prev, resume: e.target.files?.[0] || null }))}
                            />
                          </div>
                          <Button type="submit" disabled={isSubmitting} className="w-full btn-cyber">
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No positions match your current filters.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setLocationFilter('');
                  setTypeFilter('');
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}