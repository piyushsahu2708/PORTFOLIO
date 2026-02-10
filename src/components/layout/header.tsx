'use client';

import {cn} from '@/lib/utils';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Menu, X} from 'lucide-react';

const navLinks = [
  {href: '#home', label: 'Home'},
  {href: '#experience', label: 'Experience'},
  {href: '#skills', label: 'Skills'},
  {href: '#projects', label: 'Projects'},
  {href: '#achievements', label: 'Achievements'},
  {href: '#contact', label: 'Contact'},
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-border/50 bg-background/80 backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-bold text-primary">
          Piyush Sahu
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(({href, label}) => (
            <a
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                activeSection === href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-4 border-t border-border/50 bg-background py-4">
            {navLinks.map(({href, label}) => (
              <a
                key={href}
                href={href}
                onClick={handleLinkClick}
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  activeSection === href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
