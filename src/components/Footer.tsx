import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-accent/5 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">HIMUDA</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Housing & Urban Development Authority, Himachal Pradesh - Building dreams in the lap of Himalayas.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Projects</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Schemes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tenders</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">RTI</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Property Allotment</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Online Payment</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Application Status</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Download Forms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Grievance Portal</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Citizen Charter</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Nigam Vihar, Shimla-171002, Himachal Pradesh
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+911772620115" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 177 2620115
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:himuda@hp.gov.in" className="text-muted-foreground hover:text-primary transition-colors">
                  himuda@hp.gov.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 HIMUDA. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
