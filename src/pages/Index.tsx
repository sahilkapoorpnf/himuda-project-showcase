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
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AllotmentForm } from "@/components/AllotmentForm";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { ApplicationsTable } from "@/components/ApplicationsTable";
import { ChevronLeft, ChevronRight, Home, Search, FileText, UserCheck, Download, Building2, Filter, MapPin, Calendar, FileCheck, User, CreditCard, Bell, Edit, MessageSquare, Shield, CheckCircle2, Forward, Upload, FileSpreadsheet, Megaphone, FolderCheck, Settings, DollarSign, Receipt, TrendingUp, FileBarChart, RefreshCw, AlertCircle, PieChart, Wallet, Crown, Users, Lock, Globe, Activity, Database, BarChart3, Target, Newspaper, Mail, Smartphone, BellRing, Clock, Send, AlertTriangle, Phone } from 'lucide-react';

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
        <TestimonialsSection />
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
          <button className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Institutional
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Garages
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Industrials
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
                    <strong>Type A:</strong> In this type plot size comes with 308-482 Sqmt
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <strong>Type B:</strong> In this type plot size comes with 216 Sqmt
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <strong>Type C:</strong> In this type plot size comes with 150 Sqmt
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <strong>Type D:</strong> In this type plot size comes with 120-141 Sqmt
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <strong>Type E(L.I.G.):</strong> In this type plot size comes with 91-116 Sqmt
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <strong>Type F(E.W.S.):</strong> In this type plot size comes with 63-74 Sqmt
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/documents/property-layout.pdf';
                    link.download = 'HIMUDA_Property_Layout.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
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

    // Slide 7: Registration/Signup
    <div key="registration" className="min-h-screen bg-background overflow-y-auto">
      <Header />
      
      <div className="pt-44 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-2">Create Your Account</h2>
              <p className="text-muted-foreground">Register to access HIMUDA services</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email ID *
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-primary" />
                  Mobile Number (for OTP) *
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Username *
                  </label>
                  <input
                    type="text"
                    placeholder="Choose username"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    Password *
                  </label>
                  <input
                    type="password"
                    placeholder="Create password"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Shield className="w-4 h-4 text-secondary" />
                  Aadhaar / ID Verification (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Enter Aadhaar or ID number"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <p className="text-xs text-muted-foreground">For faster verification (optional)</p>
              </div>

              <div className="border-t border-border pt-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Send className="w-4 h-4 text-accent" />
                    Verify via OTP
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex-1 px-4 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
                    >
                      Send OTP to Mobile
                    </button>
                    <button
                      type="button"
                      className="flex-1 px-4 py-3 rounded-lg border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all"
                    >
                      Send OTP to Email
                    </button>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <label className="text-sm font-semibold text-foreground">Enter OTP</label>
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-center text-2xl tracking-widest"
                    maxLength={6}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <UserCheck className="w-5 h-5" />
                Complete Registration
              </button>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <button type="button" className="text-primary font-semibold hover:underline">
                  Login here
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>,

    // Slide 8: Login
    <div key="login" className="min-h-screen bg-background overflow-y-auto">
      <Header />
      
      <div className="pt-44 pb-16">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-2">Welcome Back</h2>
              <p className="text-muted-foreground">Login to access your dashboard</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email or Mobile Number *
                </label>
                <input
                  type="text"
                  placeholder="Enter email or mobile number"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  Password *
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <div className="text-right">
                  <button type="button" className="text-sm text-secondary hover:underline">
                    Forgot Password?
                  </button>
                </div>
              </div>

              <div className="border border-accent/30 rounded-lg p-4 bg-accent/5">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Enhanced Security</h4>
                    <p className="text-sm text-muted-foreground">We'll send an OTP for verification</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full px-4 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send OTP
                </button>

                <div className="space-y-2 mt-4">
                  <label className="text-sm font-semibold text-foreground">Enter OTP</label>
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-center text-2xl tracking-widest"
                    maxLength={6}
                  />
                  <p className="text-xs text-muted-foreground text-center">
                    OTP sent to your registered mobile/email
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <UserCheck className="w-5 h-5" />
                Login to Dashboard
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-card text-muted-foreground">New to HIMUDA?</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full px-6 py-3 rounded-lg border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all"
              >
                Create New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>,

    // Slide 9: User Dashboard Features
    <div key="dashboard-features" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="dashboard"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-primary mb-4">User Dashboard Features</h2>
              <p className="text-xl text-muted-foreground">Complete Control at Your Fingertips</p>
              <div className="h-1 w-40 bg-primary mx-auto mt-6" />
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-elegant p-6 gradient-hero text-white">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8" />
                  <TrendingUp className="w-5 h-5 opacity-70" />
                </div>
                <div className="text-3xl font-bold mb-1">24</div>
                <div className="text-white/80 text-sm">Total Applications</div>
                <div className="mt-3 text-xs text-white/60">+12% from last month</div>
              </div>

              <div className="card-elegant p-6 gradient-accent text-white">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-8 h-8" />
                  <RefreshCw className="w-5 h-5 opacity-70" />
                </div>
                <div className="text-3xl font-bold mb-1">8</div>
                <div className="text-white/80 text-sm">Pending Review</div>
                <div className="mt-3 text-xs text-white/60">Avg. processing: 5 days</div>
              </div>

              <div className="card-elegant p-6 gradient-gold text-white">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                  <Target className="w-5 h-5 opacity-70" />
                </div>
                <div className="text-3xl font-bold mb-1">14</div>
                <div className="text-white/80 text-sm">Approved</div>
                <div className="mt-3 text-xs text-white/60">Success rate: 85%</div>
              </div>

              <div className="card-elegant p-6 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="flex items-center justify-between mb-4">
                  <Building2 className="w-8 h-8" />
                  <Activity className="w-5 h-5 opacity-70" />
                </div>
                <div className="text-3xl font-bold mb-1">156</div>
                <div className="text-white/80 text-sm">Properties Available</div>
                <div className="mt-3 text-xs text-white/60">12 new this week</div>
              </div>
            </div>

            {/* Latest News Section */}
            <div className="card-elegant p-0 overflow-hidden">
              <LatestNews />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Applications Management */}
              <div className="group card-elegant p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Applications</h3>
                <p className="text-muted-foreground mb-4">Track and manage all your property applications in one place</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    View application status
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Download application forms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Export to Excel
                  </li>
                </ul>
              </div>

              {/* Property Management */}
              <div className="group card-elegant p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-secondary/20">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Properties</h3>
                <p className="text-muted-foreground mb-4">Browse and shortlist available properties effortlessly</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Save favorites
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Compare properties
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Virtual tours
                  </li>
                </ul>
              </div>

              {/* Payment Tracking */}
              <div className="group card-elegant p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-accent/20">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Payments</h3>
                <p className="text-muted-foreground mb-4">Secure online payments with complete transaction history</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Online payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Payment history
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Download receipts
                  </li>
                </ul>
              </div>

              {/* Document Management */}
              <div className="group card-elegant p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Documents</h3>
                <p className="text-muted-foreground mb-4">Upload, store, and access all your documents securely</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Secure cloud storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Easy uploads
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Document verification
                  </li>
                </ul>
              </div>

              {/* Notifications */}
              <div className="group card-elegant p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-secondary/20">
                <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Notifications</h3>
                <p className="text-muted-foreground mb-4">Stay updated with real-time alerts and reminders</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Application updates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Payment reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Important announcements
                  </li>
                </ul>
              </div>

              {/* Profile Settings */}
              <div className="group card-elegant p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-accent/20">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Profile</h3>
                <p className="text-muted-foreground mb-4">Manage your personal information and preferences</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Update profile details
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Security settings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Communication preferences
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>,

    // Slide 8: Allotment Form in Dashboard Layout
    <div key="allotment-dashboard" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="apply"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                Apply for Allotment
              </h1>
              <p className="text-muted-foreground text-lg">Fill out the form below to apply for property allotment</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-8">
              <AllotmentForm />
            </div>
          </div>
        </main>
      </div>
    </div>,

    // Slide 8: Applications Management Dashboard
    <div key="applications-dashboard" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="applications"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <ApplicationsTable />
          </div>
        </main>
      </div>
    </div>,

    // Slide 9: User Flow
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

    // Slide 9: Allottee / Citizen User Type
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

    // Slide 10: IT Department Login
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

    // Slide 12: Superadmin Dashboard
    <div key="superadmin-dashboard" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <aside className="w-64 bg-card border-r border-border sticky top-[8.5rem] h-[calc(100vh-8.5rem)] overflow-y-auto">
          <nav className="p-4 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium">
              <Crown className="w-5 h-5" />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Users className="w-5 h-5 text-primary" />
              Allottee Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Target className="w-5 h-5 text-primary" />
              Lead Tracking
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <MapPin className="w-5 h-5 text-primary" />
              Location Analytics
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <BarChart3 className="w-5 h-5 text-primary" />
              Marketing Insights
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <DollarSign className="w-5 h-5 text-primary" />
              Payment Analytics
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Settings className="w-5 h-5 text-primary" />
              System Settings
            </button>
          </nav>
        </aside>
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold text-primary mb-4">Superadmin Dashboard</h2>
              <p className="text-xl text-muted-foreground">Master Control & Analytics Hub</p>
              <div className="h-1 w-40 bg-primary mx-auto mt-6" />
            </div>

            {/* Quick View Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-elegant p-6 gradient-hero text-white">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-8 h-8" />
                  <TrendingUp className="w-5 h-5 opacity-70" />
                </div>
                <div className="text-3xl font-bold mb-1">142</div>
                <div className="text-white/80 text-sm">Pending Applications</div>
                <div className="mt-3 text-xs text-white/60">Awaiting review</div>
              </div>

              <div className="card-elegant p-6 gradient-accent text-white">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                  <Activity className="w-5 h-5 opacity-70" />
                </div>
                <div className="text-3xl font-bold mb-1">1,847</div>
                <div className="text-white/80 text-sm">Total Allotments</div>
                <div className="mt-3 text-xs text-white/60">All time</div>
              </div>

              <div className="card-elegant p-6 gradient-gold text-white">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8" />
                  <Target className="w-5 h-5 opacity-70" />
                </div>
                <div className="text-3xl font-bold mb-1">3,256</div>
                <div className="text-white/80 text-sm">Total Allottees</div>
                <div className="mt-3 text-xs text-white/60">Active users</div>
              </div>
            </div>

            {/* Analytics Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card-elegant p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  Lead Tracking
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Hot Leads</span>
                      <span className="font-bold text-secondary">326</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full gradient-hero rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Warm Leads</span>
                      <span className="font-bold text-accent">184</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full gradient-accent rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Cold Leads</span>
                      <span className="font-bold text-primary">92</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full gradient-gold rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elegant p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  Location Analytics
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Shimla</span>
                    <span className="font-bold text-primary">842 Properties</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Dharamshala</span>
                    <span className="font-bold text-secondary">623 Properties</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Solan</span>
                    <span className="font-bold text-accent">487 Properties</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">Kullu</span>
                    <span className="font-bold text-primary">312 Properties</span>
                  </div>
                </div>
              </div>

              <div className="card-elegant p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6" />
                  Marketing Insights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Website Visitors</div>
                      <div className="text-2xl font-bold text-primary">12,847</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Conversion Rate</div>
                      <div className="text-2xl font-bold text-accent">23.4%</div>
                    </div>
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Active Campaigns</div>
                      <div className="text-2xl font-bold text-secondary">8</div>
                    </div>
                    <Activity className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              <div className="card-elegant p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <DollarSign className="w-6 h-6" />
                  Payment Due Analytics
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Overdue Payments</span>
                      <span className="font-bold text-red-500">₹48.2L</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Due This Month</span>
                      <span className="font-bold text-orange-500">₹127.5L</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Paid On Time</span>
                      <span className="font-bold text-green-500">₹892.3L</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>,

    // Slide 13: Allottee Management
    <div key="allottee-management" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <aside className="w-64 bg-card border-r border-border sticky top-[8.5rem] h-[calc(100vh-8.5rem)] overflow-y-auto">
          <nav className="p-4 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Crown className="w-5 h-5 text-primary" />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium">
              <Users className="w-5 h-5" />
              Allottee Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Target className="w-5 h-5 text-primary" />
              Lead Tracking
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <MapPin className="w-5 h-5 text-primary" />
              Location Analytics
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <BarChart3 className="w-5 h-5 text-primary" />
              Marketing Insights
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <DollarSign className="w-5 h-5 text-primary" />
              Payment Analytics
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Settings className="w-5 h-5 text-primary" />
              System Settings
            </button>
          </nav>
        </aside>
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-2">Allottee Management</h2>
                <p className="text-muted-foreground">Manage and track all allottees</p>
              </div>
              <button className="btn-primary flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export to Excel
              </button>
            </div>

            {/* Search Bar */}
            <div className="card-elegant p-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by Allottee ID, Name, or Unit..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background"
                  />
                </div>
                <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90">
                  Search
                </button>
              </div>
            </div>

            {/* Data Table */}
            <div className="card-elegant overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">S.No.</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Allottee ID</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Unit</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Possession Taken</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Allotment Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">
                        <button className="text-primary font-semibold hover:underline">HIMUDA091983</button>
                      </td>
                      <td className="px-6 py-4">Type-A Plot No. 8</td>
                      <td className="px-6 py-4">24/06/2025 12:00:00 AM</td>
                      <td className="px-6 py-4">29/06/2022 / 16-05-2025</td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">
                        <button className="text-primary font-semibold hover:underline">HIMUDA091984</button>
                      </td>
                      <td className="px-6 py-4">Type-B Plot No. 15</td>
                      <td className="px-6 py-4">18/05/2025 10:30:00 AM</td>
                      <td className="px-6 py-4">12/03/2022 / 20-04-2025</td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">
                        <button className="text-primary font-semibold hover:underline">HIMUDA091985</button>
                      </td>
                      <td className="px-6 py-4">Type-C Plot No. 22</td>
                      <td className="px-6 py-4">03/07/2025 02:15:00 PM</td>
                      <td className="px-6 py-4">08/01/2023 / 10-06-2025</td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">4</td>
                      <td className="px-6 py-4">
                        <button className="text-primary font-semibold hover:underline">HIMUDA091986</button>
                      </td>
                      <td className="px-6 py-4">Type-D Plot No. 5</td>
                      <td className="px-6 py-4">15/04/2025 09:00:00 AM</td>
                      <td className="px-6 py-4">22/11/2022 / 01-04-2025</td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">5</td>
                      <td className="px-6 py-4">
                        <button className="text-primary font-semibold hover:underline">HIMUDA091987</button>
                      </td>
                      <td className="px-6 py-4">Type-E(L.I.G.) Plot No. 31</td>
                      <td className="px-6 py-4">28/08/2025 03:45:00 PM</td>
                      <td className="px-6 py-4">15/04/2023 / 25-07-2025</td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">6</td>
                      <td className="px-6 py-4">
                        <button className="text-primary font-semibold hover:underline">HIMUDA091988</button>
                      </td>
                      <td className="px-6 py-4">Type-F(E.W.S.) Plot No. 12</td>
                      <td className="px-6 py-4">10/09/2025 11:20:00 AM</td>
                      <td className="px-6 py-4">05/06/2023 / 30-08-2025</td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:opacity-90">
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  Showing 1 to 6 of 3,256 entries
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">
                    1
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
                    ...
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>,

    // Slide 14: Notification Management System
    <PresentationSlide key="notifications" gradient="hero">
      <div className="space-y-10 text-white">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <BellRing className="w-6 h-6 text-accent" />
            <span className="text-lg font-semibold">Multi-Channel Communication System</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 animate-fade-in">Notification Management</h2>
          <div className="h-1 w-40 bg-white/40 mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Comprehensive notification system with email, SMS, and portal alerts across all user types
          </p>
        </div>

        {/* Communication Channels */}
        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Communication Channels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-5 border border-white/10 hover:scale-105 transition-transform">
              <Mail className="w-10 h-10 text-accent mb-3 mx-auto" />
              <h4 className="text-lg font-semibold text-center mb-2">Email Notifications</h4>
              <p className="text-white/80 text-sm text-center">Detailed communications with attachments and links</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/10 hover:scale-105 transition-transform">
              <Smartphone className="w-10 h-10 text-secondary mb-3 mx-auto" />
              <h4 className="text-lg font-semibold text-center mb-2">SMS Alerts</h4>
              <p className="text-white/80 text-sm text-center">Instant text messages for urgent updates</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/10 hover:scale-105 transition-transform">
              <Bell className="w-10 h-10 text-accent mb-3 mx-auto" />
              <h4 className="text-lg font-semibold text-center mb-2">Portal Notifications</h4>
              <p className="text-white/80 text-sm text-center">Real-time in-app notifications and alerts</p>
            </div>
          </div>
        </div>

        {/* Notification Flow by User Type */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Send className="w-8 h-8 text-accent" />
            Notification Flow by User Type
          </h3>
          
          <div className="space-y-6">
            {/* Allottee/Citizen - Receives */}
            <div className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/30 rounded-lg shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3">Allottee / Citizen</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <Bell className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-lg">Receives Notifications:</span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/90">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Payment reminders and due alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Application status updates
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Document submission requests
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Approval/rejection notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Property allotment confirmations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Portal announcements and updates
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IT Department - Receives & Sends */}
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/30 rounded-lg shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3">IT Department</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Bell className="w-5 h-5 text-secondary" />
                        <span className="font-semibold text-lg">Receives:</span>
                      </div>
                      <ul className="space-y-2 text-white/90">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          New application alerts
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Pending approval reminders
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Document verification alerts
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Send className="w-5 h-5 text-secondary" />
                        <span className="font-semibold text-lg">Generates & Sends:</span>
                      </div>
                      <ul className="space-y-2 text-white/90">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Application status updates to citizens
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Document requirement notifications
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Approval/rejection communications
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accounts Team - Receives & Sends */}
            <div className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/30 rounded-lg shrink-0">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3">Accounts Team</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Bell className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-lg">Receives:</span>
                      </div>
                      <ul className="space-y-2 text-white/90">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          New payment transaction alerts
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          Refund request notifications
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          Payment reconciliation reminders
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Send className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-lg">Generates & Sends:</span>
                      </div>
                      <ul className="space-y-2 text-white/90">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          Payment due reminders to citizens
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          Receipt and invoice notifications
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          Penalty and late fee alerts
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Superadmin - Master Control */}
            <div className="bg-gradient-to-r from-secondary/20 to-accent/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-lg shrink-0">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3">Superadmin - Master Control</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Activity className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-lg">Monitors:</span>
                      </div>
                      <ul className="space-y-2 text-white/90">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          All notification activities system-wide
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          Timeliness of team responses
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          Delayed or missed notifications
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          Department performance metrics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-5 h-5 text-secondary" />
                        <span className="font-semibold text-lg">Can Raise Concerns:</span>
                      </div>
                      <ul className="space-y-2 text-white/90">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Alert teams about delays
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Call meetings for performance issues
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Send escalation notices
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Generate system-wide announcements
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Stats */}
        <div className="bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Smart Notification System</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-3 text-accent" />
              <p className="text-lg text-white/90 font-semibold">Real-time Delivery</p>
            </div>
            <div className="text-center">
              <Send className="w-12 h-12 mx-auto mb-3 text-secondary" />
              <p className="text-lg text-white/90 font-semibold">Multi-Channel</p>
            </div>
            <div className="text-center">
              <Activity className="w-12 h-12 mx-auto mb-3 text-accent" />
              <p className="text-lg text-white/90 font-semibold">Performance Tracking</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-3 text-secondary" />
              <p className="text-lg text-white/90 font-semibold">Automated Reminders</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 13: Bitdecentro Success Strategy
    <PresentationSlide key="success-strategy" gradient="hero">
      <div className="space-y-10 text-white">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm rounded-full border border-white/30">
            <img 
              src={bitdecentroLogo} 
              alt="Bitdecentro" 
              className="h-6 object-contain brightness-0 invert"
            />
            <span className="text-lg font-semibold">Success Roadmap</span>
          </div>
          <h2 className="text-7xl font-bold mb-6 animate-fade-in">How Bitdecentro Will Achieve Success</h2>
          <div className="h-1 w-48 bg-gradient-to-r from-accent via-secondary to-accent mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-2xl text-white/90 mt-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Strategic approach to deliver HIMUDA's complete digital transformation
          </p>
        </div>

        {/* Implementation Strategy */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Implementation Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phase 1 */}
            <div className="bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-accent/30 rounded-full text-sm font-bold">Phase 1</div>
              </div>
              <h4 className="text-2xl font-bold mb-4">Foundation & Design</h4>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Requirements analysis & user research</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Premium UI/UX design system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Database architecture & API design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Security framework setup</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-secondary/30 rounded-full text-sm font-bold">Phase 2</div>
              </div>
              <h4 className="text-2xl font-bold mb-4">Core Development</h4>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span>User authentication & role management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span>Property listing & search modules</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span>Application management system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span>Payment gateway integration</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-accent/30 rounded-full text-sm font-bold">Phase 3</div>
              </div>
              <h4 className="text-2xl font-bold mb-4">Testing & Launch</h4>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Comprehensive testing & QA</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>User training & documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>Production deployment & go-live</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Factors */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Bitdecentro Success Factors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Technical Excellence */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-2xl font-semibold">Technical Excellence</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-white/90">Modern tech stack: React, TypeScript, Tailwind</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-white/90">Scalable cloud infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-white/90">Advanced security & data protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-white/90">Mobile-first responsive design</span>
                </li>
              </ul>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-2xl font-semibold">Quality Assurance</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-white/90">Rigorous testing at every phase</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-white/90">Code reviews & best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-white/90">Performance monitoring & optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-white/90">Security audits & compliance</span>
                </li>
              </ul>
            </div>

            {/* User Experience */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-2xl font-semibold">User-Centric Design</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-white/90">Intuitive interfaces for all user types</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-white/90">Comprehensive training & onboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-white/90">24/7 technical support post-launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-white/90">Continuous feedback implementation</span>
                </li>
              </ul>
            </div>

            {/* Post-Launch Support */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Activity className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-2xl font-semibold">Post-Launch Support</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-white/90">Regular updates & enhancements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-white/90">Dedicated support team</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-white/90">System monitoring & maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Measurable Outcomes */}
        <div className="bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Expected Measurable Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-accent">80%</div>
              <p className="text-lg text-white/90">Reduction in Processing Time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-secondary">90%</div>
              <p className="text-lg text-white/90">Digital Adoption Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-accent">100%</div>
              <p className="text-lg text-white/90">Transparency in Operations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 text-secondary">24/7</div>
              <p className="text-lg text-white/90">Citizen Service Availability</p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-12 text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src={bitdecentroLogo} 
              alt="Bitdecentro" 
              className="h-12 object-contain brightness-0 invert"
            />
            <div className="h-12 w-px bg-white/30" />
            <img 
              src={himudaLogo} 
              alt="HIMUDA" 
              className="h-12 object-contain brightness-0 invert"
            />
          </div>
          <h3 className="text-5xl font-bold mb-6">Partnership for Digital Excellence</h3>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Bitdecentro is committed to delivering a world-class digital platform that will transform HIMUDA's operations and citizen services
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-lg border border-accent/40">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold">On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-secondary/20 rounded-lg border border-secondary/40">
              <Shield className="w-6 h-6 text-secondary" />
              <span className="text-lg font-semibold">Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-lg border border-accent/40">
              <Activity className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold">Long-Term Support</span>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 14: Thank You
    <PresentationSlide key="thank-you" gradient="hero">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-white space-y-10 max-w-4xl mx-auto px-8">
          {/* Logos */}
          <div className="flex items-center justify-center gap-8 mb-12 animate-fade-in">
            <img 
              src={himudaLogo} 
              alt="HIMUDA Logo" 
              className="h-24 object-contain brightness-0 invert drop-shadow-2xl"
            />
            <div className="h-24 w-px bg-white/30" />
            <img 
              src={bitdecentroLogo} 
              alt="Bitdecentro Logo" 
              className="h-16 object-contain brightness-0 invert drop-shadow-2xl"
            />
          </div>

          {/* Thank You Message */}
          <h2 className="text-7xl font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Thank You
          </h2>
          
          <div className="h-1 w-32 bg-accent mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }} />

          <p className="text-3xl text-white/95 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            We are honored that <span className="font-bold text-accent">HIMUDA</span> has trusted{' '}
            <span className="font-bold text-secondary">Bitdecentro</span> as your technology partner
          </p>

          <p className="text-2xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Thank you for giving us this incredible opportunity to contribute to{' '}
            <span className="font-semibold">Himachal Pradesh's digital transformation</span>
          </p>

          {/* Commitment Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-xl text-white/95 italic">
              "We are committed to delivering excellence and building a platform that will serve{' '}
              the citizens of Himachal Pradesh with distinction"
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-lg font-semibold text-accent">Sahil Kapoor</p>
              <p className="text-sm text-white/70 mt-1">CEO, Bitdecentro</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-white/80 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 shrink-0" />
              <span className="text-sm">sahil@bitdecentro.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 shrink-0" />
              <span className="text-sm">+91 78370 06262</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe className="w-5 h-5 shrink-0" />
              <span className="text-sm">www.bitdecentro.com</span>
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
      {/* Slides */}
      <div className="relative">
        {slides[currentSlide]}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 bg-card/95 backdrop-blur-md px-8 py-4 rounded-2xl border border-border/50 animate-fade-in mx-auto w-fit mb-8" style={{ boxShadow: 'var(--shadow-elegant)' }}>
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
    </div>
  );
};

export default Index;
