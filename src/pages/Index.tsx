import { useState } from 'react';
import { PresentationSlide } from '@/components/PresentationSlide';
import { PropertyCard } from '@/components/PropertyCard';
import { FeatureShowcase } from '@/components/FeatureShowcase';
import { ChevronLeft, ChevronRight, Home, Search, FileText, UserCheck, Download, Building2, Filter, MapPin, Calendar, FileCheck } from 'lucide-react';

import heroProperty from '@/assets/hero-property.jpg';
import propertyListing1 from '@/assets/property-listing-1.jpg';
import propertyListing2 from '@/assets/property-listing-2.jpg';
import propertyListing3 from '@/assets/property-listing-3.jpg';
import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide
    <PresentationSlide key="title" gradient="hero">
      <div className="text-center text-white space-y-8">
        <h1 className="text-7xl font-bold mb-6 animate-fade-in">HIMUDA Digital Platform</h1>
        <p className="text-3xl font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Complete Digital Solution by Bitdecentro
        </p>
        <div className="h-1 w-32 bg-accent mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }} />
        <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Transforming Property Management & Allotment with Premium User Experience
        </p>
      </div>
    </PresentationSlide>,

    // Slide 2: Platform Overview
    <PresentationSlide key="overview">
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-primary text-center mb-12">Platform Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureShowcase
            icon={Home}
            title="Premium Home Page"
            description="Design quality exceeding DLF.in standards with HSVPHRY content structure"
            gradient="hero"
          />
          <FeatureShowcase
            icon={Building2}
            title="Smart Listings"
            description="Bayut-inspired project listings with advanced filters and search capabilities"
            gradient="accent"
          />
          <FeatureShowcase
            icon={FileCheck}
            title="Seamless Applications"
            description="Streamlined buy/allotment process with document management"
            gradient="gold"
          />
        </div>

        <div className="mt-12 p-8 bg-card rounded-2xl" style={{ boxShadow: 'var(--shadow-card)' }}>
          <h3 className="text-2xl font-semibold mb-4 text-primary">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Beautiful, responsive design</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Advanced property filtering</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Comprehensive property details</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Integrated document downloads</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>User registration & authentication</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Application management system</span>
            </li>
          </ul>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 3: Home Page Design
    <PresentationSlide key="homepage">
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary text-center mb-8">Home Page Design</h2>
        
        <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-elegant)' }}>
          <img 
            src={heroProperty} 
            alt="Hero Section" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="text-white p-12 max-w-2xl">
              <h3 className="text-4xl font-bold mb-4">Find Your Dream Property</h3>
              <p className="text-xl mb-6">Explore HIMUDA's premium residential and commercial projects</p>
              <div className="flex gap-4">
                <button className="btn-secondary">Browse Projects</button>
                <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="card-elegant text-center">
            <h4 className="text-3xl font-bold text-primary mb-2">500+</h4>
            <p className="text-muted-foreground">Active Projects</p>
          </div>
          <div className="card-elegant text-center">
            <h4 className="text-3xl font-bold text-secondary mb-2">10,000+</h4>
            <p className="text-muted-foreground">Happy Families</p>
          </div>
          <div className="card-elegant text-center">
            <h4 className="text-3xl font-bold text-accent mb-2">50+</h4>
            <p className="text-muted-foreground">Districts Covered</p>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 4: Project Listing Section
    <PresentationSlide key="listings">
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary text-center mb-4">Project Listings</h2>
        <p className="text-xl text-muted-foreground text-center mb-8">Bayut-inspired design with smart filters</p>
        
        <div className="flex gap-4 mb-6 flex-wrap justify-center">
          <button className="px-6 py-2 rounded-full bg-secondary text-secondary-foreground font-semibold hover:scale-105 transition-all">
            All Properties
          </button>
          <button className="px-6 py-2 rounded-full border border-border hover:bg-muted transition-all">
            Buy
          </button>
          <button className="px-6 py-2 rounded-full border border-border hover:bg-muted transition-all">
            Allotment
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PropertyCard
            image={propertyListing1}
            title="Green Valley Residences"
            location="Panchkula, Haryana"
            price="₹45,00,000"
            beds={3}
            baths={2}
            area="1,450 sq ft"
            type="buy"
          />
          <PropertyCard
            image={propertyListing2}
            title="Royal Townhouses"
            location="Ambala, Haryana"
            price="₹62,00,000"
            beds={4}
            baths={3}
            area="2,100 sq ft"
            type="allotment"
          />
          <PropertyCard
            image={propertyListing3}
            title="Commercial Hub Plaza"
            location="Karnal, Haryana"
            price="₹1,20,00,000"
            area="3,500 sq ft"
            type="buy"
          />
        </div>
      </div>
    </PresentationSlide>,

    // Slide 5: Filter & Search
    <PresentationSlide key="filters">
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary text-center mb-8">Advanced Filters & Search</h2>
        
        <div className="bg-card p-8 rounded-2xl" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Filter className="w-4 h-4 text-primary" />
                Property Type
              </label>
              <div className="flex gap-2">
                <button className="flex-1 py-2 px-4 rounded-lg bg-primary text-primary-foreground font-semibold">
                  Buy
                </button>
                <button className="flex-1 py-2 px-4 rounded-lg border border-border hover:bg-muted transition-all">
                  Allotment
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                District
              </label>
              <select className="w-full py-2 px-4 rounded-lg border border-input bg-background">
                <option>Select District</option>
                <option>Panchkula</option>
                <option>Ambala</option>
                <option>Karnal</option>
                <option>Yamunanagar</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                Date Range
              </label>
              <select className="w-full py-2 px-4 rounded-lg border border-input bg-background">
                <option>Any Time</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last Year</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Search className="w-4 h-4 text-primary" />
                Location Search
              </label>
              <input 
                type="text" 
                placeholder="Search by location..."
                className="w-full py-2 px-4 rounded-lg border border-input bg-background"
              />
            </div>
          </div>

          <button className="btn-secondary w-full md:w-auto px-12">
            Apply Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="card-elegant">
            <h3 className="text-xl font-semibold mb-3 text-primary">Smart Filtering</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Real-time property filtering
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Location-based search
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Date range filtering
              </li>
            </ul>
          </div>

          <div className="card-elegant">
            <h3 className="text-xl font-semibold mb-3 text-primary">User Experience</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Intuitive interface
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Instant results
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Responsive design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 6: Property Detail Page
    <PresentationSlide key="property-detail">
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary text-center mb-8">Property Detail Page</h2>
        
        <div className="bg-card rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-elegant)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            <div className="space-y-4">
              <img 
                src={interior1} 
                alt="Property Interior" 
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={interior2} 
                  alt="Property Detail 1" 
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src={propertyListing1} 
                  alt="Property Detail 2" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Luxury 3BHK Apartment</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Sector 21, Panchkula, Haryana
                </p>
              </div>

              <div className="text-4xl font-bold text-primary">₹45,00,000</div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">2</div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">1,450</div>
                  <div className="text-sm text-muted-foreground">Sq Ft</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Property Highlights</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Premium location with park view
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Modern amenities & 24/7 security
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Excellent connectivity to main areas
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Enquire Now
                </button>
                <button className="flex-1 btn-secondary flex items-center justify-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 7: User Flow
    <PresentationSlide key="user-flow" gradient="hero">
      <div className="space-y-12 text-white">
        <h2 className="text-5xl font-bold text-center mb-12">User Journey Flow</h2>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Browse Properties</h3>
              <p className="text-white/80 text-sm">
                User explores listings with advanced filters
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center text-2xl font-bold text-primary">
                2
              </div>
              <h3 className="text-xl font-semibold">View Details</h3>
              <p className="text-white/80 text-sm">
                Comprehensive property information and media
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Enquire/Download</h3>
              <p className="text-white/80 text-sm">
                Access brochures and property documents
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center text-2xl font-bold text-primary">
                4
              </div>
              <h3 className="text-xl font-semibold">Apply & Register</h3>
              <p className="text-white/80 text-sm">
                Submit application for buy/allotment
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Download className="w-6 h-6 text-accent" />
              Enquire Now Flow
            </h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Redirects to document center
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Download brochures & forms
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                View property documents
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-secondary" />
              Apply Now Flow
            </h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Check user authentication
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Register if new user
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Complete application form
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 8: Summary
    <PresentationSlide key="summary" gradient="accent">
      <div className="space-y-12 text-white">
        <h2 className="text-5xl font-bold text-center mb-8">Platform Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold">Premium User Experience</h3>
            <p className="text-white/90">
              Design quality surpassing DLF.in standards with intuitive navigation and modern aesthetics
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold">Advanced Search & Filters</h3>
            <p className="text-white/90">
              Bayut-inspired filtering system with location search, date ranges, and smart categorization
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold">Comprehensive Information</h3>
            <p className="text-white/90">
              Detailed property pages with high-quality images, specs, and downloadable documents
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold">Streamlined Applications</h3>
            <p className="text-white/90">
              Seamless buy/allotment process with user registration and application management
            </p>
          </div>
        </div>

        <div className="text-center mt-12 space-y-6">
          <div className="h-1 w-32 bg-white/40 mx-auto" />
          <h3 className="text-3xl font-bold">Ready to Transform HIMUDA's Digital Presence</h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A complete, modern solution designed to enhance user engagement and streamline property management
          </p>
        </div>
      </div>
    </PresentationSlide>,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      {slides[currentSlide]}
      
      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-card/95 backdrop-blur-sm px-6 py-3 rounded-full" style={{ boxShadow: 'var(--shadow-elegant)' }}>
        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold" style={{ boxShadow: 'var(--shadow-card)' }}>
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Index;