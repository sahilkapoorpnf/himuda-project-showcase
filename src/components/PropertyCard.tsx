import { MapPin, BedDouble, Bath, Maximize } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds?: number;
  baths?: number;
  area?: string;
  type: 'buy' | 'allotment';
}

export const PropertyCard = ({ image, title, location, price, beds, baths, area, type }: PropertyCardProps) => {
  return (
    <div className="card-elegant overflow-hidden">
      <div className="relative h-48 overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
          type === 'buy' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
        }`}>
          {type === 'buy' ? 'For Sale' : 'For Allotment'}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
      
      <div className="flex items-center gap-2 text-muted-foreground mb-3">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{location}</span>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        {beds && (
          <div className="flex items-center gap-1">
            <BedDouble className="w-4 h-4" />
            <span>{beds} Beds</span>
          </div>
        )}
        {baths && (
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{baths} Baths</span>
          </div>
        )}
        {area && (
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{area}</span>
          </div>
        )}
      </div>
      
      <div className="text-2xl font-bold text-primary mb-4">{price}</div>
      
      <div className="flex gap-2">
        <button className="flex-1 py-2 px-4 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          View Details
        </button>
        <button className="flex-1 py-2 px-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 text-sm font-semibold">
          Apply Now
        </button>
      </div>
    </div>
  );
};