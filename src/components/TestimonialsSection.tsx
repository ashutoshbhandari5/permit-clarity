import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Architect",
    company: "Chen Design Studio",
    quote: "Permit Shark saved us 3 months on our last project. We caught a setback issue before submitting that would have killed our timeline.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "General Contractor",
    company: "BuildRight Construction",
    quote: "I used to spend hours cross-referencing zoning codes. Now I upload plans and get instant clarity. Game changer for our workflow.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Jennifer Walsh",
    role: "Property Developer",
    company: "Urban Edge Development",
    quote: "We've reduced permit rejections by 80% since using Permit Shark. The ROI on avoiding redesigns alone is incredible.",
    rating: 5,
    avatar: "JW",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-secondary/30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-success/5 rounded-full blur-3xl parallax-medium" />

      <div className="container-wide px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="badge-accent mb-4 mx-auto w-fit">
            <Star className="h-4 w-4" />
            <span>Customer Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-accent">industry leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how architects, contractors, and developers are saving time and money with Permit Shark.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                "group relative bg-background rounded-2xl p-6 sm:p-8 border border-border/50 shadow-sm",
                "hover:shadow-lg hover:border-accent/30 transition-all duration-300",
                "hover:-translate-y-1"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-accent to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
