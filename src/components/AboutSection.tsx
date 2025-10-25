import { Card } from "@/components/ui/card";
import { Target, BarChart3, TrendingUp, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      category: "Marketing Strategy & Planning",
      icon: Target,
      color: "text-primary",
      technologies: ["Strategic Planning", "Brand Development", "Market Analysis", "Competitive Intelligence", "ROI Strategy"],
      description: "Comprehensive marketing strategy development and brand positioning"
    },
    {
      category: "Team Leadership & Management", 
      icon: BarChart3,
      color: "text-primary",
      technologies: ["Team Building", "Performance Management", "Project Coordination", "Stakeholder Communication", "Resource Allocation"],
      description: "Expert leadership in marketing team development and management"
    },
    {
      category: "Multi-Channel Campaign Management",
      icon: TrendingUp,
      color: "text-accent",
      technologies: ["Campaign Orchestration", "Cross-Platform Integration", "Budget Management", "Performance Optimization", "Analytics & Reporting"],
      description: "End-to-end campaign management across all digital channels"
    },
    {
      category: "Performance Marketing & Analytics",
      icon: Users,
      color: "text-accent",
      technologies: ["Data Analysis", "Performance Tracking", "Conversion Optimization", "Attribution Modeling", "Marketing Automation"],
      description: "Data-driven performance marketing and advanced analytics"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Digital Marketing </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Manager</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic marketing leader with expertise in team management, comprehensive campaign orchestration, and data-driven marketing strategy development across all digital channels.
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Bio */}
            <div className="space-y-6">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Strategic Digital Marketing Leader
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a Digital Marketing Manager with extensive experience leading marketing teams and orchestrating comprehensive digital strategies across all major platforms. 
                    I specialize in developing integrated marketing campaigns that deliver exceptional ROI through strategic planning and data-driven optimization.
                  </p>
                  <p>
                    My expertise spans from marketing strategy development and team leadership to advanced campaign management, budget allocation, and performance optimization.
                  </p>
                  <p>
                    I combine strategic thinking with hands-on execution to provide comprehensive marketing leadership, team development, 
                    and strategic recommendations that drive measurable business growth and brand development for organizations of all sizes.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Strategic Planning', 'Team Leadership', 'Brand Development', 'Performance Marketing', 'Cross-Channel Integration'].map((highlight, index) => (
                  <span 
                    key={highlight}
                    className="px-4 py-2 bg-gradient-card border border-border/50 rounded-lg text-sm font-medium text-foreground hover:border-primary/50 hover:shadow-glow transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden">
                <img 
                  src="/img.jpg" 
                  alt="Mohamed Elrmal - Digital Marketing Manager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                Digital Marketing Management Expertise
              </h3>
              <p className="text-muted-foreground">
                Comprehensive marketing leadership and strategic management capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card 
                    key={skill.category}
                    className="p-6 bg-gradient-card border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-background/50 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.category}
                        </h4>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-background/50 text-muted-foreground rounded border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;