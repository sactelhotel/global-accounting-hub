import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#methodology', label: t.nav.methodology },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-serif">B</span>
            </div>
            <span className="font-serif text-xl font-bold text-foreground">
              Barahona<span className="text-secondary">Pro</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <a href="tel:+13438433295" className="hidden sm:flex">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">1 (343) 843-3295</span>
              </Button>
            </a>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:+13438433295" className="sm:hidden px-4 py-2">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  1 (343) 843-3295
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
