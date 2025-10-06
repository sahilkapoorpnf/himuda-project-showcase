import { useState } from 'react';
import { PresentationSlide } from '@/components/PresentationSlide';
import { PropertyCard } from '@/components/PropertyCard';
import { FeatureShowcase } from '@/components/FeatureShowcase';
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { PropertyPopup } from "@/components/PropertyPopup";
import { ImportantLinks } from "@/components/ImportantLinks";
import { LatestNews } from "@/components/LatestNews";
import { OnlineServices } from "@/components/OnlineServices";
import { TendersSection } from "@/components/TendersSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CitizenSection } from "@/components/CitizenSection";
import { MinistersSection } from "@/components/MinistersSection";
import { Footer } from "@/components/Footer";
import { WhatsNewSection } from "@/components/WhatsNewSection";
import { ChevronLeft, ChevronRight, Home, Search, FileText, UserCheck, Download, Building2, Filter, MapPin, Calendar, FileCheck, User, CreditCard, Bell, Edit, MessageSquare, Shield, CheckCircle2, Forward, Upload, FileSpreadsheet, Megaphone, FolderCheck, Settings, DollarSign, Receipt, TrendingUp, FileBarChart, RefreshCw, AlertCircle, PieChart, Wallet, Crown, Users, Lock, Globe, Activity, Database, BarChart3, Target, Newspaper } from 'lucide-react';

