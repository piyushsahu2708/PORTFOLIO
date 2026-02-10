import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';
import { Github, PlayCircle, Star } from 'lucide-react';
import Image from 'next/image';
import { Section, SectionHeading, SectionSubheading } from './section';

const Projects = () => {
  return (
    <Section id="projects" className="bg-muted/50">
      <div className="text-center">
        <SectionHeading>My Projects</SectionHeading>
        <SectionSubheading>
          A selection of projects that showcase my skills and passion.
        </SectionSubheading>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            {project.image && (
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  data-ai-hint={project.image.imageHint}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <ul className="space-y-2">
                {project.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-sm">
                    <Star className="mr-2 mt-1 size-4 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech, tIndex) => (
                  <Badge key={tIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto border-t px-6 py-4">
              <div className="flex w-full justify-between gap-4">
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" />
                    Source
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
