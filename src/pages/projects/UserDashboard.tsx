import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Users, Settings, UserCheck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-background/50 text-orange-400">
                <Users className="h-12 w-12" />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Simple User </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Simple user dashboard for managing profiles and basic operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Dashboard
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Features */}
              <Card className="p-8 bg-gradient-card border-border">
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Key Features</h3>
                <div className="space-y-4">
                  {[
                    { icon: Settings, text: "Profile management" },
                    { icon: UserCheck, text: "User validation" },
                    { icon: Shield, text: "Secure operations" },
                    { icon: Users, text: "Intuitive interface" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <feature.icon className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Technologies */}
              <Card className="p-8 bg-gradient-card border-border">
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {["React", "Bootstrap", "REST APIs", "Form Validation"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-background/50 text-foreground rounded-lg border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            {/* Project Description */}
            <Card className="p-8 bg-gradient-card border-border">
              <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Project Overview</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A streamlined user dashboard built with React and Bootstrap, designed for efficient profile management 
                  and basic user operations. The dashboard prioritizes simplicity and usability while maintaining 
                  robust functionality for user account management.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The interface features intuitive navigation, comprehensive form validation, and responsive design 
                  principles. Bootstrap components ensure consistent styling and behavior across different devices 
                  and screen sizes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Technical highlights include React component architecture, REST API integration for data management, 
                  comprehensive form validation, and Bootstrap responsive framework implementation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;