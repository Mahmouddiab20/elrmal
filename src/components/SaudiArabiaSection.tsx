import { Card } from "@/components/ui/card";
import { Crown, Star, MapPin, TrendingUp } from "lucide-react";

const SaudiArabiaSection = () => {
  const saudiEntities = [
    {
      title: "Dima Clinic Dental Center",
      description: "Strategic digital marketing initiatives for Dima Clinic Dental Center, driving significant market share and brand recognition in the Saudi Arabian healthcare market.",
      technologies: ["Healthcare Marketing", "Brand Positioning", "Digital Campaigns", "Performance Analytics"],
      icon: Crown,
      color: "text-blue-500",
      features: ["Dominant healthcare presence", "High brand recognition", "Innovative digital campaigns", "Strong ROI"],
      category: "Healthcare Leadership",
      image: "/images/dima1.PNG"
    },
    {
      title: "Saudi Market Analytics",
      description: "Comprehensive digital marketing analytics and performance tracking for leading enterprises in Saudi Arabia, achieving remarkable growth and market penetration.",
      technologies: ["Digital Analytics", "Performance Tracking", "Market Research", "Data-Driven Strategy"],
      icon: Star,
      color: "text-green-500",
      features: ["Advanced analytics", "Performance optimization", "Market insights", "Growth tracking"],
      category: "Market Analytics",
      image: "/images/dima2.PNG"
    },
    {
      title: "Dima Dental Centers National Day Campaign",
      description: "Managed a successful digital marketing campaign for Dima Dental Centers, promoting special offers for teeth cleaning during Saudi National Day 92, achieving high engagement and bookings.",
      technologies: ["Social Media Marketing", "Campaign Management", "Offer Promotion", "Local SEO", "Content Marketing"],
      icon: TrendingUp,
      color: "text-red-500",
      features: ["National Day special offer", "Increased patient bookings", "Enhanced brand visibility", "Community engagement"],
      category: "Healthcare Campaign",
      image: "/images/dima3.jpg"
    }
  ];

  return (
    <section id="saudi-arabia-insights" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-foreground">The Most Powerful </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">in Saudi Arabia</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing leading entities and strategic achievements in the Saudi Arabian market
            </p>
          </div>

          {/* Entities Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {saudiEntities.map((entity, index) => {
              const IconComponent = entity.icon;
              return (
                <div key={entity.title} className="space-y-6 col-span-1">
                  {/* Entity Info Card */}
                  <Card 
                    className="p-8 bg-gradient-card border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-6">
                      {/* Entity Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-background/50 ${entity.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {entity.title}
                            </h3>
                            <span className="text-sm text-muted-foreground font-medium">
                              {entity.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {entity.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {entity.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {entity.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-background/50 text-foreground rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Entity Image Card - Full Width */}
                  <Card 
                    className="p-0 bg-gradient-card border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 group overflow-hidden w-full"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <div className="relative w-full overflow-hidden">
                      <img 
                        src={entity.image} 
                        alt={entity.title}
                        className="w-full h-auto object-contain bg-muted/20 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-background/90 ${entity.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-semibold text-white group-hover:text-primary transition-colors">
                              {entity.title}
                            </h3>
                            <span className="text-sm text-white/90 font-medium">
                              {entity.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaudiArabiaSection;
