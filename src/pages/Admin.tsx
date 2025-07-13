import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Users, Briefcase, Mail, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  skills: string[];
  created_at: string;
}

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  cover_letter: string;
  resume_url?: string;
  applied_at: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' });
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [jobForm, setJobForm] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    experience: '',
    description: '',
    requirements: '',
    skills: ''
  });

  // Simple authentication (in production, use proper auth)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginCredentials.username === 'admin' && loginCredentials.password === 'breacharc2024') {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const jobData = {
        ...jobForm,
        requirements: jobForm.requirements.split('\n').filter(req => req.trim()),
        skills: jobForm.skills.split(',').map(skill => skill.trim()).filter(skill => skill)
      };

      // In a real app, this would save to Supabase
      const newJob: Job = {
        id: Date.now().toString(),
        ...jobData,
        created_at: new Date().toISOString()
      };

      setJobs(prev => [newJob, ...prev]);
      
      toast({
        title: "Job Posted",
        description: "New job posting has been created successfully",
      });

      setJobForm({
        title: '',
        department: '',
        location: '',
        type: 'Full-time',
        experience: '',
        description: '',
        requirements: '',
        skills: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create job posting",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteJob = (jobId: string) => {
    setJobs(prev => prev.filter(job => job.id !== jobId));
    toast({
      title: "Job Deleted",
      description: "Job posting has been removed",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <Card className="cyber-card">
            <CardHeader className="text-center">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Admin Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={loginCredentials.username}
                    onChange={(e) => setLoginCredentials(prev => ({ ...prev, username: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginCredentials.password}
                    onChange={(e) => setLoginCredentials(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" className="w-full btn-cyber">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button onClick={() => setIsAuthenticated(false)} variant="outline">
              Logout
            </Button>
          </div>

          <Tabs defaultValue="jobs" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="jobs">Job Management</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="contacts">Contact Forms</TabsTrigger>
            </TabsList>

            {/* Job Management */}
            <TabsContent value="jobs">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Create Job Form */}
                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="w-5 h-5" />
                      Create New Job
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleJobSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="title">Job Title *</Label>
                        <Input
                          id="title"
                          value={jobForm.title}
                          onChange={(e) => setJobForm(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="department">Department *</Label>
                          <Input
                            id="department"
                            value={jobForm.department}
                            onChange={(e) => setJobForm(prev => ({ ...prev, department: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Location *</Label>
                          <Input
                            id="location"
                            value={jobForm.location}
                            onChange={(e) => setJobForm(prev => ({ ...prev, location: e.target.value }))}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="type">Job Type *</Label>
                          <select
                            id="type"
                            value={jobForm.type}
                            onChange={(e) => setJobForm(prev => ({ ...prev, type: e.target.value }))}
                            className="w-full px-3 py-2 bg-background border border-border rounded-md"
                            required
                          >
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="experience">Experience *</Label>
                          <Input
                            id="experience"
                            value={jobForm.experience}
                            onChange={(e) => setJobForm(prev => ({ ...prev, experience: e.target.value }))}
                            placeholder="e.g., 3-5 years"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                          id="description"
                          rows={3}
                          value={jobForm.description}
                          onChange={(e) => setJobForm(prev => ({ ...prev, description: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="requirements">Requirements (one per line) *</Label>
                        <Textarea
                          id="requirements"
                          rows={4}
                          value={jobForm.requirements}
                          onChange={(e) => setJobForm(prev => ({ ...prev, requirements: e.target.value }))}
                          placeholder="OSCP certification&#10;3+ years experience&#10;Strong communication skills"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="skills">Skills (comma separated) *</Label>
                        <Input
                          id="skills"
                          value={jobForm.skills}
                          onChange={(e) => setJobForm(prev => ({ ...prev, skills: e.target.value }))}
                          placeholder="OSCP, Penetration Testing, Python"
                          required
                        />
                      </div>
                      <Button type="submit" disabled={isLoading} className="w-full btn-cyber">
                        {isLoading ? 'Creating...' : 'Create Job'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Job Listings */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Current Job Postings ({jobs.length})</h3>
                  {jobs.length === 0 ? (
                    <Card className="cyber-card">
                      <CardContent className="p-8 text-center">
                        <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">No job postings yet. Create your first job posting!</p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {jobs.map((job) => (
                        <Card key={job.id} className="cyber-card">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold">{job.title}</h4>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => deleteJob(job.id)}>
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{job.department} • {job.location}</p>
                            <div className="flex gap-2">
                              <Badge variant="secondary">{job.type}</Badge>
                              <Badge variant="outline">{job.experience}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Applications */}
            <TabsContent value="applications">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Job Applications ({applications.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {applications.length === 0 ? (
                    <div className="text-center py-8">
                      <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No applications yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {applications.map((application) => (
                        <div key={application.id} className="border border-border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold">{application.name}</h4>
                              <p className="text-sm text-muted-foreground">{application.email}</p>
                            </div>
                            <Badge variant="secondary">{application.position}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {application.experience} years experience
                          </p>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Application Details</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label>Name</Label>
                                  <p>{application.name}</p>
                                </div>
                                <div>
                                  <Label>Email</Label>
                                  <p>{application.email}</p>
                                </div>
                                <div>
                                  <Label>Phone</Label>
                                  <p>{application.phone}</p>
                                </div>
                                <div>
                                  <Label>Cover Letter</Label>
                                  <p className="text-sm">{application.cover_letter}</p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contact Forms */}
            <TabsContent value="contacts">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Form Submissions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Contact form submissions will appear here.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}