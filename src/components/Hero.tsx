import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Sayanth K V</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <span className="font-mono text-primary">&lt;</span>
            MERN Stack Developer
            <span className="font-mono text-primary">/&gt;</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            Building <span className="text-foreground font-medium">scalable</span> & <span className="text-foreground font-medium">user-centric</span> web applications with modern technologies
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.7s", opacity: 0 }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:sayanth@example.com"
              className="p-3 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
