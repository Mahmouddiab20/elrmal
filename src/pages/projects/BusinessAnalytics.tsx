import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, BarChart3, TrendingUp, PieChart, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessAnalytics = () => {
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
              <div className="p-4 rounded-2xl bg-background/50 text-blue-400">
                <BarChart3 className="h-12 w-12" />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Business Analytics </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interactive front-end for monitoring KPIs and data visualization using React and D3.js
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <ExternalLink className="mr-2 h-5 w-5" />
                Live Demo
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
                    { icon: BarChart3, text: "Interactive dashboards" },
                    { icon: PieChart, text: "Data visualization" },
                    { icon: TrendingUp, text: "KPI monitoring" },
                    { icon: LineChart, text: "Dynamic UI updates" }
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
                  {["React", "D3.js", "Tailwind CSS", "JavaScript", "JSON APIs"].map((tech) => (
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
                  A comprehensive business analytics platform built with React and D3.js, designed to provide executives 
                  and decision-makers with powerful data visualization and KPI monitoring capabilities. The platform transforms 
                  complex business data into intuitive, interactive visualizations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The front-end architecture emphasizes performance and user experience, featuring real-time data updates, 
                  customizable dashboards, and responsive design principles. Advanced D3.js visualizations provide deep 
                  insights into business metrics and trends.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Key technical implementations include efficient API integration, dynamic chart rendering, and optimized 
                  component architecture for handling large datasets while maintaining smooth user interactions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAnalytics;