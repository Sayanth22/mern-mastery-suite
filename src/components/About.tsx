const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Journey</span>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-card border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate <span className="text-foreground font-medium">MERN Stack Developer</span> with hands-on experience in building scalable, secure, and user-friendly web applications. I specialize in developing full-stack solutions using <span className="text-primary font-mono">MongoDB</span>, <span className="text-primary font-mono">Express.js</span>, <span className="text-primary font-mono">React.js</span>, and <span className="text-primary font-mono">Node.js</span>, with a strong focus on clean code, performance, and responsive design.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-card border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed">
                During my internship at <span className="text-foreground font-medium">RISS Technologies</span>, I worked on real-world projects involving RESTful APIs, authentication systems, and modern UI development. I have experience integrating frontend and backend systems, implementing role-based access control, and optimizing application performance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-card border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy <span className="text-foreground font-medium">solving problems</span>, <span className="text-foreground font-medium">learning new technologies</span>, and <span className="text-foreground font-medium">collaborating in team environments</span>. My goal is to contribute to impactful software products while continuously growing as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
