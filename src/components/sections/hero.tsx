import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const { name, roles, summary, profilePicture, contact } = portfolioData;

  return (
    <section id="home" className="relative min-h-[80vh] w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
      <div className="container relative flex h-full min-h-[80vh] flex-col items-center justify-center text-center">
        {profilePicture && (
          <Image
            src={profilePicture.imageUrl}
            alt={name}
            width={120}
            height={120}
            priority
            data-ai-hint={profilePicture.imageHint}
            className="mb-6 size-32 rounded-full border-4 border-background object-cover shadow-lg"
          />
        )}
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          {name}
        </h1>
        <div className="mt-3">
          <p className="text-lg text-primary md:text-xl">
            {roles.join(' | ')}
          </p>
        </div>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {summary}
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2" /> LinkedIn
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href={contact.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" /> GitHub
            </a>
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <a href="#experience" aria-label="Scroll down">
                <ArrowDown className="size-6 animate-bounce text-muted-foreground" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
