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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary rounded-full mb-6">
            <Quote className="w-5 h-5 text-primary-foreground" />
            <span className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Government Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Leadership Endorsements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognized for excellence in digital governance and citizen-centric services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 left-8 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 mt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-muted-foreground mb-6 text-base leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-border pt-6">
                <div className="font-bold text-primary text-lg mb-2">
                  {testimonial.name}
                </div>
                <div className="text-secondary font-semibold text-sm mb-2">
                  {testimonial.position}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-bold text-primary mb-3">98%</div>
            <div className="text-muted-foreground font-medium">Citizen Satisfaction Rate</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-bold text-secondary mb-3">50K+</div>
            <div className="text-muted-foreground font-medium">Applications Processed</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl font-bold text-accent mb-3">24/7</div>
            <div className="text-muted-foreground font-medium">Portal Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};
