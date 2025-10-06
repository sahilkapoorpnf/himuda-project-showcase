import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureShowcaseProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: 'hero' | 'accent' | 'gold';
}

export const FeatureShowcase = ({ icon: Icon, title, description, gradient = 'hero' }: FeatureShowcaseProps) => {
  const gradientClass = {
    hero: 'gradient-hero',
    accent: 'gradient-accent',
    gold: 'gradient-gold',
  }[gradient];

  return (
    <div className="card-elegant text-center">
      <div className={`${gradientClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};