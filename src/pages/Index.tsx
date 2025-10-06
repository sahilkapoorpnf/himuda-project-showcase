import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { PropertyPopup } from "@/components/PropertyPopup";
import { ImportantLinks } from "@/components/ImportantLinks";
import { LatestNews } from "@/components/LatestNews";
import { OnlineServices } from "@/components/OnlineServices";
import { TendersSection } from "@/components/TendersSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CitizenSection } from "@/components/CitizenSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Add padding to account for fixed header */}
      <div className="pt-32">
        <HeroBanner />
        <PropertyPopup />

        {/* Three Column Section */}
        <section className="py-12 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Sidebar - Important Links */}
              <div className="lg:col-span-3">
                <ImportantLinks />
              </div>

              {/* Center - Latest News */}
              <div className="lg:col-span-6">
                <LatestNews />
              </div>

              {/* Right Sidebar - Online Services */}
              <div className="lg:col-span-3">
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
    </div>
  );
};

export default Index;
