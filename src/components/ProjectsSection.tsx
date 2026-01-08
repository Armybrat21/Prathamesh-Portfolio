import { motion } from "framer-motion";
import { Target, Calendar, CheckCircle } from "lucide-react";

interface Project {
  id: string;
  title: string;
  objective: string;
  techStack: string[];
  outcome: string;
  status: "COMPLETED" | "IN PROGRESS" | "ARCHIVED";
  featured: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: "MISSION-001",
      title: "Parikshan.io",
      objective: "AI-powered interview simulation platform for job seekers to practice and improve their interview skills with real-time AI feedback.",
      techStack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Tailwind CSS"],
      outcome: "Deployed platform helping candidates prepare with AI-driven mock interviews and personalized feedback.",
      status: "COMPLETED",
      featured: true,
    },
    {
      id: "MISSION-002",
      title: "AI Object Detection System",
      objective: "Real-time object detection system with speech output for visually impaired users, enabling them to understand their surroundings.",
      techStack: ["Python", "TensorFlow", "OpenCV", "pyttsx3", "YOLO"],
      outcome: "Functional system capable of detecting and announcing objects in real-time with 95% accuracy.",
      status: "COMPLETED",
      featured: true,
    },
    {
      id: "MISSION-003",
      title: "Ride Sharing Application",
      objective: "Full-featured car pooling and ride sharing application with real-time location tracking and payment integration.",
      techStack: ["Flutter", "Firebase", "Google Maps API", "Dart"],
      outcome: "Cross-platform mobile application with seamless user experience and real-time ride matching.",
      status: "COMPLETED",
      featured: true,
    },
    {
      id: "MISSION-004",
      title: "Medication Recommendation System",
      objective: "AI-driven system for recommending medications based on symptoms and patient history.",
      techStack: ["Python", "Machine Learning", "Scikit-learn", "Flask"],
      outcome: "Predictive model with 89% accuracy in medication recommendations.",
      status: "COMPLETED",
      featured: false,
    },
    {
      id: "MISSION-005",
      title: "Ray Tracing Engine",
      objective: "Custom ray tracing rendering engine for photorealistic 3D graphics generation.",
      techStack: ["C++", "OpenGL", "Mathematics", "GPU Compute"],
      outcome: "Functional rendering engine capable of producing photorealistic images with reflections and refractions.",
      status: "COMPLETED",
      featured: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "text-gold bg-gold/10 border-gold/30";
      case "IN PROGRESS":
        return "text-olive bg-olive/10 border-olive/30";
      default:
        return "text-muted-foreground bg-muted/10 border-muted/30";
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-tactical-gradient">
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="tactical-label text-gold mb-4 block">Section 04</span>
          <h2 className="section-header">MISSION RECORDS</h2>
          <div className="tactical-divider mt-6" />
        </motion.div>

        {/* Main Mission */}
        {projects[0] && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 p-8 lg:p-12 bg-gradient-to-r from-gold/5 to-gold/10 border-2 border-gold/40 rounded-lg hover:border-gold/60 transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="tactical-label text-gold text-lg mb-4 block">PRIMARY MISSION</span>
                <h3 className="font-display text-4xl tracking-wider text-gold mb-6">
                  {projects[0].title}
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  {projects[0].objective}
                </p>
                <div className="mb-6">
                  <p className="tactical-label mb-3">Tech Arsenal</p>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gold/20 text-gold text-sm border border-gold/30 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-8 bg-jet/50 border border-gold/20 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle size={24} className="text-gold" />
                  <span className="font-display text-xl text-gold">Mission Outcome</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {projects[0].outcome}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Featured Missions */}
        <div className="mb-12">
          <h3 className="font-display text-xl tracking-wider text-gold mb-8 flex items-center gap-3">
            <Target size={20} />
            FEATURED MISSIONS
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.featured && p.id !== "MISSION-001")
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="tactical-card p-6 group hover:border-gold/30 transition-colors duration-300"
                >
                  {/* Mission ID & Status */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="tactical-label">{project.id}</span>
                    <span
                      className={`px-2 py-1 text-xs font-medium border ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-2xl tracking-wider text-foreground mb-4 group-hover:text-gold transition-colors">
                    {project.title}
                  </h4>

                  {/* Objective */}
                  <div className="mb-4">
                    <span className="tactical-label block mb-2">Mission Objective</span>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <span className="tactical-label block mb-2">Tech Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gunmetal text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Missions */}
        <div>
          <h3 className="font-display text-xl tracking-wider text-muted-foreground mb-8 flex items-center gap-3">
            <Calendar size={20} />
            ARCHIVED MISSIONS
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-card border border-border hover:border-gold/30 transition-colors group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="tactical-label text-xs">{project.id}</span>
                    <CheckCircle size={14} className="text-gold" />
                  </div>
                  <h4 className="font-display text-lg tracking-wider text-foreground group-hover:text-gold transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 bg-gunmetal text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
