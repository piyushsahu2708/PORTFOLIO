import {
  Card,
  CardContent
} from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';
import { Award } from 'lucide-react';
import { Section, SectionHeading, SectionSubheading } from './section';

const Achievements = () => {
  return (
    <Section id="achievements">
      <div className="text-center">
        <SectionHeading>Achievements & Certifications</SectionHeading>
        <SectionSubheading>
          My dedication to continuous learning and growth.
        </SectionSubheading>
      </div>
      <div className="mt-12">
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {portfolioData.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <Award className="mr-3 mt-1 size-5 shrink-0 text-accent" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default Achievements;
