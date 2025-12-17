import { Code2, Database, Globe, Server, Wrench, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    color: "primary",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    color: "accent",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "SQL Server"],
    color: "primary",
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "Python", "C#", "SQL"],
    color: "accent",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["GitHub", "Postman", "VS Code", "Visual Studio"],
    color: "primary",
  },
  {
    title: "Other",
    icon: Zap,
    skills: ["Role-Based Access", "API Integration", "Clean Code"],
    color: "accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              What I Work With
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized in the MERN stack with expertise in building full-stack solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
