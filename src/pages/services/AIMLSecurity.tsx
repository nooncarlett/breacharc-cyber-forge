import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, Zap, AlertTriangle, Database, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIMLSecurity() {
  const threats = [
    {
      icon: AlertTriangle,
      title: "Adversarial Attacks",
      description: "Manipulating input data to fool models (e.g., adversarial examples)."
    },
    {
      icon: Database,
      title: "Data Poisoning",
      description: "Injecting malicious data into training sets to corrupt model behavior."
    },
    {
      icon: Lock,
      title: "Model Inversion & Extraction",
      description: "Reconstructing sensitive training data or stealing model IP."
    },
    {
      icon: Shield,
      title: "Membership Inference",
      description: "Determining if specific data was used in training, risking privacy."
    },
    {
      icon: Zap,
      title: "Supply Chain Attacks",
      description: "Compromising third-party libraries or pre-trained models."
    },
    {
      icon: Brain,
      title: "Model Evasion",
      description: "Circumventing detection/classification by exploiting model weaknesses."
    }
  ];

  const mitreMapping = [
    { tactic: "Reconnaissance", description: "Identifying exposed model endpoints and data sources." },
    { tactic: "Initial Access", description: "Exploiting API vulnerabilities or weak authentication." },
    { tactic: "Execution", description: "Triggering adversarial inputs or malicious payloads." },
    { tactic: "Persistence", description: "Manipulating model update mechanisms or data pipelines." },
    { tactic: "Exfiltration", description: "Extracting model parameters or sensitive data." },
    { tactic: "Impact", description: "Causing misclassification, denial of service, or reputational harm." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI/ML Security
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI/ML Security
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Protect your artificial intelligence and machine learning systems from adversarial threats, data poisoning, model theft, and other emerging risks.
          </p>
          <Button asChild size="lg" className="mr-4">
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Overview</h2>
          <p className="text-lg text-muted-foreground mb-8">
            AI/ML Security focuses on protecting artificial intelligence and machine learning systems from adversarial 
            threats, data poisoning, model theft, and other emerging risks. As organizations increasingly rely on AI, 
            securing these systems is critical to maintaining trust, integrity, and business value.
          </p>
          
          <h3 className="text-2xl font-bold mb-6">What is AI/ML Security?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            AI/ML Security is the practice of identifying, assessing, and mitigating risks unique to machine learning 
            models and data pipelines. This includes defending against attacks that target the data, algorithms, and 
            infrastructure powering AI-driven applications.
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
                <CardTitle>Comprehensive Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive risk assessment of AI/ML models, data, and infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Adversarial Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Adversarial testing to simulate real-world attacks on models and pipelines.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Lock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Zero Trust for AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Zero Trust principles for AI, including continuous monitoring and access control.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Secure Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Remediation guidance and secure deployment best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Threats & Techniques */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Threats & Techniques</h2>
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

      {/* MITRE Mapping */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">MITRE Mapping for AI/ML</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We map AI/ML security assessments to the MITRE ATLAS and ATT&CK frameworks, providing a threat-informed 
            view of your AI risks:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mitreMapping.map((item, index) => (
              <Card key={index} className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-lg">{item.tactic}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Badge variant="secondary" className="p-3 justify-center">OSCP</Badge>
            <Badge variant="secondary" className="p-3 justify-center">OSEP</Badge>
            <Badge variant="secondary" className="p-3 justify-center">AI/ML Security</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CRTE</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CRTO</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CEH</Badge>
            <Badge variant="secondary" className="p-3 justify-center">And more</Badge>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your AI?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us for an AI/ML security assessment and protect your models, data, and business from emerging threats.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}