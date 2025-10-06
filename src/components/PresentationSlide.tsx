import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  gradient?: 'hero' | 'accent' | 'gold' | 'none';
}

export const PresentationSlide = ({ children, className, gradient = 'none' }: PresentationSlideProps) => {
  const gradientClass = {
    hero: 'gradient-hero',
    accent: 'gradient-accent',
    gold: 'gradient-gold',
    none: 'bg-background',
  }[gradient];

  return (
    <section className={cn('slide-container', gradientClass, className)}>
      <div className="max-w-7xl w-full mx-auto">
        {children}
      </div>
    </section>
  );
};