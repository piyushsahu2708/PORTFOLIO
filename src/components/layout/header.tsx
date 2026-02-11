'use client';

import {cn} from '@/lib/utils';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Menu, Moon, Sun, X} from 'lucide-react';

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
  const [theme, setTheme] = useState<string | null>(null);

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

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;
    const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

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
        <div className="flex items-center gap-2">
          <a href="#home" className="text-lg font-bold text-primary">
            Piyush Sahu
          </a>
          {theme !== null ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="shrink-0"
            >
              {theme === 'dark' ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          ) : (
            <div className="size-10 shrink-0" />
          )}
        </div>
        <div className="flex items-center gap-2">
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
