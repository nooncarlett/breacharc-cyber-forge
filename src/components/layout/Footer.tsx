import { Link } from 'react-router-dom';
import { Mail, MapPin, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const services = [
    { name: 'Vulnerability Assessment & Penetration Testing (VAPT)', href: '/services/vapt' },
    { name: 'Red Teaming', href: '/services/red-teaming' },
    { name: 'AI/ML Security', href: '/services/ai-ml-security' },
    { name: 'Compliance', href: '/services/compliance' },
    { name: 'Cloud Security', href: '/services/cloud-security' },
    { name: 'Dark Web Monitoring', href: '/services/dark-web-monitoring' },
  ];

  const handleEventsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('No upcoming events at the moment. Please check back later!');
  };

  const resources = [
    { name: 'Blog', href: '/under-construction' },
    { name: 'Whitepapers', href: '/under-construction' },
    { name: 'Security Tools', href: '/under-construction' },
    { name: 'Research', href: '/under-construction' },
    { name: 'Events', href: '#', onClick: handleEventsClick },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a97515c0-ef04-4bea-8bf5-15720d4ea333.png" 
                alt="Breach Arc"
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold text-primary">BREACH ARC</h3>
                <p className="text-xs text-muted-foreground font-mono">
                  DETECT DEFEND DOMINATE
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Next-gen defense from red teaming to AI starts with Breach Arc.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:security@breacharc.com" className="hover:text-primary transition-colors">
                  security@breacharc.com
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  NO 22 FLYDESK, 5TH CROSS RD, PALM HEIGHTS,<br />
                  Banaswadi, Bangalore North,<br />
                  Bangalore-560043, Karnataka
                </address>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  {resource.onClick ? (
                    <button
                      onClick={resource.onClick}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {resource.name}
                    </button>
                  ) : (
                    <Link
                      to={resource.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {resource.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Breach Arc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;