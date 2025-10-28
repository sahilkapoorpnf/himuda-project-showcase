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
import { AllotteeManagementTable } from "@/components/AllotteeManagementTable";
import { AllotteePropertiesTable } from "@/components/AllotteePropertiesTable";
import { PaymentGateway } from "@/components/PaymentGateway";
import { PaymentSuccess } from "@/components/PaymentSuccess";
import { AllotmentStatusCheck } from "@/components/AllotmentStatusCheck";
import { EMIPaymentManagement } from "@/components/EMIPaymentManagement";
import { ChangeOwnershipForm } from "@/components/ChangeOwnershipForm";
import { ChangeOwnershipDeathCaseForm } from "@/components/ChangeOwnershipDeathCaseForm";
import { ChangeOwnershipDeathCaseAllLegalHeirsForm } from "@/components/ChangeOwnershipDeathCaseAllLegalHeirsForm";
import { ChangeOwnershipDeathCaseRegisteredWillForm } from "@/components/ChangeOwnershipDeathCaseRegisteredWillForm";
import { ConveyanceDeedForm } from "@/components/ConveyanceDeedForm";
import { NoDueCertificateForm } from "@/components/NoDueCertificateForm";
import { ReallotmentLetterForm } from "@/components/ReallotmentLetterForm";
import { PermissionSaleGiftTransferForm } from "@/components/PermissionSaleGiftTransferForm";
import { PermissionToMortgageForm } from "@/components/PermissionToMortgageForm";
import { ChevronLeft, ChevronRight, Home, Search, FileText, UserCheck, Download, Building2, Filter, MapPin, Calendar, FileCheck, User, CreditCard, Bell, Edit, MessageSquare, Shield, CheckCircle2, Forward, Upload, FileSpreadsheet, Megaphone, FolderCheck, Settings, DollarSign, Receipt, TrendingUp, FileBarChart, RefreshCw, AlertCircle, PieChart, Wallet, Crown, Users, Lock, Globe, Activity, Database, BarChart3, Target, Newspaper, Mail, Smartphone, BellRing, Clock, Send, AlertTriangle, Phone, Zap } from 'lucide-react';

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
import jawalamukhiPlots from '@/assets/jawalamukhi-plots.png';
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
            image={jawalamukhiPlots}
            title="Dehra, Jawalamukhi Housing Plots"
            location="Kangra, Himachal Pradesh"
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
              image={jawalamukhiPlots}
              title="Dehra, Jawalamukhi Housing Plots"
              location="Kangra, Himachal Pradesh"
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
                src={jawalamukhiPlots} 
                alt="Property Interior" 
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={kasauliPlot} 
                  alt="Property Detail 1" 
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src={baddiPlot} 
                  alt="Property Detail 2" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Dehra, Jawalamukhi Housing Plots</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Dehra, Jawalamukhi, Kangra, Himachal Pradesh
                </p>
              </div>

              <div className="text-4xl font-bold text-primary">₹45,00,000 Onwards</div>

              <div className="py-4 border-y border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">31,076.00 sqmt</div>
                  <div className="text-sm text-muted-foreground">Total Area of Land</div>
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

    // Slide 7: Registration/Signup - Updated Structure
    <div key="registration" className="min-h-screen bg-background overflow-y-auto">
      <Header />
      
      <div className="pt-44 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-2">Citizen Registration</h2>
              <p className="text-muted-foreground">Register to access HIMUDA allotment services</p>
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
                  <User className="w-4 h-4 text-primary" />
                  Father/Husband Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter father's or husband's name"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Gender *
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-primary" />
                  Mobile Number (OTP verified) *
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <button
                    type="button"
                    className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-all"
                  >
                    Send OTP
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-center tracking-widest"
                  maxLength={6}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email *
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
                  <MapPin className="w-4 h-4 text-primary" />
                  Address *
                </label>
                <textarea
                  placeholder="Enter complete address"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">District *</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required>
                    <option value="">Select District</option>
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
                  <label className="text-sm font-semibold text-foreground">State *</label>
                  <input
                    type="text"
                    value="Himachal Pradesh"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-muted text-foreground"
                    readOnly
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Pincode *</label>
                  <input
                    type="text"
                    placeholder="Enter pincode"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Upload className="w-4 h-4 text-primary" />
                  Aadhaar / PAN Upload *
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-white file:font-semibold hover:file:opacity-90"
                  required
                />
                <p className="text-xs text-muted-foreground">Upload Aadhaar or PAN card (PDF, JPG, PNG - Max 5MB)</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  Password *
                </label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <p className="text-xs text-muted-foreground">Minimum 8 characters with uppercase, lowercase, number and special character</p>
              </div>

              <div className="border border-accent/30 rounded-lg p-4 bg-accent/5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" required />
                  <span className="text-sm text-foreground">
                    <span className="font-semibold">eKYC Consent: </span>
                    I hereby consent to share my personal information for eKYC verification as per HIMUDA policies.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <UserCheck className="w-5 h-5" />
                Register & Verify OTP
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

    // Slide 10: Allotment Form in Dashboard Layout
    <div key="allotment-dashboard" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="scheme-application"
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

    // Slide 11: Payment Gateway
    <div key="payment-gateway" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="emi-payment"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <PaymentGateway />
        </main>
      </div>
    </div>,

    // Slide 12: Payment Success
    <div key="payment-success" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="emi-payment"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <PaymentSuccess />
        </main>
      </div>
    </div>,

    // Slide 13: Allotment Status & Acceptance
    <div key="allotment-status" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="allotment-status"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <AllotmentStatusCheck />
        </main>
      </div>
    </div>,

    // Slide 14: EMI & Payment Management
    <div key="emi-payment-management" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="payments"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <EMIPaymentManagement />
          </div>
        </main>
      </div>
    </div>,

    // Slide 15: Change of Ownership
    <div key="change-ownership" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="change-ownership"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <ChangeOwnershipForm />
          </div>
        </main>
      </div>
    </div>,

    // Slide 16: Change of Ownership (Death Case Unregistered Will)
    <div key="change-ownership-death-case" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="change-ownership-death-case"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <ChangeOwnershipDeathCaseForm />
          </div>
        </main>
      </div>
    </div>,

    // Slide 17: Change of Ownership (Death Case All Legal Heirs)
    <div key="change-ownership-death-case-all-heirs" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="change-ownership-death-case-all-heirs"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <ChangeOwnershipDeathCaseAllLegalHeirsForm />
          </div>
        </main>
      </div>
    </div>,

    // Slide 18: Change of Ownership (Death Case Registered Will)
    <div key="change-ownership-death-case-registered-will" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="change-ownership-death-case-registered-will"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <ChangeOwnershipDeathCaseRegisteredWillForm />
          </div>
        </main>
      </div>
    </div>,

    // Slide 19: Issuance of Conveyance Deed
    <div key="conveyance-deed" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="conveyance-deed"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <ConveyanceDeedForm />
          </div>
        </main>
      </div>
    </div>,

    // Slide 20: Issue of No Due Certificate
    <div key="no-due-certificate" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="no-due-certificate"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <NoDueCertificateForm />
          </div>
        </main>
      </div>
    </div>,

    // Slide 21: Issue of Re-allotment Letter
    <div key="reallotment-letter" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="reallotment-letter"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <ReallotmentLetterForm />
          </div>
        </main>
      </div>
    </div>,

    // Slide 22: Permission for Sale/Gift/Transfer
    <div key="permission-sale-gift-transfer" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="permission-sale-gift-transfer"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <PermissionSaleGiftTransferForm />
          </div>
        </main>
      </div>
    </div>,

    // Slide 23: Permission to Mortgage
    <div key="permission-to-mortgage" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <DashboardSidebar 
          activeSection="permission-to-mortgage"
          onSectionChange={() => {}}
        />
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto">
            <PermissionToMortgageForm />
          </div>
        </main>
      </div>
    </div>,

    // Slide 24: Superadmin Dashboard
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
              User Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Users className="w-5 h-5 text-primary" />
              Allottee Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Shield className="w-5 h-5 text-primary" />
              Role Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <FileText className="w-5 h-5 text-primary" />
              Content Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Building2 className="w-5 h-5 text-primary" />
              Property Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Activity className="w-5 h-5 text-primary" />
              Activity Monitoring
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Settings className="w-5 h-5 text-primary" />
              Setting
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
                  <MapPin className="w-6 h-6" />
                  Lead Tracking - Visitor Locations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <div className="font-semibold text-primary">Delhi NCR</div>
                        <div className="text-xs text-muted-foreground">National Capital</div>
                      </div>
                    </div>
                    <span className="font-bold text-secondary text-lg">2,847</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <div className="font-semibold text-primary">Mumbai</div>
                        <div className="text-xs text-muted-foreground">Maharashtra</div>
                      </div>
                    </div>
                    <span className="font-bold text-accent text-lg">1,923</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <div className="font-semibold text-primary">Bangalore</div>
                        <div className="text-xs text-muted-foreground">Karnataka</div>
                      </div>
                    </div>
                    <span className="font-bold text-primary text-lg">1,564</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground font-bold">4</div>
                      <div>
                        <div className="font-semibold">Chandigarh</div>
                        <div className="text-xs text-muted-foreground">Punjab & Haryana</div>
                      </div>
                    </div>
                    <span className="font-bold text-lg">892</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground font-bold">5</div>
                      <div>
                        <div className="font-semibold">Kolkata</div>
                        <div className="text-xs text-muted-foreground">West Bengal</div>
                      </div>
                    </div>
                    <span className="font-bold text-lg">621</span>
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

              <div className="card-elegant p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6" />
                  Marketing Insights
                </h3>
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl p-5 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          Total Website Visitors
                        </div>
                        <div className="text-3xl font-bold text-primary">12,847</div>
                        <div className="text-xs text-secondary mt-1 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          +18.2% from last month
                        </div>
                      </div>
                      <div className="text-6xl opacity-10">📊</div>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl p-5 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Active Campaigns
                        </div>
                        <div className="text-3xl font-bold text-accent">8</div>
                        <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                          <Activity className="w-3 h-3" />
                          All campaigns performing well
                        </div>
                      </div>
                      <div className="text-6xl opacity-10">🎯</div>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl p-5 bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Engagement Rate
                        </div>
                        <div className="text-3xl font-bold text-secondary">67.8%</div>
                        <div className="text-xs text-secondary mt-1 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          High user engagement
                        </div>
                      </div>
                      <div className="text-6xl opacity-10">⚡</div>
                    </div>
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
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Users className="w-5 h-5 text-primary" />
              User Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium">
              <Users className="w-5 h-5" />
              Allottee Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Shield className="w-5 h-5 text-primary" />
              Role Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <FileText className="w-5 h-5 text-primary" />
              Content Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Building2 className="w-5 h-5 text-primary" />
              Property Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Activity className="w-5 h-5 text-primary" />
              Activity Monitoring
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Settings className="w-5 h-5 text-primary" />
              Setting
            </button>
          </nav>
        </aside>
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto space-y-8">
            <AllotteeManagementTable />
          </div>
        </main>
      </div>
    </div>,

    // Slide 14: Properties Owned by Allottee
    <div key="allottee-properties" className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <DashboardHeader />
      
      <div className="flex w-full pt-[8.5rem]">
        <aside className="w-64 bg-card border-r border-border sticky top-[8.5rem] h-[calc(100vh-8.5rem)] overflow-y-auto">
          <nav className="p-4 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Crown className="w-5 h-5 text-primary" />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Users className="w-5 h-5 text-primary" />
              User Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium">
              <Users className="w-5 h-5" />
              Allottee Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Shield className="w-5 h-5 text-primary" />
              Role Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <FileText className="w-5 h-5 text-primary" />
              Content Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Building2 className="w-5 h-5 text-primary" />
              Property Management
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Activity className="w-5 h-5 text-primary" />
              Activity Monitoring
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <Settings className="w-5 h-5 text-primary" />
              Setting
            </button>
          </nav>
        </aside>
        
        <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-8.5rem)]">
          <div className="max-w-7xl mx-auto space-y-8">
            <AllotteePropertiesTable />
          </div>
        </main>
      </div>
    </div>,

    // Slide 15: Notification Management System
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

    // Slide 16: User Flow
    <PresentationSlide key="user-flow" gradient="hero">
      <div className="space-y-12 text-white">
        <h2 className="text-5xl font-bold text-center mb-12">User Journey Flow</h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 w-full justify-center">
              <div className="bg-accent/20 rounded-xl p-6 border border-accent/30 flex-1 max-w-xs text-center">
                <User className="w-12 h-12 mx-auto mb-3 text-accent" />
                <h3 className="text-xl font-bold mb-2">User Registration</h3>
                <p className="text-white/80 text-sm">Sign up with basic details</p>
              </div>
              <Forward className="w-8 h-8 text-accent shrink-0" />
              <div className="bg-secondary/20 rounded-xl p-6 border border-secondary/30 flex-1 max-w-xs text-center">
                <Search className="w-12 h-12 mx-auto mb-3 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Browse Properties</h3>
                <p className="text-white/80 text-sm">Filter and search listings</p>
              </div>
            </div>

            <Forward className="w-8 h-8 text-accent rotate-90" />

            <div className="flex items-center gap-4 w-full justify-center">
              <div className="bg-accent/20 rounded-xl p-6 border border-accent/30 flex-1 max-w-xs text-center">
                <FileText className="w-12 h-12 mx-auto mb-3 text-accent" />
                <h3 className="text-xl font-bold mb-2">Submit Application</h3>
                <p className="text-white/80 text-sm">Fill allotment form</p>
              </div>
              <Forward className="w-8 h-8 text-accent shrink-0" />
              <div className="bg-secondary/20 rounded-xl p-6 border border-secondary/30 flex-1 max-w-xs text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Track Status</h3>
                <p className="text-white/80 text-sm">Monitor application progress</p>
              </div>
            </div>

            <Forward className="w-8 h-8 text-accent rotate-90" />

            <div className="bg-gradient-to-r from-accent/20 to-secondary/20 rounded-xl p-6 border border-accent/30 max-w-xs text-center">
              <Home className="w-12 h-12 mx-auto mb-3 text-accent" />
              <h3 className="text-xl font-bold mb-2">Allotment</h3>
              <p className="text-white/80 text-sm">Receive property allocation</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 17: Allottee / Citizen User Type
    <PresentationSlide key="citizen-user" gradient="hero">
      <div className="space-y-12 text-white">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <User className="w-6 h-6 text-accent" />
            <span className="text-lg font-semibold">Citizen Portal</span>
          </div>
          <h2 className="text-6xl font-bold mb-6">Allottee / Citizen User</h2>
          <div className="h-1 w-40 bg-white/40 mx-auto mb-6" />
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering citizens with seamless access to housing schemes
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-5 border border-white/10">
              <Search className="w-10 h-10 text-accent mb-3" />
              <h4 className="text-lg font-semibold mb-2">Browse Properties</h4>
              <p className="text-white/80 text-sm">Search and filter available housing projects</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/10">
              <FileText className="w-10 h-10 text-secondary mb-3" />
              <h4 className="text-lg font-semibold mb-2">Apply Online</h4>
              <p className="text-white/80 text-sm">Submit applications digitally with ease</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/10">
              <Activity className="w-10 h-10 text-accent mb-3" />
              <h4 className="text-lg font-semibold mb-2">Track Status</h4>
              <p className="text-white/80 text-sm">Real-time updates on application progress</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/10">
              <CreditCard className="w-10 h-10 text-secondary mb-3" />
              <h4 className="text-lg font-semibold mb-2">Payment Management</h4>
              <p className="text-white/80 text-sm">Secure online payment processing</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/10">
              <Bell className="w-10 h-10 text-accent mb-3" />
              <h4 className="text-lg font-semibold mb-2">Notifications</h4>
              <p className="text-white/80 text-sm">Get alerts for important updates</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/10">
              <Download className="w-10 h-10 text-secondary mb-3" />
              <h4 className="text-lg font-semibold mb-2">Download Documents</h4>
              <p className="text-white/80 text-sm">Access allotment letters and receipts</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 18: IT Department Login
    <PresentationSlide key="it-department" gradient="hero">
      <div className="space-y-12 text-white">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm rounded-full border border-white/30">
            <Settings className="w-6 h-6 text-accent" />
            <span className="text-lg font-semibold">IT Department</span>
          </div>
          <h2 className="text-6xl font-bold mb-6">IT Department Portal</h2>
          <div className="h-1 w-40 bg-accent mx-auto mb-6" />
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive tools for technical management and system operations
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Database className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Core Responsibilities</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Database className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">System Management</h4>
              <p className="text-white/80">Oversee platform infrastructure and updates</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Security Monitoring</h4>
              <p className="text-white/80">Implement security protocols and monitoring</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Activity className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Performance Tracking</h4>
              <p className="text-white/80">Monitor system performance metrics</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Upload className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Content Updates</h4>
              <p className="text-white/80">Manage website content and media</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">User Support</h4>
              <p className="text-white/80">Technical assistance for departments</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <FileSpreadsheet className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Data Management</h4>
              <p className="text-white/80">Database maintenance and backups</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 19: Accounts Team Login
    <PresentationSlide key="accounts-team" gradient="hero">
      <div className="space-y-12 text-white">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm rounded-full border border-white/30">
            <Wallet className="w-6 h-6 text-secondary" />
            <span className="text-lg font-semibold">Accounts Department</span>
          </div>
          <h2 className="text-6xl font-bold mb-6">Accounts Team Portal</h2>
          <div className="h-1 w-40 bg-secondary mx-auto mb-6" />
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Financial management and payment processing hub
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-bold">Financial Operations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <CreditCard className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Payment Processing</h4>
              <p className="text-white/80">Handle all financial transactions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Receipt className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Generate Receipts</h4>
              <p className="text-white/80">Issue payment receipts and invoices</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Financial Reports</h4>
              <p className="text-white/80">Generate comprehensive financial analytics</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <FileBarChart className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Budget Tracking</h4>
              <p className="text-white/80">Monitor project budgets and expenses</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <RefreshCw className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Reconciliation</h4>
              <p className="text-white/80">Account reconciliation and auditing</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <AlertCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Payment Alerts</h4>
              <p className="text-white/80">Track overdue and pending payments</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto mt-12">
          <h3 className="text-3xl font-bold text-center mb-8">Financial Dashboard Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <PieChart className="w-12 h-12 text-secondary" />
              </div>
              <p className="text-lg text-white/90 font-semibold">Revenue Analytics</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-12 h-12 text-accent" />
              </div>
              <p className="text-lg text-white/90 font-semibold">Growth Tracking</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <FileBarChart className="w-12 h-12 text-secondary" />
              </div>
              <p className="text-lg text-white/90 font-semibold">Expense Reports</p>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 20: Superadmin Login
    <PresentationSlide key="superadmin" gradient="hero">
      <div className="space-y-12 text-white">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm rounded-full border border-white/30">
            <Crown className="w-6 h-6 text-accent" />
            <span className="text-lg font-semibold">Master Control</span>
          </div>
          <h2 className="text-7xl font-bold mb-6 animate-fade-in">Superadmin Portal</h2>
          <div className="h-1 w-48 bg-gradient-to-r from-accent via-secondary to-accent mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-2xl text-white/95 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Complete system authority with advanced controls and analytics
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Key Responsibility Features</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">User Management</h4>
              <p className="text-white/80">Create, update, and delete users or departments</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Lock className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Role Management</h4>
              <p className="text-white/80">Assign and revoke user roles and privileges</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Content Management</h4>
              <p className="text-white/80">Manage banners, notices, and popups sitewide</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Settings className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Global Settings</h4>
              <p className="text-white/80">Configure rates, fees, and timelines</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Activity className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Activity Monitoring</h4>
              <p className="text-white/80">Monitor logs, audit trails, and system activity</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <CheckCircle2 className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Project Approval</h4>
              <p className="text-white/80">Approve new projects and schemes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <Database className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">System Backup</h4>
              <p className="text-white/80">Manage backups and data recovery</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform">
              <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Security & Performance</h4>
              <p className="text-white/80">Monitor security and system performance</p>
            </div>
          </div>
        </div>

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

    // Slide 21: Bitdecentro Success Strategy
    <PresentationSlide key="success-strategy" gradient="hero">
      <div className="space-y-10 text-white">
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
          <div className="h-1 w-48 bg-gradient-to-r from-accent via-secondary to-accent mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-2xl text-white/95 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Our strategic approach to delivering excellence for HIMUDA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Target className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Agile Development</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Iterative development cycles with regular demos and feedback loops to ensure the platform meets HIMUDA's evolving needs
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Users className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">User-Centric Design</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Focus on intuitive interfaces and seamless user experiences for citizens, staff, and administrators alike
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Shield className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Security First</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Enterprise-grade security measures, data encryption, and compliance with government standards
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <TrendingUp className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Scalable Architecture</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Built to handle growth - from thousands to millions of users without compromising performance
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Activity className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Continuous Support</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              24/7 technical support, regular updates, and proactive monitoring to ensure smooth operations
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Zap className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Rapid Deployment</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Phased rollout strategy with training programs to ensure smooth adoption across all departments
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-10 border border-white/20 max-w-5xl mx-auto mt-12">
          <h3 className="text-3xl font-bold text-center mb-8">Our Commitment</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-lg border border-accent/40">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold">Quality Assurance</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-secondary/20 rounded-lg border border-secondary/40">
              <Clock className="w-6 h-6 text-secondary" />
              <span className="text-lg font-semibold">Timely Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-lg border border-accent/40">
              <Target className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold">Goal Alignment</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-lg border border-accent/40">
              <Activity className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold">Long-Term Support</span>
            </div>
          </div>
        </div>
      </div>
    </PresentationSlide>,

    // Slide 22: Thank You
    <PresentationSlide key="thank-you" gradient="hero">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-white space-y-10 max-w-4xl mx-auto px-8">
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
