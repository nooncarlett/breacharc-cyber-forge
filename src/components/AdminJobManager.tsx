import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit, MapPin, Clock, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  skills: string[];
  description: string;
  requirements: string[];
}

interface AdminJobManagerProps {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

export default function AdminJobManager({ jobs, setJobs }: AdminJobManagerProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const { toast } = useToast();

  const [jobForm, setJobForm] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    experience: '',
    skills: '',
    description: '',
    requirements: ''
  });

  const resetForm = () => {
    setJobForm({
      title: '',
      department: '',
      location: '',
      type: '',
      experience: '',
      skills: '',
      description: '',
      requirements: ''
    });
  };

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob: Job = {
      id: Math.max(...jobs.map(j => j.id), 0) + 1,
      title: jobForm.title,
      department: jobForm.department,
      location: jobForm.location,
      type: jobForm.type,
      experience: jobForm.experience,
      skills: jobForm.skills.split(',').map(s => s.trim()).filter(s => s),
      description: jobForm.description,
      requirements: jobForm.requirements.split('\n').map(r => r.trim()).filter(r => r)
    };

    setJobs([...jobs, newJob]);
    resetForm();
    setIsAddDialogOpen(false);
    toast({
      title: "Job Added",
      description: "New job posting has been added successfully.",
    });
  };

  const handleEditJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingJob) return;

    const updatedJob: Job = {
      ...editingJob,
      title: jobForm.title,
      department: jobForm.department,
      location: jobForm.location,
      type: jobForm.type,
      experience: jobForm.experience,
      skills: jobForm.skills.split(',').map(s => s.trim()).filter(s => s),
      description: jobForm.description,
      requirements: jobForm.requirements.split('\n').map(r => r.trim()).filter(r => r)
    };

    setJobs(jobs.map(job => job.id === editingJob.id ? updatedJob : job));
    resetForm();
    setEditingJob(null);
    toast({
      title: "Job Updated",
      description: "Job posting has been updated successfully.",
    });
  };

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter(job => job.id !== id));
    toast({
      title: "Job Deleted",
      description: "Job posting has been deleted successfully.",
    });
  };

  const openEditDialog = (job: Job) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      skills: job.skills.join(', '),
      description: job.description,
      requirements: job.requirements.join('\n')
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Job Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="btn-cyber">
              <Plus className="w-4 h-4 mr-2" />
              Add Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Job</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddJob} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Job Title *</Label>
                  <Input
                    id="title"
                    value={jobForm.title}
                    onChange={(e) => setJobForm(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="department">Department *</Label>
                  <Input
                    id="department"
                    value={jobForm.department}
                    onChange={(e) => setJobForm(prev => ({ ...prev, department: e.target.value }))}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Select onValueChange={(value) => setJobForm(prev => ({ ...prev, location: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bangalore, India">Bangalore, India</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="type">Job Type *</Label>
                  <Select onValueChange={(value) => setJobForm(prev => ({ ...prev, type: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
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
                <Label htmlFor="skills">Skills (comma-separated) *</Label>
                <Input
                  id="skills"
                  value={jobForm.skills}
                  onChange={(e) => setJobForm(prev => ({ ...prev, skills: e.target.value }))}
                  placeholder="e.g., OSCP, Web Application Testing, Network Security"
                  required
                />
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
                  placeholder="Enter each requirement on a new line"
                  required
                />
              </div>
              <Button type="submit" className="w-full btn-cyber">
                Add Job
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="cyber-card">
              <CardHeader>
                <div className="flex items-center justify-between">
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
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditDialog(job)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteJob(job.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={editingJob !== null} onOpenChange={() => setEditingJob(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Job</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditJob} className="space-y-4">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit-title">Job Title *</Label>
                <Input
                  id="edit-title"
                  value={jobForm.title}
                  onChange={(e) => setJobForm(prev => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="edit-department">Department *</Label>
                <Input
                  id="edit-department"
                  value={jobForm.department}
                  onChange={(e) => setJobForm(prev => ({ ...prev, department: e.target.value }))}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="edit-location">Location *</Label>
                <Select value={jobForm.location} onValueChange={(value) => setJobForm(prev => ({ ...prev, location: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bangalore, India">Bangalore, India</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit-type">Job Type *</Label>
                <Select value={jobForm.type} onValueChange={(value) => setJobForm(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit-experience">Experience *</Label>
                <Input
                  id="edit-experience"
                  value={jobForm.experience}
                  onChange={(e) => setJobForm(prev => ({ ...prev, experience: e.target.value }))}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="edit-skills">Skills (comma-separated) *</Label>
              <Input
                id="edit-skills"
                value={jobForm.skills}
                onChange={(e) => setJobForm(prev => ({ ...prev, skills: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-description">Description *</Label>
              <Textarea
                id="edit-description"
                rows={3}
                value={jobForm.description}
                onChange={(e) => setJobForm(prev => ({ ...prev, description: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-requirements">Requirements (one per line) *</Label>
              <Textarea
                id="edit-requirements"
                rows={4}
                value={jobForm.requirements}
                onChange={(e) => setJobForm(prev => ({ ...prev, requirements: e.target.value }))}
                required
              />
            </div>
            <Button type="submit" className="w-full btn-cyber">
              Update Job
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
