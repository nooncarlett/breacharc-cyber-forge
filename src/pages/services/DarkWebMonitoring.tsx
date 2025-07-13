import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, AlertTriangle, Shield, Database, Users, TrendingUp } from "lucide-react";

export default function DarkWebMonitoring() {
  const threats = [
    {
      icon: Database,
      title: "Credential Leaks",
      description: "Stolen usernames and passwords for corporate accounts."
    },
    {
      icon: AlertTriangle,
      title: "Data Breaches",
      description: "Sensitive customer or business data exposed on leak sites."
    },
    {
      icon: Users,
      title: "Insider Threats",
      description: "Employees or partners selling access or information."
    },
    {
      icon: Shield,
      title: "Brand Impersonation",
      description: "Fake domains, phishing kits, and executive targeting."
    },
    {
      icon: Eye,
      title: "Threat Actor Chatter",
      description: "Early warnings of planned attacks or exploits."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Early Detection",
      description: "Identify breaches and threats before they impact your business."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Meet requirements for breach notification and data protection."
    },
    {
      icon: Users,
      title: "Brand Protection",
      description: "Safeguard your reputation and customer trust."
    },
    {
      icon: AlertTriangle,
      title: "Actionable Response",
      description: "Receive clear guidance for remediation and incident management."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4">
            <Eye className="w-4 h-4 mr-2" />
            Dark Web Monitoring
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Dark Web Monitoring
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Continuous surveillance of hidden forums, marketplaces, and leak sites to detect threats to your organization before they can be exploited.
          </p>
          <Button size="lg" className="mr-4">
            Get Free Consultation
          </Button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Overview</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Dark Web Monitoring provides continuous surveillance of hidden forums, marketplaces, and leak sites to detect 
            threats to your organization. Our service delivers actionable intelligence on compromised credentials, sensitive 
            data, and brand mentions before they can be exploited.
          </p>
          
          <h3 className="text-2xl font-bold mb-6">What is Dark Web Monitoring?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Dark Web Monitoring is the process of proactively searching the dark web and deep web for your organization's 
            data, credentials, and brand references. It helps you identify breaches, insider threats, and emerging risks 
            that may not be visible on the surface web.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="cyber-card">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Automated & Human Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automated and human-driven monitoring of dark web forums, marketplaces, and leak sites.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Real-time Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real-time alerts for compromised credentials, sensitive data, and insider threats.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Brand Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Brand, domain, and executive monitoring for targeted attacks and impersonation.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Actionable Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Actionable threat intelligence with context for rapid response and remediation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Threats & Intelligence */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Threats & Intelligence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <Card key={index} className="cyber-card">
                <CardHeader>
                  <threat.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-lg">{threat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{threat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Why It Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="cyber-card">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Workforce Credentials</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Badge variant="secondary" className="p-3 justify-center">Threat Intelligence</Badge>
            <Badge variant="secondary" className="p-3 justify-center">OSCP</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CEH</Badge>
            <Badge variant="secondary" className="p-3 justify-center">Dark Web Research</Badge>
            <Badge variant="secondary" className="p-3 justify-center">Security Professionals</Badge>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Monitor the Dark Web?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us for dark web monitoring and threat intelligence tailored to your organization's needs.
          </p>
          <Button size="lg">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
}