import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Section, SectionHeading, SectionSubheading } from './section';

const Contact = () => {
  const { contact, resumeUrl } = portfolioData;

  const contactItems = [
    {
      icon: <Mail className="size-5" />,
      text: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <Phone className="size-5" />,
      text: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <Linkedin className="size-5" />,
      text: 'LinkedIn',
      href: contact.social.linkedin,
    },
    {
      icon: <Github className="size-5" />,
      text: 'GitHub',
      href: contact.social.github,
    },
  ];

  return (
    <Section id="contact" className="text-center">
      <SectionHeading>Get in Touch</SectionHeading>
      <SectionSubheading>
        I'm currently open to new opportunities. Feel free to reach out.
      </SectionSubheading>
      <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
        {contactItems.map(({ icon, text, href }, index) => (
          <Button
            key={index}
            variant="ghost"
            asChild
            className="text-muted-foreground"
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              {icon}
              <span className="ml-2">{text}</span>
            </a>
          </Button>
        ))}
      </div>
      <div className="mt-12">
        <Button size="lg" asChild>
          <a href={resumeUrl} download>
            <Download className="mr-2 size-5" />
            Download Resume
          </a>
        </Button>
      </div>
    </Section>
  );
};

export default Contact;
