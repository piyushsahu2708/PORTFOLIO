import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('container py-16 md:py-24', className)}>
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  className?: string;
  children: ReactNode;
};

export function SectionHeading({ className, children }: SectionHeadingProps) {
    return (
        <h2 className={cn("text-3xl font-bold tracking-tight text-primary md:text-4xl", className)}>
            {children}
        </h2>
    );
}

export function SectionSubheading({ className, children }: SectionHeadingProps) {
    return (
        <p className={cn("mt-4 text-lg text-muted-foreground", className)}>
            {children}
        </p>
    );
}
