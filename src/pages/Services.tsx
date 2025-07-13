import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp, Monitor, Search, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
      description: 'Identify and validate vulnerabilities in your digital infrastructure with our expert-driven VAPT services.',
      href: '/services/vapt',
      icon: Shield,
      features: ['Black Box Testing', 'Grey Box Testing', 'White Box Testing', 'Detailed Reporting']
    },
    {
      title: 'Red Teaming',
      description: 'Simulate advanced, real-world attacks to test your organization\'s detection and response capabilities.',
      href: '/services/red-teaming',
      icon: Users,
      features: ['Advanced Persistent Threats', 'Social Engineering', 'Physical Security', 'Purple Team Exercises']
    },
    {
      title: 'AI/ML Security',
      description: 'Protect your AI and machine learning systems from adversarial threats and vulnerabilities.',
      href: '/services/ai-ml-security',
      icon: TrendingUp,
      features: ['Model Security Assessment', 'Adversarial Testing', 'Data Privacy', 'AI Governance']
    },
    {
      title: 'Compliance',
      description: 'Achieve and maintain regulatory compliance with expert guidance and tailored assessments.',
      href: '/services/compliance',
      icon: Shield,
      features: ['ISO 27001', 'SOC 2', 'GDPR', 'NIST Framework']
    },
    {
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure and applications with comprehensive cloud security solutions.',
      href: '/services/cloud-security',
      icon: Monitor,
      features: ['Cloud Posture Assessment', 'Container Security', 'DevSecOps', 'Multi-Cloud Security']
    },
    {
      title: 'Dark Web Monitoring',
      description: 'Monitor the dark web for threats to your organization and receive actionable intelligence.',
      href: '/services/dark-web-monitoring',
      icon: Search,
      features: ['Credential Monitoring', 'Brand Protection', 'Threat Intelligence', 'Real-time Alerts']
    },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive cybersecurity solutions tailored to protect your business from evolving threats
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-cyber">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="cyber-card h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature) => (
                            <li key={feature} className="text-sm text-muted-foreground flex items-center">
                              <Target className="w-3 h-3 text-primary mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild className="w-full btn-cyber">
                        <Link to={service.href}>Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Security?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our security experts to discuss your specific requirements and get a customized solution.
            </p>
            <Button asChild size="lg" className="btn-cyber">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}