import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Shield, Settings, Database, Lock, AlertTriangle } from "lucide-react";

export default function CloudSecurity() {
  const platforms = [
    {
      name: "AWS",
      services: "Identity & Access Management (IAM), S3, EC2, Lambda, RDS, and more."
    },
    {
      name: "Azure",
      services: "Active Directory, Storage, Virtual Machines, App Services, and more."
    },
    {
      name: "Google Cloud",
      services: "IAM, Compute Engine, Cloud Storage, Kubernetes Engine, and more."
    },
    {
      name: "Multi-cloud",
      services: "Multi-cloud and hybrid cloud security strategies."
    }
  ];

  const threats = [
    {
      icon: Settings,
      title: "Misconfigurations",
      description: "Publicly exposed storage, open ports, and weak IAM policies."
    },
    {
      icon: Lock,
      title: "Excessive Permissions",
      description: "Over-privileged accounts and lack of least privilege enforcement."
    },
    {
      icon: Database,
      title: "Data Breaches",
      description: "Unencrypted data, insecure APIs, and third-party risks."
    },
    {
      icon: AlertTriangle,
      title: "Cloud-native Attacks",
      description: "Container escapes, supply chain attacks, and serverless risks."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4">
            <Cloud className="w-4 h-4 mr-2" />
            Cloud Security
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cloud Security
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Protect cloud-based infrastructure, applications, and data from threats and misconfigurations. Secure AWS, Azure, Google Cloud, and multi-cloud environments.
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
            Cloud Security is the practice of protecting cloud-based infrastructure, applications, and data from threats 
            and misconfigurations. Our experts help you secure AWS, Azure, Google Cloud, and multi-cloud environments 
            with best-in-class controls and continuous monitoring.
          </p>
          
          <h3 className="text-2xl font-bold mb-6">What is Cloud Security?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Cloud Security involves securing the shared responsibility model, managing identities and access, encrypting 
            data, and ensuring compliance across public, private, and hybrid clouds. It addresses unique risks such as 
            misconfigurations, excessive permissions, and cloud-native threats.
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
                <CardTitle>Comprehensive Assessments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive cloud security assessments and architecture reviews.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Settings className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Automated Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automated and manual analysis of IAM, storage, network, and encryption settings.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Database className="w-12 h-12 text-primary mb-4" />
                <CardTitle>DevOps Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Remediation guidance tailored to cloud-native services and DevOps workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Cloud className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Continuous Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous monitoring and support for multi-cloud and hybrid environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Cloud Platforms & Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{platform.services}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground">
              Compliance with CIS, NIST, CSA STAR, and industry benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Threats & Controls */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Threats & Controls</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Controls</h3>
            <p className="text-lg text-muted-foreground">
              Automated policy enforcement, encryption, monitoring, and incident response.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Workforce Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Badge variant="secondary" className="p-3 justify-center">AWS Certified Security</Badge>
            <Badge variant="secondary" className="p-3 justify-center">Azure Security Engineer</Badge>
            <Badge variant="secondary" className="p-3 justify-center">GCP Security Engineer</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CISSP</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CISM</Badge>
            <Badge variant="secondary" className="p-3 justify-center">And more</Badge>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Cloud?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us for a cloud security assessment and expert guidance for AWS, Azure, GCP, and multi-cloud environments.
          </p>
          <Button size="lg">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
}