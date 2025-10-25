import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Palette, Target, TrendingUp, Users, Globe } from "lucide-react";

const BrandingStrategiesSection = () => {
  const brandingStrategies = [
    {
      title: "White Diamond Hotel Brand Identity",
      description: "Developed comprehensive brand identity for White Diamond Hotel in Saudi Arabia, creating visual identity, brand guidelines, and messaging framework for the luxury hospitality market.",
      technologies: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Market Research", "Cultural Adaptation"],
      icon: Palette,
      color: "text-blue-500",
      features: ["Complete brand identity", "Luxury hospitality positioning", "Visual identity system", "Brand guidelines"],
      category: "Brand Identity",
      image: "/data/wd.jpg"
    },
    {
      title: "White Diamond Hotel Brand Positioning", 
      description: "Positioned White Diamond Hotel brand across Saudi Arabian luxury hospitality market, adapting messaging and visual elements for cultural relevance while maintaining brand consistency.",
      technologies: ["Market Research", "Cultural Analysis", "Brand Positioning", "Localization", "Cross-Cultural Marketing"],
      icon: Target,
      color: "text-green-500",
      features: ["Luxury market positioning", "Cultural adaptation", "Brand consistency", "Local market relevance"],
      category: "Brand Positioning",
      image: "/data/اختر اللي يناسبك.png"
    },
    {
      title: "ERB Real Estate Brand Identity",
      description: "Developed comprehensive brand identity for ERB real estate company in Saudi Arabia, creating visual identity, brand guidelines, and messaging framework for the property market. Project under construction but branding identity completed.",
      technologies: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Real Estate Marketing", "Cultural Adaptation"],
      icon: TrendingUp,
      color: "text-purple-500",
      features: ["Complete brand identity", "Real estate sector positioning", "Visual identity system", "Brand guidelines"],
      category: "Brand Identity",
      image: "/data/3.png"
    },
    {
      title: "ERB Real Estate Brand Strategy",
      description: "Developed comprehensive brand strategy for ERB real estate company, creating positioning framework and brand architecture for the Saudi Arabian property market. Project under construction but branding identity completed.",
      technologies: ["Brand Strategy", "Market Research", "Brand Positioning", "Real Estate Marketing", "Strategic Planning"],
      icon: Users,
      color: "text-orange-500",
      features: ["Brand strategy development", "Market positioning", "Brand architecture", "Strategic framework"],
      category: "Brand Strategy",
      image: "/data/1.png"
    },
    {
      title: "Elshawarby Furniture Exhibition Branding",
      description: "Created complete visual identity system for Elshawarby furniture exhibition, including logo design, color schemes, typography, and exhibition booth design guidelines for furniture showcase events.",
      technologies: ["Logo Design", "Visual Identity", "Exhibition Design", "Booth Design", "Print Materials"],
      icon: Globe,
      color: "text-cyan-500",
      features: ["Logo design", "Visual identity system", "Booth design guidelines", "Print materials"],
      category: "Exhibition Branding",
      image: "/data/sh2.jpg"
    },
    {
      title: "Elshawarby Furniture Marketing Campaigns",
      description: "Executed comprehensive marketing campaigns for Elshawarby furniture exhibition, including digital advertising, social media promotion, and event marketing strategies to drive attendance and engagement.",
      technologies: ["Digital Advertising", "Social Media Marketing", "Event Marketing", "Content Creation", "Audience Targeting"],
      icon: Palette,
      color: "text-indigo-500",
      features: ["Digital advertising campaigns", "Social media promotion", "Event marketing", "Audience engagement"],
      category: "Marketing Campaigns",
      image: "/data/s1.jpg"
    },
    {
      title: "Alamiri Motors ",
      description: "Developed comprehensive branding strategy for Alamiri Motors automotive company, creating brand identity, visual guidelines, and marketing framework for the automotive industry in Saudi Arabia.",
      technologies: ["Automotive Branding", "Visual Identity", "Brand Guidelines", "Marketing Strategy", "Industry Positioning"],
      icon: Target,
      color: "text-emerald-500",
      features: ["Automotive brand identity", "Visual identity system", "Brand guidelines", "Industry positioning"],
      category: "Automotive Branding",
      image: "/data/al2.jpg"
    },
    {
      title: "MR BKR Car Wash Branding",
      description: "Developed comprehensive branding strategy for MR BKR car wash business, creating brand identity, visual guidelines, and marketing framework for the automotive service industry in Saudi Arabia.",
      technologies: ["Service Branding", "Visual Identity", "Brand Guidelines", "Marketing Strategy", "Customer Experience"],
      icon: TrendingUp,
      color: "text-red-500",
      features: ["Car wash brand identity", "Service branding", "Customer experience design", "Marketing strategy"],
      category: "Service Branding",
      image: "/data/bk2.jpg"
    }
  ];

  return (
    <section id="branding-strategies" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Branding </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Strategies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive brand development and positioning strategies for B2B export companies targeting international markets
            </p>
          </div>

          {/* Branding Strategies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {brandingStrategies.map((strategy, index) => {
              const IconComponent = strategy.icon;
              return (
                <div key={strategy.title} className="space-y-6 col-span-1">
                  {/* Strategy Info Card */}
                  <Card 
                    className="p-8 bg-gradient-card border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-6">
                      {/* Strategy Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-background/50 ${strategy.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {strategy.title}
                            </h3>
                            <span className="text-sm text-muted-foreground font-medium">
                              {strategy.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {strategy.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {strategy.features.map((feature) => (
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
                          {strategy.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-background/50 text-foreground rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button 
                          size="sm" 
                          className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 hover:border-primary transition-all duration-300"
                          asChild
                        >
                          <a href="#contact" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          }}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Case Study
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-border hover:border-muted-foreground hover:bg-muted/10 transition-all duration-300"
                        >
                          <Globe className="mr-2 h-4 w-4" />
                          Brand Analysis
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Strategy Image Card - Full Width */}
                  <Card 
                    className="p-0 bg-gradient-card border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 group overflow-hidden w-full"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <div className="relative w-full overflow-hidden">
                      <img 
                        src={strategy.image} 
                        alt={strategy.title}
                        className="w-full h-auto object-contain bg-muted/20 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-background/90 ${strategy.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-semibold text-white group-hover:text-primary transition-colors">
                              {strategy.title}
                            </h3>
                            <span className="text-sm text-white/90 font-medium">
                              {strategy.category}
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

          {/* View More Strategies CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View All Branding Strategies
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingStrategiesSection;
