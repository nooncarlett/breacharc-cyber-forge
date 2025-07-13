import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Search, Target, FileText, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function VAPT() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4">
            <Shield className="w-4 h-4 mr-2" />
            VAPT Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vulnerability Assessment & Penetration Testing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Identify and validate vulnerabilities in your digital infrastructure with our expert-driven VAPT services.
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
            Our VAPT services are designed to rigorously test your digital assets by simulating real-world cyberattacks. 
            We combine advanced manual techniques with automated tools to uncover vulnerabilities that could be exploited 
            by malicious actors. Our ethical hackers operate within a professional and controlled framework, ensuring your 
            systems are tested safely and thoroughly.
          </p>
        </div>
      </section>

      {/* Types of Pentests */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Types of Pentests</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="cyber-card">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Black Box</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We approach your systems as an external attacker with no prior knowledge, simulating the perspective 
                  of a real-world outsider. This method is ideal for assessing your external defenses and incident 
                  detection capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Search className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Grey Box</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With limited information or access (such as user credentials or documentation), we focus on specific 
                  areas or features, providing a deeper assessment while still reflecting realistic attack scenarios.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mb-4" />
                <CardTitle>White Box</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We conduct an in-depth analysis with full access to technical details, such as architecture documents 
                  or source code. This approach uncovers vulnerabilities that may not be visible from the outside and 
                  helps strengthen your security posture at every layer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Our Methodology</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reconnaissance</h3>
                <p className="text-muted-foreground">Gathering information about your systems to map the attack surface.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mapping</h3>
                <p className="text-muted-foreground">Identifying entry points, technologies, and potential weak spots.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                <p className="text-muted-foreground">Using both automated scanners and manual techniques to find vulnerabilities.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Exploitation</h3>
                <p className="text-muted-foreground">Attempting to exploit discovered flaws to assess their real-world impact, always within agreed boundaries.</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mt-8">
            By blending automation with human expertise, we identify not only technical flaws but also logic errors 
            and complex attack chains that tools alone may miss.
          </p>
        </div>
      </section>

      {/* Tools & Credentials */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Tools & Techniques</h2>
              <p className="text-muted-foreground mb-6">
                Our toolkit includes industry-standard solutions (such as Burp Suite, Nmap, Metasploit, and Wireshark), 
                open-source utilities, and custom scripts developed in-house. We select the right tools for each engagement, 
                but our true value lies in the expertise and creativity of our testers, who can uncover subtle vulnerabilities 
                and assess their real-world risk.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Workforce Credentials</h2>
              <div className="grid grid-cols-2 gap-4">
                <Badge variant="secondary" className="p-2 justify-center">OSCP</Badge>
                <Badge variant="secondary" className="p-2 justify-center">CEH</Badge>
                <Badge variant="secondary" className="p-2 justify-center">OSEP</Badge>
                <Badge variant="secondary" className="p-2 justify-center">CRTE</Badge>
                <Badge variant="secondary" className="p-2 justify-center">CRTO</Badge>
                <Badge variant="secondary" className="p-2 justify-center">CISSP</Badge>
                <Badge variant="secondary" className="p-2 justify-center">CISM</Badge>
                <Badge variant="secondary" className="p-2 justify-center">And more</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us for a free initial security assessment and see how our VAPT services can help protect your organization.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}