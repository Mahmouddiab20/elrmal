import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Target, BarChart3, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Arkan Holding Brand Awareness Campaign",
      description: "Developed and executed comprehensive brand awareness campaign for Arkan Holding, targeting key stakeholders and decision-makers across multiple industries to enhance brand recognition and market presence.",
      technologies: ["Brand Strategy", "Awareness Campaigns", "Stakeholder Engagement", "Market Research", "Brand Positioning"],
      icon: Target,
      color: "text-blue-500",
      features: ["Brand awareness enhancement", "Stakeholder engagement", "Market positioning"],
      category: "Brand Awareness Campaign",
      image: "/images/2700.jpg"
    },
    {
      title: "Arkan Holding Digital Marketing Strategy", 
      description: "Created integrated digital marketing strategy for Arkan Holding, focusing on multi-channel brand awareness, stakeholder engagement, and market positioning across various business sectors.",
      technologies: ["Digital Strategy", "Brand Awareness", "Stakeholder Marketing", "Multi-channel Campaigns", "Market Positioning"],
      icon: BarChart3,
      color: "text-green-500",
      features: ["Integrated digital strategy", "Multi-channel approach", "Stakeholder targeting"],
      category: "Digital Marketing Strategy",
      image: "/images/1400.jpg"
    },
    {
      title: "Chinese Export Brand Development",
      description: "Developed and executed comprehensive brand strategy for Chinese export business targeting Arab and African markets, building brand awareness and recognition among traders and importers across the region.",
      technologies: ["Brand Strategy", "Content Marketing", "Social Media Management", "Trader Engagement", "Brand Analytics"],
      icon: TrendingUp,
      color: "text-pink-500",
      features: ["Brand awareness building", "Trader engagement", "Market recognition", "Comprehensive brand strategy"],
      category: "Export Brand Management",
      image: "/images/WhatsApp Image 2025-10-24 at 21.45.33_51b9a624.jpg"
    },
    {
      title: "Arab & African Market Expansion Strategy",
      description: "Led market expansion initiative for Chinese export business, conducting comprehensive market analysis and developing entry strategy for Arab and African markets. Focused on targeting traders and importers to complete import operations.",
      technologies: ["Market Analysis", "Strategic Planning", "Trader Targeting", "Import Operations", "Performance Tracking"],
      icon: Users,
      color: "text-purple-500",
      features: ["Market expansion", "Trader targeting", "Import operations", "Strategic market entry"],
      category: "Export Strategic Planning",
      image: "/images/market-research.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Featured </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic digital marketing management projects and comprehensive marketing leadership initiatives across diverse industries
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={project.title} className="space-y-6 col-span-1">
                  {/* Project Info Card */}
                  <Card 
                    className="p-8 bg-gradient-card border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-6">
                      {/* Project Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-background/50 ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <span className="text-sm text-muted-foreground font-medium">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.features.map((feature) => (
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
                          {project.technologies.map((tech) => (
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
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Analytics
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Project Image Card - Full Width */}
                  <Card 
                    className="p-0 bg-gradient-card border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 group overflow-hidden w-full"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <div className="relative w-full overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto object-contain bg-muted/20 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-background/90 ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-semibold text-white group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <span className="text-sm text-white/90 font-medium">
                              {project.category}
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

          {/* View More Projects CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;