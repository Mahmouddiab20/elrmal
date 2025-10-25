import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Download, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbypSJp2Pb6SJc0tH4fJNysNh3yXsRDkvBUuGK5LxYsT-98Yl_khEClVjbQwWFM-c1k/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      alert('Thank you! Your marketing strategy request has been submitted successfully.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "WhatsApp", 
      icon: MessageCircle,
      href: "https://wa.me/201028530685",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Let's Transform </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">Your Marketing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to elevate your marketing strategy? Whether it's team leadership, strategic planning, 
              comprehensive campaign management, or brand development - let's drive your business growth together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Start Your Marketing Strategy
                  </h3>
                  <p className="text-muted-foreground">
                    Tell me about your business goals and I'll create a comprehensive digital marketing strategy for you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your business, marketing challenges, team structure, and strategic goals..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Start Strategy Discussion
                  </Button>
                </form>
              </div>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="p-8 bg-gradient-card border-border">
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Get My Marketing Portfolio
                  </h3>
                  <p className="text-muted-foreground">
                    Download my complete digital marketing management portfolio with detailed project results, 
                    case studies, and strategic achievements.
                  </p>
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 font-semibold"
                  >
                    <a 
                      href="/Mohamed Elrmal CV 2022.pdf"
                      download="Mohamed Elrmal CV 2022.pdf"
                      target="_blank"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Marketing Portfolio (PDF)
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8 bg-gradient-card border-border">
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Connect With Me
                  </h3>
                  <p className="text-muted-foreground">
                    Follow my work and connect on professional platforms.
                  </p>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          className={`flex items-center gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/60 border border-border/50 hover:border-primary/30 text-muted-foreground ${social.color} transition-all duration-300 group`}
                        >
                          <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{social.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-8 bg-gradient-card border-border">
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Recent Project Results
                  </h3>
                  <div className="space-y-3">
                    {[
                      "E-commerce strategy: 4.2x ROAS achieved",
                      "Marketing transformation: 60% efficiency gain", 
                      "Brand development: 2M+ impressions generated"
                    ].map((activity, index) => (
                      <div key={activity} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;