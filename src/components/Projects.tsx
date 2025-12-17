import { Brain, Users, Shirt, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Mental Health Assistant",
    description: "A sentiment-based system that analyzes questionnaire responses to recommend mental health support solutions using Python and Django.",
    icon: Brain,
    tags: ["Python", "Django", "Sentiment Analysis", "ML"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "hover:border-emerald-500/50",
  },
  {
    title: "Social Interaction Web App",
    description: "A MERN-based platform featuring secure authentication, friend requests, and optimized frontend-backend communication.",
    icon: Users,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-500/50",
  },
  {
    title: "Laundry Booking Application",
    description: "A multi-role MERN application with JWT authentication, real-time order tracking, and responsive UI for Admin, User, and Laundry Admin roles.",
    icon: Shirt,
    tags: ["MERN Stack", "JWT", "Role-Based Access", "Real-time"],
    gradient: "from-violet-500/20 to-purple-500/20",
    borderColor: "hover:border-violet-500/50",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Project <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world applications showcasing full-stack development skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className={`group relative p-8 rounded-2xl bg-card border border-border ${project.borderColor} transition-all duration-500 hover:shadow-elevated hover:-translate-y-2`}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </div>
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

export default Projects;
