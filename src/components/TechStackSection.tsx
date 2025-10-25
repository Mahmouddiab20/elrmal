import { Card } from "@/components/ui/card";

const TechStackSection = () => {
  const techCategories = [
    {
      category: "Marketing Strategy & Planning",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "Strategic Planning", description: "Marketing strategy development" },
        { name: "Brand Development", description: "Brand positioning & identity" },
        { name: "Market Analysis", description: "Market research & insights" },
        { name: "Competitive Intelligence", description: "Competitor analysis" },
        { name: "ROI Strategy", description: "Performance optimization" },
      ]
    },
    {
      category: "Team Leadership & Management",
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Team Building", description: "Team development & culture" },
        { name: "Performance Management", description: "Team performance optimization" },
        { name: "Project Coordination", description: "Cross-functional collaboration" },
        { name: "Stakeholder Communication", description: "Executive reporting" },
        { name: "Resource Allocation", description: "Budget & resource management" },
      ]
    },
    {
      category: "Digital Marketing Platforms",
      color: "from-purple-500 to-violet-500",
      technologies: [
        { name: "Facebook Ads Manager", description: "Social media advertising" },
        { name: "Google Ads", description: "Search & display advertising" },
        { name: "LinkedIn Ads", description: "B2B marketing" },
        { name: "Instagram Marketing", description: "Visual content strategy" },
        { name: "TikTok Marketing", description: "Short-form video strategy" },
      ]
    },
    {
      category: "Analytics & Performance",
      color: "from-red-500 to-orange-500",
      technologies: [
        { name: "Google Analytics", description: "Website & campaign analytics" },
        { name: "Facebook Analytics", description: "Social media insights" },
        { name: "Conversion Tracking", description: "Performance measurement" },
        { name: "Attribution Modeling", description: "Multi-touch attribution" },
        { name: "Marketing Automation", description: "Automated marketing workflows" },
      ]
    },
    {
      category: "Content & Creative Management",
      color: "from-yellow-500 to-amber-500",
      technologies: [
        { name: "Content Strategy", description: "Content planning & execution" },
        { name: "Creative Direction", description: "Creative team leadership" },
        { name: "Brand Guidelines", description: "Brand consistency management" },
        { name: "Social Media Management", description: "Social media strategy" },
        { name: "Influencer Partnerships", description: "Influencer marketing" },
      ]
    },
    {
      category: "Project & Process Management",
      color: "from-gray-500 to-slate-500",
      technologies: [
        { name: "Asana", description: "Project management" },
        { name: "Slack", description: "Team communication" },
        { name: "Notion", description: "Documentation & knowledge" },
        { name: "Zoom", description: "Client & team meetings" },
        { name: "Trello", description: "Workflow management" },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 relative bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Digital Marketing </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Management Toolkit</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive expertise in marketing strategy, team leadership, digital platforms, and data-driven 
              marketing management across all major channels and industries.
            </p>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <Card 
                key={category.category}
                className="p-6 bg-gradient-card border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 group"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform duration-300`}
                    ></div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  {/* Technologies List */}
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <div 
                        key={tech.name}
                        className="group/tech p-3 rounded-lg bg-background/30 hover:bg-background/60 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${(categoryIndex * 0.1) + (techIndex * 0.05)}s` }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground group-hover/tech:text-primary transition-colors">
                            {tech.name}
                          </span>
                          <span className="text-xs text-muted-foreground group-hover/tech:text-foreground transition-colors">
                            {tech.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats or Additional Info */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Teams Led", value: "12+" },
              { label: "Projects Managed", value: "87+" },
              { label: "Average ROI", value: "12x" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center space-y-2 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;