import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Monitor, Users, TrendingUp, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TypedText from '@/components/ui/typed-text';

const Home = () => {
  const services = [
    {
      title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
      description: 'Identify and validate vulnerabilities in your digital infrastructure with our expert-driven VAPT services.',
      href: '/services/vapt',
      icon: Shield,
    },
    {
      title: 'Red Teaming',
      description: 'Simulate advanced, real-world attacks to test your organization\'s detection and response capabilities.',
      href: '/services/red-teaming',
      icon: Users,
    },
    {
      title: 'AI/ML Security',
      description: 'Protect your AI and machine learning systems from adversarial threats and vulnerabilities.',
      href: '/services/ai-ml-security',
      icon: TrendingUp,
    },
    {
      title: 'Compliance',
      description: 'Achieve and maintain regulatory compliance with expert guidance and tailored assessments.',
      href: '/services/compliance',
      icon: Shield,
    },
    {
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure and applications with comprehensive cloud security solutions.',
      href: '/services/cloud-security',
      icon: Monitor,
    },
    {
      title: 'Dark Web Monitoring',
      description: 'Monitor the dark web for threats to your organization and receive actionable intelligence.',
      href: '/services/dark-web-monitoring',
      icon: Monitor,
    },
  ];

  const industries = [
    {
      title: 'Financial Services',
      features: ['PCI DSS compliance', 'Fraud detection', 'Transaction security', 'Regulatory advisory'],
      cta: 'Get Financial Security Audit',
    },
    {
      title: 'Healthcare',
      features: ['HIPAA compliance programs', 'Medical data encryption', 'Threat detection for healthcare networks', 'Patient privacy advisory'],
      cta: 'Get Healthcare Security Audit',
    },
    {
      title: 'E-commerce',
      features: ['Payment security', 'Customer data protection', 'Platform security', 'Compliance frameworks'],
      cta: 'Secure Your Platform',
    },
    {
      title: 'Technology',
      features: ['Source code security', 'DevSecOps implementation', 'API security', 'Zero trust architecture'],
      cta: 'Tech Security Assessment',
    },
  ];

  const testimonials = [
    {
      text: "Breach Arc helped secure our AI models by identifying vulnerabilities and implementing Zero Trust. Their expertise in AI security gave us confidence in deploying models safely at scale.",
      author: "AI/ML Security",
      company: "Eco Innovations LLC",
    },
    {
      text: "Breach Arc's VAPT service identified key vulnerabilities and provided clear remediation steps. Their thorough testing and actionable reports made improving our security infrastructure efficient and straightforward.",
      author: "VAPT",
      company: "TechCo Solutions Pvt.Ltd",
    },
    {
      text: "Breach Arc's Red Teaming simulated real-world attacks, revealing weaknesses in our defenses. Their detailed reports and collaborative debriefing significantly improved our detection and response capabilities.",
      author: "Red Teaming",
      company: "MedPath Diagnostics",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
        {/* Professional geometric background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <TypedText
                  strings={[
                    'Enterprise Cybersecurity Protection',
                    'Advanced Threat Defense',
                    'Secure Business Solutions'
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  backDelay={2000}
                  loop={true}
                  showCursor={true}
                  cursorChar="|"
                />
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Comprehensive security solutions tailored to protect your business from evolving digital threats
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg" className="btn-cyber text-lg px-8 py-4">
                <Link to="/contact">Get Security Assessment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-neon text-lg px-8 py-4">
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 cyber-pulse">24/7</div>
              <div className="text-lg text-muted-foreground">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 cyber-pulse">99.9%</div>
              <div className="text-lg text-muted-foreground">Threat Detection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 cyber-pulse">50+</div>
              <div className="text-lg text-muted-foreground">Protected Clients</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg text-muted-foreground mb-8">Trusted by security teams at</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {['Fortune 500', 'SaaS Leaders', 'Financial Institutions', 'Healthcare Providers'].map((client, index) => (
                <motion.div 
                  key={client}
                  className="text-center p-4 cyber-card hover:border-primary transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-foreground font-semibold">{client}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Security Services</h2>
            <p className="text-xl text-muted-foreground">End-to-end protection across your digital infrastructure</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-card group cursor-pointer h-full hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <Link 
                      to={service.href}
                      className="inline-flex items-center text-primary hover:text-accent transition-colors duration-200 group-hover:translate-x-2 transform transition-transform"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Industry-Specific Solutions</h2>
            <p className="text-xl text-muted-foreground">Tailored security solutions for your industry</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-card group h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">{industry.title}</h3>
                    <ul className="space-y-3 mb-8">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="btn-neon w-full">
                      {industry.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Breach Arc</h2>
              <p className="text-xl text-primary mb-4">Trusted cybersecurity experts since 2022</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Breach Arc is a premier cybersecurity services provider, specializing in protecting critical business 
                assets from a growing landscape of sophisticated digital threats. Our team of highly trained, certified 
                security professionals (CISSP, OSCP, CISM) brings decades of combined experience in offensive security, 
                risk management, compliance, and threat mitigation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you need in-depth vulnerability assessments, penetration testing, cloud security, or AI/ML 
                protection, we have the expertise and tools to deliver comprehensive, effective solutions. At Breach Arc, 
                we focus on proactive defense strategies to ensure your business remains secure today and in the future.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Certified Professionals</div>
                </div>
                <div className="text-center">
                  <Monitor className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="text-sm font-semibold">24/7 Support</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-semibold">Proactive Defense</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="cyber-card p-8 relative overflow-hidden">
                <div className="scan-line" />
                <h3 className="text-2xl font-bold mb-6 text-center">Security Excellence</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Threat Detection</span>
                    <span className="text-primary font-mono">99.9%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[99%]" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <span className="text-secondary font-mono">&lt; 1hr</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-[95%]" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Client Satisfaction</span>
                    <span className="text-accent font-mono">100%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Resources</h2>
            <p className="text-xl text-muted-foreground">Learn more about cybersecurity and best practices</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Blog', desc: 'Stay updated with the latest cybersecurity trends and insights.', cta: 'Explore', href: '/resources#blog' },
              { title: 'Whitepapers', desc: 'Download detailed guides on securing your infrastructure.', cta: 'Download', href: '/resources#whitepapers' },
              { title: 'Security Tools', desc: 'Access free tools to enhance your security posture.', cta: 'Get Tools', href: '/resources#tools' },
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-card group h-full hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">{resource.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{resource.desc}</p>
                    <Button asChild className="btn-cyber">
                      <Link to={resource.href}>{resource.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by security teams worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-card h-full">
                  <CardContent className="p-8">
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                    <div className="border-t border-border pt-4">
                      <div className="text-primary font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <CyberBackground className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ready to Strengthen Your Security?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get a free initial security assessment and consultation with our experts
            </p>
            <Button asChild size="lg" className="btn-cyber text-lg px-12 py-6">
              <Link to="/contact">Get Started Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;