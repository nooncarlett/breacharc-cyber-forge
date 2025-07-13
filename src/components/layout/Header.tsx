import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'SERVICES', href: '/services', hasDropdown: true },
    { name: 'SOLUTIONS', href: '/solutions' },
    { name: 'ABOUT', href: '/about' },
    { name: 'RESOURCES', href: '/resources' },
  ];

  const serviceItems = [
    { name: 'VAPT', href: '/services/vapt' },
    { name: 'Red Teaming', href: '/services/red-teaming' },
    { name: 'AI/ML Security', href: '/services/ai-ml-security' },
    { name: 'Compliance', href: '/services/compliance' },
    { name: 'Cloud Security', href: '/services/cloud-security' },
    { name: 'Dark Web Monitoring', href: '/services/dark-web-monitoring' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/services') {
      return location.pathname.startsWith('/services');
    }
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-glow" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/a97515c0-ef04-4bea-8bf5-15720d4ea333.png" 
                alt="Breach Arc"
                className="h-8 w-auto group-hover:drop-shadow-lg transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BREACH ARC
              </h1>
              <p className="text-xs text-muted-foreground font-mono">
                DETECT DEFEND DOMINATE
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-primary relative",
                    isActivePath(item.href) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    isActivePath(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
                
                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="cyber-card min-w-[200px] p-4 space-y-2">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="btn-cyber">
              <Link to="/contact">GET IN TOUCH</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block text-lg font-medium transition-colors duration-200",
                        isActivePath(item.href) 
                          ? "text-primary" 
                          : "text-muted-foreground hover:text-primary"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="btn-cyber w-full mt-6">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    GET IN TOUCH
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;