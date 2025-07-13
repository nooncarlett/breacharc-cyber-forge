import { motion } from 'framer-motion';
import { BookOpen, Download, Wrench, ExternalLink, Calendar, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Resources() {
  const blogPosts = [
    {
      title: 'Understanding Zero Trust Security Architecture',
      excerpt: 'A comprehensive guide to implementing Zero Trust principles in modern enterprises.',
      author: 'Security Team',
      date: 'Dec 15, 2024',
      category: 'Architecture',
      readTime: '8 min read'
    },
    {
      title: 'AI/ML Security: Protecting Machine Learning Models',
      excerpt: 'Explore the unique security challenges and solutions for AI/ML systems.',
      author: 'AI Security Team',
      date: 'Dec 10, 2024',
      category: 'AI/ML',
      readTime: '12 min read'
    },
    {
      title: 'Cloud Security Best Practices for 2024',
      excerpt: 'Essential security measures for cloud infrastructure and applications.',
      author: 'Cloud Team',
      date: 'Dec 5, 2024',
      category: 'Cloud',
      readTime: '10 min read'
    }
  ];

  const whitepapers = [
    {
      title: 'Enterprise VAPT Methodology Guide',
      description: 'Comprehensive guide to vulnerability assessment and penetration testing for enterprises.',
      pages: '32 pages',
      category: 'VAPT',
      downloadSize: '2.4 MB'
    },
    {
      title: 'Red Team Operations Handbook',
      description: 'Advanced techniques and methodologies for red team exercises.',
      pages: '45 pages',
      category: 'Red Team',
      downloadSize: '3.1 MB'
    },
    {
      title: 'Compliance Framework Implementation',
      description: 'Step-by-step guide to implementing security compliance frameworks.',
      pages: '28 pages',
      category: 'Compliance',
      downloadSize: '1.8 MB'
    }
  ];

  const tools = [
    {
      title: 'Security Assessment Checklist',
      description: 'Comprehensive checklist for conducting internal security assessments.',
      type: 'Checklist',
      format: 'PDF'
    },
    {
      title: 'Incident Response Playbook',
      description: 'Ready-to-use templates for incident response procedures.',
      type: 'Template',
      format: 'DOCX'
    },
    {
      title: 'Network Security Scanner',
      description: 'Open-source tool for basic network vulnerability scanning.',
      type: 'Tool',
      format: 'Script'
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-muted-foreground">
              Learn more about cybersecurity with our comprehensive resources, guides, and tools
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
              <TabsTrigger value="tools">Security Tools</TabsTrigger>
            </TabsList>

            {/* Blog Posts */}
            <TabsContent value="blog">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
                  <p className="text-xl text-muted-foreground">
                    Stay updated with the latest cybersecurity trends and insights
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={post.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <Card className="cyber-card h-full group cursor-pointer hover:scale-105 transition-transform duration-300">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="secondary">{post.category}</Badge>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>
                          <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </div>
                          </div>
                          <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            Read More
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Whitepapers */}
            <TabsContent value="whitepapers">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Security Whitepapers</h2>
                  <p className="text-xl text-muted-foreground">
                    Download detailed guides on securing your infrastructure
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {whitepapers.map((paper, index) => (
                    <motion.div
                      key={paper.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <Card className="cyber-card h-full">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="secondary">{paper.category}</Badge>
                            <Download className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg leading-tight">{paper.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{paper.description}</p>
                          <div className="flex justify-between text-sm text-muted-foreground mb-4">
                            <span>{paper.pages}</span>
                            <span>{paper.downloadSize}</span>
                          </div>
                          <Button className="w-full btn-cyber">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Security Tools */}
            <TabsContent value="tools">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Free Security Tools</h2>
                  <p className="text-xl text-muted-foreground">
                    Access free tools and templates to enhance your security posture
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <Card className="cyber-card h-full">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="secondary">{tool.type}</Badge>
                            <Wrench className="w-5 h-5 text-accent" />
                          </div>
                          <CardTitle className="text-lg leading-tight">{tool.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{tool.description}</p>
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-sm text-muted-foreground">Format: {tool.format}</span>
                          </div>
                          <Button className="w-full btn-neon">
                            <Download className="w-4 h-4 mr-2" />
                            Get Tool
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}