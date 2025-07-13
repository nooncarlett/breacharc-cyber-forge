import { motion } from 'framer-motion';
import { Shield, Cloud, Eye, Brain, Users, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const solutions = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for large enterprises including threat hunting, incident response, and security architecture.',
      features: ['24/7 Security Operations Center', 'Advanced Threat Detection', 'Incident Response Team', 'Security Architecture Review'],
      href: '/contact'
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure across AWS, Azure, and GCP with our specialized cloud security services.',
      features: ['Cloud Security Assessment', 'Container Security', 'DevSecOps Integration', 'Compliance Automation'],
      href: '/services/cloud-security'
    },
    {
      icon: Brain,
      title: 'AI/ML Security',
      description: 'Protect your artificial intelligence and machine learning systems from emerging threats and vulnerabilities.',
      features: ['Model Security Testing', 'Data Privacy Protection', 'AI Governance Framework', 'Adversarial Attack Defense'],
      href: '/services/aiml-security'
    },
    {
      icon: Eye,
      title: 'Threat Intelligence',
      description: 'Stay ahead of threats with our comprehensive threat intelligence and dark web monitoring services.',
      features: ['Dark Web Monitoring', 'Threat Landscape Analysis', 'Intelligence Reports', 'Proactive Threat Hunting'],
      href: '/services/dark-web-monitoring'
    },
    {
      icon: Users,
      title: 'Security Awareness',
      description: 'Build a security-conscious culture with comprehensive training and awareness programs.',
      features: ['Phishing Simulation', 'Security Training Programs', 'Awareness Campaigns', 'Security Culture Assessment'],
      href: '/contact'
    },
    {
      icon: Lock,
      title: 'Compliance & Governance',
      description: 'Ensure regulatory compliance with frameworks like ISO 27001, SOC 2, PCI DSS, and more.',
      features: ['Compliance Assessment', 'Policy Development', 'Audit Support', 'Governance Framework'],
      href: '/services/compliance'
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Security Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive cybersecurity solutions tailored to protect your business from evolving threats
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="cyber-card h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <solution.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{solution.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full btn-cyber mt-auto">
                      <Link to={solution.href}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with a free security consultation and let our experts design the perfect solution for your needs.
            </p>
            <Button asChild size="lg" className="btn-cyber">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}