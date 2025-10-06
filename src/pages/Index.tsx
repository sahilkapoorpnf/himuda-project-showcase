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
        <section className="py-16 bg-gradient-to-b from-accent/10 via-background to-accent/5 relative">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAgTSAyMCAwIEwgMjAgNjAgTSAwIDIwIEwgNjAgMjAgTSAzMCAwIEwgMzAgNjAgTSAwIDMwIEwgNjAgMzAgTSA0MCAwIEwgNDAgNjAgTSAwIDQwIEwgNjAgNDAgTSA1MCAwIEwgNTAgNjAgTSAwIDUwIEwgNjAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10">
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
