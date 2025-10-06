import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import bitdecentroLogo from '@/assets/bitdecentro-original.png';

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
      <div className="absolute top-4 right-4 z-50">
        <img 
          src={bitdecentroLogo} 
          alt="Bitdecentro Logo" 
          className="h-10 object-contain drop-shadow-lg"
          style={{ filter: gradient === 'hero' || gradient === 'accent' ? 'brightness(0) invert(1)' : 'none' }}
        />
      </div>
      <div className="max-w-7xl w-full mx-auto">
        {children}
      </div>
    </section>
  );
};