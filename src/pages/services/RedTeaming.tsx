import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Target, Brain, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function RedTeaming() {
  const mitreAttackTactics = [
    { name: "Initial Access", description: "Phishing, exploiting public-facing applications, or supply chain compromise to gain a foothold." },
    { name: "Execution", description: "Running malicious code via scripts, macros, or remote services." },
    { name: "Persistence", description: "Creating new user accounts, scheduled tasks, or registry modifications to maintain access." },
    { name: "Privilege Escalation", description: "Exploiting vulnerabilities or misconfigurations to gain higher-level permissions." },
    { name: "Defense Evasion", description: "Disabling security tools, obfuscating files, or clearing logs to avoid detection." },
    { name: "Credential Access", description: "Harvesting passwords, hashes, or tokens using tools like Mimikatz." },
    { name: "Discovery", description: "Enumerating users, hosts, and network shares to map the environment." },
    { name: "Lateral Movement", description: "Moving between systems using stolen credentials or remote desktop tools." },
    { name: "Collection", description: "Gathering sensitive files, screenshots, or keystrokes." },
    { name: "Exfiltration", description: "Transferring stolen data out of the network via encrypted channels." },
    { name: "Impact", description: "Simulating ransomware, data destruction, or business disruption scenarios." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Red Teaming
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Red Teaming
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full-scope, adversary simulation exercise designed to test your organization's detection and response capabilities against sophisticated, real-world attacks.
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
            Red Teaming is a full-scope, adversary simulation exercise designed to test your organization's detection 
            and response capabilities against sophisticated, real-world attacks. Our Red Team experts emulate the tactics, 
            techniques, and procedures (TTPs) of advanced threat actors to uncover gaps in your security posture.
          </p>
          
          <h3 className="text-2xl font-bold mb-6">What is Red Teaming?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Unlike traditional penetration testing, Red Teaming goes beyond technical vulnerabilities to assess your 
            people, processes, and technology. The goal is to simulate a real-world attack scenario, including social 
            engineering, physical intrusion, and lateral movement, to evaluate your organization's readiness and resilience.
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
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Objective-based Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aligned with your business priorities and threat landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle>APT Emulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Emulation of advanced persistent threats (APTs) using real-world TTPs.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>End-to-end Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  End-to-end attack scenarios targeting people, processes, and technology.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Collaborative Debriefs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collaborative debriefs with your blue team to improve detection and response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methods & Tools */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Methods & Tools</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Social Engineering</h3>
              <p className="text-muted-foreground">Phishing, pretexting, physical access attempts</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Network and Application Exploitation</h3>
              <p className="text-muted-foreground">Targeting vulnerabilities in your infrastructure</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Lateral Movement and Privilege Escalation</h3>
              <p className="text-muted-foreground">Moving through your network to achieve objectives</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Custom Red Team Toolkits</h3>
              <p className="text-muted-foreground">Open-source frameworks (Cobalt Strike, Metasploit, etc.)</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">MITRE ATT&CK Aligned Reporting</h3>
              <p className="text-muted-foreground">Reporting aligned with MITRE ATT&CK and threat intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* MITRE ATT&CK */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">MITRE ATT&CK Tactics in Red Teaming</h2>
          <p className="text-lg text-muted-foreground mb-12">
            The MITRE ATT&CK framework is an industry-standard knowledge base of adversary tactics and techniques 
            based on real-world observations. Our Red Team engagements are mapped to these tactics, ensuring a 
            comprehensive, threat-informed approach:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mitreAttackTactics.map((tactic, index) => (
              <Card key={index} className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-lg">{tactic.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tactic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why MITRE Matters */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Why MITRE Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Threat-Informed Defense</h3>
              <p className="text-muted-foreground mb-6">Aligns your security with real-world adversary behaviors.</p>
              
              <h3 className="text-xl font-semibold mb-4">Measurable Improvement</h3>
              <p className="text-muted-foreground">Track your detection and response capabilities against each MITRE tactic.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Actionable Insights</h3>
              <p className="text-muted-foreground mb-6">Receive detailed reports and recommendations mapped to MITRE techniques.</p>
              
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground">Stay ahead of evolving threats with a framework that is regularly updated by the global security community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Workforce Credentials</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Badge variant="secondary" className="p-3 justify-center">OSCP</Badge>
            <Badge variant="secondary" className="p-3 justify-center">OSEP</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CRTE</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CRTO</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CEH</Badge>
            <Badge variant="secondary" className="p-3 justify-center">CISSP</Badge>
            <Badge variant="secondary" className="p-3 justify-center">And more</Badge>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Test Your Defenses?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us for a Red Teaming engagement and discover how resilient your organization is against real-world threats.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}