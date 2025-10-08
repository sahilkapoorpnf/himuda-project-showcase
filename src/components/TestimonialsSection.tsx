import { Quote, Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Shri Sukhvinder Singh Sukhu",
      position: "Hon'ble Chief Minister",
      location: "Himachal Pradesh",
      quote: "HIMUDA's digital transformation has significantly enhanced transparency and accessibility in housing allocation. The new platform ensures every citizen can access government housing schemes with ease and efficiency.",
      rating: 5
    },
    {
      name: "Dr. Rajesh Kumar",
      position: "Secretary, Urban Development",
      location: "Government of Himachal Pradesh",
      quote: "The modernized HIMUDA portal represents a major leap in e-governance. It streamlines application processes and provides real-time tracking, setting new standards for public housing authorities across India.",
      rating: 5
    },
    {
      name: "Mrs. Anita Sharma",
      position: "Director, Housing & Urban Planning",
      location: "HIMUDA",
      quote: "This platform has revolutionized our operations, reducing processing time by 60% while maintaining the highest standards of data security and citizen privacy. A benchmark for digital governance.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 rounded-full mb-4 border border-secondary/20">
            <Quote className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Leadership Endorsements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by government officials and recognized for excellence in digital governance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-secondary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-muted-foreground mb-6 text-base leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-border/50 pt-6">
                <div className="font-bold text-foreground text-lg mb-1">
                  {testimonial.name}
                </div>
                <div className="text-secondary font-semibold text-sm mb-1">
                  {testimonial.position}
                </div>
                <div className="text-muted-foreground text-sm flex items-center gap-1">
                  {testimonial.location}
                </div>
              </div>

              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground text-sm">Citizen Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20">
            <div className="text-4xl font-bold text-secondary mb-2">50K+</div>
            <div className="text-muted-foreground text-sm">Applications Processed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground text-sm">Portal Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};