import heroProperty from '@/assets/hero-property.jpg';
import propertyListing1 from '@/assets/property-listing-1.jpg';
import propertyListing2 from '@/assets/property-listing-2.jpg';
import propertyListing3 from '@/assets/property-listing-3.jpg';
import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';
import himudaLogo from '@/assets/himuda-logo.png';
import bitdecentroLogo from '@/assets/bitdecentro-original.png';
import shimlaResidence from '@/assets/shimla-residence.jpg';
import dharamshalaTownhouse from '@/assets/dharamshala-townhouse.jpg';
import solanCommercial from '@/assets/solan-commercial.jpg';
import manaliPlot from '@/assets/manali-plot.jpg';
import kasauliPlot from '@/assets/kasauli-plot.jpg';
import baddiPlot from '@/assets/baddi-plot.jpg';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide
    <PresentationSlide key="title" gradient="hero">
      <div className="relative min-h-screen">
        <div className="absolute top-4 left-4">
          <img 
            src={himudaLogo} 
            alt="HIMUDA Logo" 
            className="w-24 h-24 object-contain animate-fade-in drop-shadow-2xl"
          />
        </div>
        <div className="flex items-center justify-center min-h-screen">
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
        </div>
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

    // Slide 3: NEW HIMUDA WEBSITE VIEW - Government Style
    <div key="new-website" className="min-h-screen bg-background overflow-y-auto">
      <Header />
      
      <div className="pt-44">
        <HeroBanner />
        <PropertyPopup />

        {/* Ministers/Leadership Section */}
        <MinistersSection />

        {/* What's New Marquee Section */}
        <WhatsNewSection />

        {/* Three Column Section - Properly Aligned */}
        <section className="py-16 bg-accent/5 border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="h-full">
                <ImportantLinks />
              </div>
              <div className="h-full">
                <LatestNews />
              </div>
              <div className="h-full">
                <OnlineServices />
              </div>
            </div>
          </div>
        </section>

        <TendersSection />
        <ProjectsSection />
        <CitizenSection />
        <Footer />
      </div>
    </div>,

    // Slide 4: Project Listing Section
    <PresentationSlide key="listings">
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-primary text-center mb-4">Project Listings</h2>
        <p className="text-xl text-muted-foreground text-center mb-8">Bayut-inspired design with smart filters</p>
        
        <div className="flex gap-4 mb-6 flex-wrap justify-center">
          <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all">
            All Properties
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Flats
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Plots
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Commercial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PropertyCard
            image={shimlaResidence}
            title="Green Valley Residences"
            location="Shimla, Himachal Pradesh"
            price="₹45,00,000"
            beds={3}
            baths={2}
            area="1,450 sq ft"
            type="buy"
          />
          <PropertyCard
            image={dharamshalaTownhouse}
            title="Royal Townhouses"
            location="Dharamshala, Himachal Pradesh"
            price="₹62,00,000"
            beds={4}
            baths={3}
            area="2,100 sq ft"
            type="allotment"
          />
          <PropertyCard
            image={solanCommercial}
            title="Commercial Hub Plaza"
            location="Solan, Himachal Pradesh"
            price="₹1,20,00,000"
            area="3,500 sq ft"
            type="buy"
          />
          <PropertyCard
            image={manaliPlot}
            title="Mountain View Plots"
            location="Manali, Himachal Pradesh"
            price="₹35,00,000"
            area="2,500 sq ft"
            type="allotment"
          />
          <PropertyCard
            image={kasauliPlot}
            title="Premium Hill Plots"
            location="Kasauli, Himachal Pradesh"
            price="₹28,00,000"
            area="2,000 sq ft"
            type="buy"
          />
          <PropertyCard
            image={baddiPlot}
            title="Industrial Plots"
            location="Baddi, Himachal Pradesh"
            price="₹85,00,000"
            area="5,000 sq ft"
            type="allotment"
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
                <option>Shimla</option>
                <option>Kangra</option>
                <option>Mandi</option>
                <option>Solan</option>
                <option>Sirmaur</option>
                <option>Una</option>
                <option>Hamirpur</option>
                <option>Kullu</option>
                <option>Bilaspur</option>
                <option>Chamba</option>
                <option>Kinnaur</option>
                <option>Lahaul and Spiti</option>
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

          <button className="w-full md:w-auto px-12 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all">
            Apply Filters
          </button>
        </div>

        {/* Search Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-primary">Search Results</h3>
            <span className="text-muted-foreground">6 Properties Found</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PropertyCard
              image={shimlaResidence}
              title="Green Valley Residences"
              location="Shimla, Himachal Pradesh"
              price="₹45,00,000"
              beds={3}
              baths={2}
              area="1,450 sq ft"
              type="buy"
            />
            <PropertyCard
              image={dharamshalaTownhouse}
              title="Royal Townhouses"
              location="Dharamshala, Himachal Pradesh"
              price="₹62,00,000"
              beds={4}
              baths={3}
              area="2,100 sq ft"
              type="allotment"
            />
            <PropertyCard
              image={manaliPlot}
              title="Mountain View Plots"
              location="Manali, Himachal Pradesh"
              price="₹35,00,000"
              area="2,500 sq ft"
              type="allotment"
            />
          </div>
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
              <h3 className="text-xl font-semibold">Apply & Track</h3>
              <p className="text-white/80 text-sm">
                Submit application and monitor status
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">Seamless Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">&lt; 3 min</div>
              <p className="text-white/80">Average browsing time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1-Click</div>
              <p className="text-white/80">Document downloads</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-white/80">Application tracking</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 8: Allottee / Citizen User Type
    <PresentationSlide key="citizen-user" gradient="hero">
      <div className="space-y-12 text-white">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/30">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl font-bold mb-4 animate-fade-in">Allottee / Citizen User</h2>
          <div className="h-1 w-40 bg-accent mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Registered citizen or applicant who has purchased/applied for a property
          </p>
        </div>

        {/* Access Level Permissions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-secondary/30 rounded-lg">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-3xl font-semibold">Access Level Permissions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                <UserCheck className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Dashboard Access</h4>
                <p className="text-white/80 text-base">Login-based access to personalized user dashboard with complete overview</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="p-2 bg-secondary/20 rounded-lg shrink-0">
                <Edit className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Manage Data</h4>
                <p className="text-white/80 text-base">View, edit, and manage applications, payments, and documents seamlessly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center">Key Responsibility Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <FileCheck className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Application Status</h4>
              <p className="text-white/80">View real-time allotment and application status with detailed tracking</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <CreditCard className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Online Payments</h4>
              <p className="text-white/80">Pay instalments or dues online securely with multiple payment options</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Download className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Document Downloads</h4>
              <p className="text-white/80">Download allotment letters, receipts, and agreements instantly</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <MessageSquare className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Grievances & Feedback</h4>
              <p className="text-white/80">Submit grievances or feedback directly through the portal</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <User className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Profile Management</h4>
              <p className="text-white/80">Update personal details and KYC documents anytime</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Bell className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Smart Notifications</h4>
              <p className="text-white/80">Receive system notifications, payment reminders, and official messages</p>
            </div>
          </div>
        </div>

        {/* User Benefits */}
        <div className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto mt-12">
          <h3 className="text-3xl font-bold text-center mb-8">Empowering Citizens</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-accent">24/7</div>
              <p className="text-lg text-white/90">Portal Access</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-secondary">100%</div>
              <p className="text-lg text-white/90">Digital Process</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-accent">Real-time</div>
              <p className="text-lg text-white/90">Status Updates</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 9: IT Department Login
    <PresentationSlide key="it-department" gradient="hero">
      <div className="space-y-12 text-white">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Shield className="w-6 h-6 text-accent" />
            <span className="text-lg font-semibold">Administrative Access</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 animate-fade-in">IT Department Login</h2>
          <div className="h-1 w-40 bg-white/40 mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Comprehensive administrative dashboard for reviewing applications, managing projects, and publishing updates
          </p>
        </div>

        {/* Access Level Section */}
        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Access Level Permissions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-all">
              <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Role-Based Access</h4>
                <p className="text-white/80 text-sm">Access to administrative dashboard with department-specific permissions</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-all">
              <div className="p-2 bg-secondary/20 rounded-lg shrink-0">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Review & Approval</h4>
                <p className="text-white/80 text-sm">Can review, approve, or forward applications to other departments</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-all">
              <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Project Management</h4>
                <p className="text-white/80 text-sm">Access to project management modules and progress tracking</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-all">
              <div className="p-2 bg-secondary/20 rounded-lg shrink-0">
                <Edit className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Project Creation</h4>
                <p className="text-white/80 text-sm">Add new project details, edit existing ones, and forward to approval</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FolderCheck className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Key Responsibility Features</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <FileCheck className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Document Verification</h4>
              <p className="text-white/80">Verify applications and review all uploaded documents for compliance</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <CheckCircle2 className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Approval Management</h4>
              <p className="text-white/80">Approve or reject allotment applications with detailed remarks</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Forward className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Case Forwarding</h4>
              <p className="text-white/80">Forward cases to other departments with workflow tracking</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Project Progress</h4>
              <p className="text-white/80">Manage and update project milestones and progress reports</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Upload className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Document Upload</h4>
              <p className="text-white/80">Upload documents, site reports, and project images for public access</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <FileSpreadsheet className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Report Generation</h4>
              <p className="text-white/80">Generate comprehensive department-level reports and analytics</p>
            </div>

            {/* Feature 7 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform col-span-1 md:col-span-2 lg:col-span-1">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Megaphone className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Public Notices</h4>
              <p className="text-white/80">Publish official notices, updates, and announcements to the public portal</p>
            </div>
          </div>
        </div>

        {/* Department Stats */}
        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto mt-12">
          <h3 className="text-3xl font-bold text-center mb-8">Administrative Control</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-accent">Full</div>
              <p className="text-lg text-white/90">Application Control</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-secondary">Secure</div>
              <p className="text-lg text-white/90">Role-Based Access</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-accent">Real-time</div>
              <p className="text-lg text-white/90">Project Updates</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 10: Accounts Team Login
    <PresentationSlide key="accounts-team" gradient="hero">
      <div className="space-y-12 text-white">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Wallet className="w-6 h-6 text-accent" />
            <span className="text-lg font-semibold">Financial Management Access</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 animate-fade-in">Department Login</h2>
          <h3 className="text-4xl font-semibold mb-6 text-accent animate-fade-in" style={{ animationDelay: '0.1s' }}>Accounts Team</h3>
          <div className="h-1 w-40 bg-white/40 mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Finance and accounts personnel managing all financial operations and records of allottees
          </p>
        </div>

        {/* Access Level Section */}
        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-bold">Access Level Permissions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-all">
              <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Financial Modules Only</h4>
                <p className="text-white/80 text-sm">Restricted access to financial modules and payment management systems</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-all">
              <div className="p-2 bg-secondary/20 rounded-lg shrink-0">
                <Receipt className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Payment Management</h4>
                <p className="text-white/80 text-sm">Full control over payment receipts, refunds, and financial reports</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <PieChart className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Key Responsibility Features</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Payment Verification</h4>
              <p className="text-white/80">Verify payments and reconcile all financial transactions</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Receipt className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Invoice Generation</h4>
              <p className="text-white/80">Generate invoices, receipts, and comprehensive financial statements</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <RefreshCw className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Refund Management</h4>
              <p className="text-white/80">Manage refunds, adjustments, and payment corrections efficiently</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Performance Tracking</h4>
              <p className="text-white/80">Track project-wise financial performance and revenue analysis</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <AlertCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Due Payments</h4>
              <p className="text-white/80">Oversee due payments, penalties, and payment reminders</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <FileBarChart className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Financial Reports</h4>
              <p className="text-white/80">Generate detailed financial summaries for senior management</p>
            </div>
          </div>
        </div>

        {/* Financial Stats */}
        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto mt-12">
          <h3 className="text-3xl font-bold text-center mb-8">Financial Control & Transparency</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <DollarSign className="w-12 h-12 text-accent" />
              </div>
              <p className="text-lg text-white/90 font-semibold">Complete Payment Control</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Receipt className="w-12 h-12 text-secondary" />
              </div>
              <p className="text-lg text-white/90 font-semibold">Automated Receipt System</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-12 h-12 text-accent" />
              </div>
              <p className="text-lg text-white/90 font-semibold">Real-time Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 11: Superadmin Login
    <PresentationSlide key="superadmin" gradient="hero">
      <div className="space-y-12 text-white">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm rounded-full border border-white/30">
            <Crown className="w-6 h-6 text-accent" />
            <span className="text-lg font-semibold">Complete System Control</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 animate-fade-in">Superadmin Login</h2>
          <div className="h-1 w-40 bg-gradient-to-r from-accent via-secondary to-accent mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Master control panel with comprehensive analytics, user management, and system-wide configuration
          </p>
        </div>

        {/* Analytics Dashboard Preview */}
        <div className="bg-gradient-to-br from-accent/15 to-secondary/15 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Analytics & Business Intelligence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <Target className="w-10 h-10 text-accent mb-3" />
              <h4 className="text-2xl font-bold mb-2">Lead Tracking</h4>
              <p className="text-white/80 text-sm">Monitor work growth and lead closure rates in real-time</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <MapPin className="w-10 h-10 text-secondary mb-3" />
              <h4 className="text-2xl font-bold mb-2">Location Analytics</h4>
              <p className="text-white/80 text-sm">Track user locations and identify high-potential markets</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <Newspaper className="w-10 h-10 text-accent mb-3" />
              <h4 className="text-2xl font-bold mb-2">Marketing Insights</h4>
              <p className="text-white/80 text-sm">Data-driven targeting for newspaper and social media ads</p>
            </div>
          </div>
        </div>

        {/* Access Level Section */}
        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Crown className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Access Level Permissions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-all">
              <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Full System Access</h4>
                <p className="text-white/80 text-sm">Unrestricted access to all modules, user roles, and system settings</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-all">
              <div className="p-2 bg-secondary/20 rounded-lg shrink-0">
                <Settings className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Configuration Control</h4>
                <p className="text-white/80 text-sm">Complete authority over permissions, configurations, and content management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Key Responsibility Features</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">User Management</h4>
              <p className="text-white/80">Create, update, and delete users or departments</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Lock className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Role Management</h4>
              <p className="text-white/80">Assign and revoke user roles and privileges</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Content Management</h4>
              <p className="text-white/80">Manage banners, notices, and popups sitewide</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Settings className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Global Settings</h4>
              <p className="text-white/80">Configure rates, fees, and timelines</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Activity className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Activity Monitoring</h4>
              <p className="text-white/80">Monitor logs, audit trails, and system activity</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <CheckCircle2 className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Project Approval</h4>
              <p className="text-white/80">Approve new projects and schemes</p>
            </div>

            {/* Feature 7 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Database className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">System Backup</h4>
              <p className="text-white/80">Manage backups and data recovery</p>
            </div>

            {/* Feature 8 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Security & Performance</h4>
              <p className="text-white/80">Monitor security and system performance</p>
            </div>
          </div>
        </div>

        {/* Superadmin Stats */}
        <div className="bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto mt-12">
          <h3 className="text-3xl font-bold text-center mb-8">Master Control Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Crown className="w-12 h-12 text-accent" />
              </div>
              <p className="text-lg text-white/90 font-semibold">Full Authority</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <BarChart3 className="w-12 h-12 text-secondary" />
              </div>
              <p className="text-lg text-white/90 font-semibold">Advanced Analytics</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Activity className="w-12 h-12 text-accent" />
              </div>
              <p className="text-lg text-white/90 font-semibold">Real-time Monitoring</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-12 h-12 text-secondary" />
              </div>
              <p className="text-lg text-white/90 font-semibold">Maximum Security</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 12: Summary
    <PresentationSlide key="summary" gradient="hero">
      <div className="space-y-12 text-white">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-bold mb-6 animate-fade-in">Project Summary</h2>
          <div className="h-1 w-48 bg-accent mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-2xl text-white/90 mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Transforming Government Property Management
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-accent" />
            <div className="text-4xl font-bold mb-2">12</div>
            <div className="text-white/80">Slides</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform">
            <Home className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <div className="text-4xl font-bold mb-2">20+</div>
            <div className="text-white/80">Components</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform">
            <Search className="w-12 h-12 mx-auto mb-4 text-accent" />
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-white/80">Responsive</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform">
            <FileCheck className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <div className="text-4xl font-bold mb-2">12</div>
            <div className="text-white/80">Districts</div>
          </div>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Design Excellence */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-semibold">Design Excellence</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-lg text-white/90">Premium UI exceeding DLF.in standards</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-lg text-white/90">Beautiful responsive design for all devices</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-lg text-white/90">Modern gradient themes & animations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-lg text-white/90">Government-style professional layout</span>
              </li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Search className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-semibold">Key Features</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span className="text-lg text-white/90">Advanced property search with smart filters</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span className="text-lg text-white/90">Comprehensive property detail pages</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span className="text-lg text-white/90">Integrated application management system</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span className="text-lg text-white/90">Real-time marquee news updates</span>
              </li>
            </ul>
          </div>

          {/* Technical Stack */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/20 rounded-lg">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-semibold">Technical Stack</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-lg text-white/90">React 18 + TypeScript for type safety</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-lg text-white/90">Tailwind CSS with custom design system</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-lg text-white/90">Modern component architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-lg text-white/90">Optimized performance & animations</span>
              </li>
            </ul>
          </div>

          {/* Delivery & Impact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <FileCheck className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-semibold">Delivery & Impact</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span className="text-lg text-white/90">Fully functional production-ready code</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span className="text-lg text-white/90">Complete documentation included</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span className="text-lg text-white/90">Scalable architecture for future growth</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span className="text-lg text-white/90">Enhanced citizen digital experience</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 max-w-4xl mx-auto">
          <h3 className="text-5xl font-bold mb-6">Ready for Deployment</h3>
          <p className="text-2xl text-white/90 mb-8">
            A complete, scalable solution for HIMUDA's digital transformation
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-lg border border-accent/40">
              <UserCheck className="w-6 h-6 text-accent" />
              <span className="text-lg">User-Centric Design</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-secondary/20 rounded-lg border border-secondary/40">
              <Download className="w-6 h-6 text-secondary" />
              <span className="text-lg">Government Standards</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-lg border border-accent/40">
              <Building2 className="w-6 h-6 text-accent" />
              <span className="text-lg">Future-Ready Platform</span>
            </div>
          </div>
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-card/95 backdrop-blur-md px-8 py-4 rounded-2xl border border-border/50 animate-fade-in" style={{ boxShadow: 'var(--shadow-elegant)' }}>
        <button
          onClick={prevSlide}
          className="p-3 hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
        </button>
        
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-10 bg-gradient-to-r from-primary via-secondary to-accent shadow-lg' 
                  : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
        </button>

        <div className="ml-4 pl-4 border-l border-border text-sm font-bold text-primary tracking-wide">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Slides */}
      <div className="relative">
        {slides[currentSlide]}
      </div>
    </div>
  );
};

export default Index;
