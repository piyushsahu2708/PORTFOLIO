import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';
import { CheckCircle2 } from 'lucide-react';
import { Section, SectionHeading, SectionSubheading } from './section';

const Experience = () => {
  return (
    <Section id="experience" className="bg-muted/50">
      <div className="text-center">
        <SectionHeading>Work Experience</SectionHeading>
        <SectionSubheading>
          My professional journey and key contributions.
        </SectionSubheading>
      </div>
      <div className="relative mt-12">
        <div
          className="absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-border"
          aria-hidden="true"
        />
        <div className="space-y-12">
          {portfolioData.experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative flex items-start md:grid md:grid-cols-2"
            >
              <div
                className={`flex-shrink-0 ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2 md:text-right'
                }`}
              >
                <p className="font-semibold text-primary">{exp.period}</p>
              </div>
              <div
                className={`relative w-full ${
                  index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12'
                }`}
              >
                <div
                  className={`absolute -left-1.5 top-1.5 size-3 rounded-full border-2 border-background bg-primary transition-transform group-hover:scale-125 md:left-1/2 md:-ml-[7px]`}
                />
                <Card className="ml-6 md:ml-0">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {exp.role} at {exp.company}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start">
                          <CheckCircle2 className="mr-2 mt-1 size-4 shrink-0 text-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, tIndex) => (
                        <Badge key={tIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
