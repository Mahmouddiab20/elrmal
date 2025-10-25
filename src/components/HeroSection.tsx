import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Create animated rain effect
    const createRain = () => {
      const rainContainer = document.getElementById('rainBackground');
      if (!rainContainer) return;
      
      const rainCount = 80;

      for (let i = 0; i < rainCount; i++) {
        const rainLine = document.createElement('div');
        rainLine.className = 'rain-line';
        rainLine.style.left = Math.random() * 100 + '%';
        rainLine.style.height = Math.random() * 100 + 100 + 'px';
        rainLine.style.animationDuration = Math.random() * 4 + 3 + 's';
        rainLine.style.animationDelay = Math.random() * 3 + 's';
        
        // Add hover effect for glowing
        rainLine.addEventListener('mouseenter', function() {
          this.classList.add('highlight');
        });
        
        rainLine.addEventListener('mouseleave', function() {
          this.classList.remove('highlight');
        });
        
        // Random highlight effect
        if (Math.random() < 0.1) {
          setTimeout(() => {
            rainLine.classList.add('highlight');
            setTimeout(() => {
              rainLine.classList.remove('highlight');
            }, 1000);
          }, Math.random() * 5000);
        }
        
        rainContainer.appendChild(rainLine);
      }
    };

    createRain();
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated rain background */}
      <div id="rainBackground" className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up pt-20 md:pt-0">
          {/* Main headline */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-2xl md:text-3xl font-light text-muted-foreground tracking-wide">
                Mohamed Elrmal
              </h2>
              <div className="h-1 w-24 bg-gradient-accent rounded-full mx-auto animate-pulse"></div>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-foreground">Digital Marketing </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent animate-pulse">
                Manager
              </span>
            </h1>
            <div className="text-foreground font-display text-xl md:text-2xl font-light max-w-4xl mx-auto">
              <span className="typing-text">Leading comprehensive digital marketing strategies, team management, and multi-channel campaign optimization</span>
            </div>
          </div>

          {/* Value Statement */}
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Strategic digital marketing leader with expertise in team management, multi-channel campaign orchestration, and comprehensive marketing strategy development. Specializing in performance marketing, brand management, and data-driven decision making.
          </p>

          {/* Tech stack indicators */}
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
            {['Marketing Strategy', 'Team Leadership', 'Campaign Management', 'Brand Development', 'Performance Marketing', 'ROI Optimization'].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-card/50 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <span>Explore My Work</span>
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;