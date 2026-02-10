import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';
import { Section, SectionHeading, SectionSubheading } from './section';

const Skills = () => {
  return (
    <Section id="skills">
      <div className="text-center">
        <SectionHeading className="text-[#1F2937]">
          Technical Skills
        </SectionHeading>
        <SectionSubheading className="text-[#4B5563]">
          My toolbox of languages, frameworks, and technologies.
        </SectionSubheading>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(portfolioData.skills).map(([category, skills]) => (
          <Card
            key={category}
            className="transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="text-[#111827]">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-[#CBD5E1] bg-[#F1F5F9] text-base text-[#1F2937]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
