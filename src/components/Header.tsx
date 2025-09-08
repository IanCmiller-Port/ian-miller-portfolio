import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-foreground hover:text-primary transition-colors relative ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <Button variant="outline" size="sm" className="hidden md:block" asChild>
            <a 
              href="https://docs.google.com/document/d/1-HUa4lKR1rq3ZFqEFRg1en_MKp88ixPXLHGuMJNYDg0/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center"
            >
              Resume
            </a>
          </Button>

          {/* Mobile menu button */}
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;