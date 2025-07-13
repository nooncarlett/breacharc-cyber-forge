import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileCheck, Users, TrendingUp, Lock, Award } from "lucide-react";

export default function Compliance() {
  const frameworks = [
    {
      name: "ISO 27001",
      description: "Information Security Management System (ISMS) implementation and certification."
    },
    {
      name: "SOC 2",
      description: "Trust Services Criteria for service organizations (security, availability, processing integrity, confidentiality, privacy)."
    },
    {
      name: "GDPR",
      description: "Data protection and privacy compliance for organizations handling EU personal data."
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard for organizations processing cardholder data."
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act for healthcare data protection."
    },
    {
      name: "Other Frameworks",
      description: "NIST, CCPA, CSA STAR, and more."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Minimize the likelihood and impact of data breaches and regulatory penalties."
    },
    {
      icon: Users,
      title: "Market Trust",
      description: "Demonstrate your commitment to security and privacy to customers and partners."
    },
    {
      icon: TrendingUp,
      title: "Business Enablement",
      description: "Meet contractual and legal requirements for new markets and clients."
    },
    {
      icon: FileCheck,
      title: "Continuous Improvement",
      description: "Build a culture of security and compliance across your organization."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4">
            <FileCheck className="w-4 h-4 mr-2" />
            Compliance
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Compliance
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Meet regulatory, legal, and industry standards for information security and data privacy with expert guidance through frameworks like ISO 27001, SOC 2, GDPR, PCI DSS, and more.
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
            Compliance services help organizations meet regulatory, legal, and industry standards for information security 
            and data privacy. Our experts guide you through the complexities of frameworks like ISO 27001, SOC 2, GDPR, 
            PCI DSS, and more—ensuring your business is audit-ready and resilient.
          </p>
          
          <h3 className="text-2xl font-bold mb-6">What is Compliance?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Compliance is the process of adhering to laws, regulations, and best practices that govern your industry. 
            It involves implementing controls, policies, and procedures to protect sensitive data, manage risk, and 
            demonstrate accountability to customers, partners, and regulators.
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
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Gap Assessments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gap assessments to identify control deficiencies and compliance risks.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <FileCheck className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Policy Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Policy and procedure development tailored to your business and regulatory landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Audit Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Evidence collection, audit preparation, and stakeholder reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Continuous Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous compliance monitoring and support for ongoing certification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Frameworks & Services */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Frameworks & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <Card key={index} className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-lg">{framework.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Compliance Matters</h2>
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
            <Badge variant="secondary" className="p-3 justify-center">CISSP</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CISM</Badge>
            <Badge variant="secondary" className="p-3 justify-center">ISO 27001 Lead</Badge>
            <Badge variant="secondary" className="p-3 justify-center">PCI DSS QSA</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CIPP/E</Badge>
            <Badge variant="secondary" className="p-3 justify-center">And more</Badge>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Achieve Compliance?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us for a compliance assessment and expert guidance tailored to your industry and regulatory needs.
          </p>
          <Button size="lg">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
}