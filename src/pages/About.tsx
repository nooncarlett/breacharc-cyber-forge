import { motion } from 'framer-motion';
import { Shield, Users, Award, Target, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
export default function About() {
  const stats = [{
    label: 'Monitoring',
    value: '24/7',
    icon: Award
  }, {
    label: 'Threat Detection',
    value: '99.9%',
    icon: Shield
  }, {
    label: 'Protected Clients',
    value: '50+',
    icon: Users
  }];
  const certifications = ['CISSP', 'OSCP', 'CISM', 'CEH', 'OSEP', 'CRTE', 'CRTO', 'CISA', 'GSEC', 'GCIH'];
  const values = [{
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize the security of your business above all else, ensuring comprehensive protection against evolving threats.'
  }, {
    icon: Users,
    title: 'Expert Team',
    description: 'Our certified professionals bring decades of combined experience in cybersecurity and threat intelligence.'
  }, {
    icon: Zap,
    title: 'Proactive Approach',
    description: 'We stay ahead of threats with continuous monitoring, threat hunting, and proactive security measures.'
  }, {
    icon: Globe,
    title: 'Global Standards',
    description: 'We follow international security frameworks and best practices to ensure world-class protection.'
  }];
  return <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Breach Arc</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Premier cybersecurity services provider, protecting critical business assets since 2022
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} className="text-center">
                <Card className="cyber-card mx-px">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Breach Arc is a premier cybersecurity services provider, specializing in protecting critical business 
                  assets from a growing landscape of sophisticated digital threats. Our team of highly trained, certified 
                  security professionals (CISSP, OSCP, CISM) brings decades of combined experience in offensive security, 
                  risk management, compliance, and threat mitigation.
                </p>
                <p>
                  Whether you need in-depth vulnerability assessments, penetration testing, cloud security, or AI/ML 
                  protection, we have the expertise and tools to deliver comprehensive, effective solutions. At Breach Arc, 
                  we focus on proactive defense strategies to ensure your business remains secure today and in the future.
                </p>
                <p>
                  Founded in 2022, we have rapidly established ourselves as a trusted partner for organizations across 
                  various industries, helping them navigate the complex cybersecurity landscape with confidence and expertise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our cybersecurity mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => <motion.div key={value.title} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }}>
                <Card className="cyber-card h-full">
                  <CardContent className="p-6">
                    <value.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center">
            <h2 className="text-3xl font-bold mb-6">Team Certifications</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our experts hold industry-leading certifications
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => <motion.div key={cert} initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <Badge variant="secondary" className="text-sm py-2 px-4">
                    {cert}
                  </Badge>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  To provide comprehensive, cutting-edge cybersecurity solutions that protect businesses 
                  from evolving digital threats while enabling secure digital transformation.
                </p>
                <p>
                  We believe that cybersecurity should be accessible, understandable, and effective for 
                  organizations of all sizes. Our mission is to democratize enterprise-grade security 
                  through expert consultation, innovative solutions, and continuous support.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }}>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  To become the leading cybersecurity partner for businesses across India and globally, 
                  known for our expertise, innovation, and unwavering commitment to client security.
                </p>
                <p>
                  We envision a future where businesses can operate with complete confidence in their 
                  digital infrastructure, backed by proactive threat intelligence and comprehensive 
                  security measures.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
}