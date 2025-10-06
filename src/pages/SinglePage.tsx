import { PropertyCard } from '@/components/PropertyCard';
import { FeatureShowcase } from '@/components/FeatureShowcase';
import { Home, Search, FileText, UserCheck, Download, Building2, Filter, MapPin, Calendar, FileCheck, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroProperty from '@/assets/hero-property.jpg';
import propertyListing1 from '@/assets/property-listing-1.jpg';
import propertyListing2 from '@/assets/property-listing-2.jpg';
import propertyListing3 from '@/assets/property-listing-3.jpg';
import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';

const SinglePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroProperty})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative z-10 text-center text-white space-y-8 px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            HIMUDA Digital Platform
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Complete Digital Solution by Bitdecentro
          </p>
          <div className="h-1 w-32 bg-accent mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }} />
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Transforming Property Management & Allotment with Premium User Experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link to="/" className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg">
              View Presentation Mode
            </Link>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-12 h-12 text-white/70" />
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Platform Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive solution combining premium design, advanced functionality, and seamless user experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

          <div className="bg-card p-8 md:p-12 rounded-3xl" style={{ boxShadow: 'var(--shadow-card)' }}>
            <h3 className="text-3xl font-semibold mb-8 text-primary text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              {[
                'Beautiful, responsive design',
                'Advanced property filtering',
                'Comprehensive property details',
                'Integrated document downloads',
                'User registration & authentication',
                'Application management system'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Home Page Design Mockup */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Home Page Design
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium design combining DLF.in aesthetics with HSVPHRY content structure
            </p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden mb-12" style={{ boxShadow: 'var(--shadow-elegant)' }}>
            <img 
              src={heroProperty} 
              alt="Hero Section" 
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent flex items-center">
              <div className="text-white p-8 md:p-16 max-w-3xl">
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Find Your Dream Property</h3>
                <p className="text-lg md:text-2xl mb-8 text-white/90">
                  Explore HIMUDA's premium residential and commercial projects across Haryana
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-secondary px-8 py-4 text-lg">Browse Projects</button>
                  <button className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Active Projects' },
              { number: '10,000+', label: 'Happy Families' },
              { number: '50+', label: 'Districts Covered' }
            ].map((stat, index) => (
              <div key={index} className="card-elegant text-center p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{stat.number}</div>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Filters Showcase */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Advanced Filters & Search
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bayut-inspired filtering system for precise property discovery
            </p>
          </div>
          
          <div className="bg-card p-8 md:p-12 rounded-3xl mb-12" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="space-y-3">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary" />
                  Property Type
                </label>
                <div className="flex gap-2">
                  <button className="flex-1 py-3 px-4 rounded-lg bg-primary text-primary-foreground font-semibold">
                    Buy
                  </button>
                  <button className="flex-1 py-3 px-4 rounded-lg border border-border hover:bg-muted transition-all">
                    Allotment
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  District
                </label>
                <select className="w-full py-3 px-4 rounded-lg border border-input bg-background">
                  <option>Select District</option>
                  <option>Panchkula</option>
                  <option>Ambala</option>
                  <option>Karnal</option>
                  <option>Yamunanagar</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  Date Range
                </label>
                <select className="w-full py-3 px-4 rounded-lg border border-input bg-background">
                  <option>Any Time</option>
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>Last Year</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  Location Search
                </label>
                <input 
                  type="text" 
                  placeholder="Search by location..."
                  className="w-full py-3 px-4 rounded-lg border border-input bg-background"
                />
              </div>
            </div>

            <button className="btn-secondary w-full md:w-auto px-12 py-3 text-lg">
              Apply Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elegant p-8">
              <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Smart Filtering</h3>
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                  Real-time property filtering
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                  Location-based search
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                  Date range filtering
                </li>
              </ul>
            </div>

            <div className="card-elegant p-8">
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">User Experience</h3>
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                  Intuitive interface
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                  Instant results
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                  Responsive design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Project Listings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Bayut-inspired design with comprehensive property information
            </p>
          </div>
          
          <div className="flex gap-4 mb-12 flex-wrap justify-center">
            <button className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:scale-105 transition-all text-lg">
              All Properties
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-border hover:bg-muted transition-all text-lg">
              Buy
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-border hover:bg-muted transition-all text-lg">
              Allotment
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      {/* Property Detail Page Mockup */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Property Detail Page
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive property information with immersive visuals
            </p>
          </div>
          
          <div className="bg-card rounded-3xl overflow-hidden p-6 md:p-8" style={{ boxShadow: 'var(--shadow-elegant)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img 
                  src={interior1} 
                  alt="Property Interior" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src={interior2} 
                    alt="Property Detail 1" 
                    className="w-full h-40 object-cover rounded-xl hover:scale-105 transition-transform cursor-pointer"
                  />
                  <img 
                    src={propertyListing1} 
                    alt="Property Detail 2" 
                    className="w-full h-40 object-cover rounded-xl hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">Luxury 3BHK Apartment</h3>
                  <p className="text-muted-foreground flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5" />
                    Sector 21, Panchkula, Haryana
                  </p>
                </div>

                <div className="text-4xl md:text-5xl font-bold text-primary">₹45,00,000</div>

                <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">2</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1,450</div>
                    <div className="text-sm text-muted-foreground">Sq Ft</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-xl">Property Highlights</h4>
                  <ul className="space-y-3 text-muted-foreground text-lg">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      Premium location with park view
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      Modern amenities & 24/7 security
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      Excellent connectivity to main areas
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="flex-1 btn-primary flex items-center justify-center gap-2 py-4 text-lg">
                    <Download className="w-5 h-5" />
                    Enquire Now
                  </button>
                  <button className="flex-1 btn-secondary flex items-center justify-center gap-2 py-4 text-lg">
                    <UserCheck className="w-5 h-5" />
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Flow */}
      <section className="py-24 px-4 gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              User Journey Flow
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Seamless experience from discovery to application
            </p>
          </div>
          
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: 1,
                  title: 'Browse Properties',
                  description: 'User explores listings with advanced filters',
                  color: 'bg-secondary'
                },
                {
                  step: 2,
                  title: 'View Details',
                  description: 'Comprehensive property information and media',
                  color: 'bg-accent'
                },
                {
                  step: 3,
                  title: 'Enquire/Download',
                  description: 'Access brochures and property documents',
                  color: 'bg-secondary'
                },
                {
                  step: 4,
                  title: 'Apply & Register',
                  description: 'Submit application for buy/allotment',
                  color: 'bg-accent'
                }
              ].map((item) => (
                <div key={item.step} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center space-y-4 hover:bg-white/20 transition-all">
                  <div className={`w-20 h-20 rounded-full ${item.color} mx-auto flex items-center justify-center text-3xl font-bold ${item.color === 'bg-accent' ? 'text-primary' : 'text-white'}`}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <Download className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Enquire Now Flow</h3>
              </div>
              <ul className="space-y-3 text-white/90 text-lg">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                  Redirects to document center
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                  Download brochures & forms
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                  View property documents
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <UserCheck className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Apply Now Flow</h3>
              </div>
              <ul className="space-y-3 text-white/90 text-lg">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                  Check user authentication
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                  Register if new user
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                  Complete application form
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits / Summary */}
      <section className="py-24 px-4 gradient-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Platform Benefits
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need for a world-class property management platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Home,
                title: 'Premium User Experience',
                description: 'Design quality surpassing DLF.in standards with intuitive navigation and modern aesthetics'
              },
              {
                icon: Search,
                title: 'Advanced Search & Filters',
                description: 'Bayut-inspired filtering system with location search, date ranges, and smart categorization'
              },
              {
                icon: FileText,
                title: 'Comprehensive Information',
                description: 'Detailed property pages with high-quality images, specs, and downloadable documents'
              },
              {
                icon: UserCheck,
                title: 'Streamlined Applications',
                description: 'Seamless buy/allotment process with user registration and application management'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl space-y-4 hover:bg-white/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{benefit.title}</h3>
                <p className="text-white/90 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-8">
            <div className="h-1 w-32 bg-white/40 mx-auto" />
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform HIMUDA's Digital Presence
            </h3>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A complete, modern solution designed to enhance user engagement and streamline property management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link to="/" className="bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all text-lg inline-flex items-center justify-center gap-2">
                View Presentation Mode
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary text-primary-foreground text-center">
        <p className="text-lg">© 2025 Bitdecentro - HIMUDA Digital Platform Solution</p>
      </footer>
    </div>
  );
};

export default SinglePage;
