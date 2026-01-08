import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    { name: "Python", level: 90, category: "Languages" },
    { name: "JavaScript / TypeScript", level: 80, category: "Languages" },
    { name: "TensorFlow / PyTorch", level: 80, category: "AI/ML" },
    { name: "Machine Learning", level: 85, category: "AI/ML" },
    { name: "Deep Learning", level: 85, category: "AI/ML" },
    { name: "React / Next.js", level: 75, category: "Web Dev" },
    { name: "Flutter", level: 70, category: "Mobile" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "PostgreSQL / MongoDB", level: 80, category: "Database" },
    { name: "Docker / Cloud", level: 70, category: "DevOps" },
  ];

  const categories = [
    { name: "AI / ML Model Development", readiness: 85 },
    { name: "Full-Stack Web Development", readiness: 85 },
    { name: "Data Analysis & BI", readiness: 90 },
    { name: "Backend Systems", readiness: 85 },
    { name: "Cloud & DevOps", readiness: 70 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const getReadinessColor = (level: number) => {
    if (level >= 90) return "text-gold";
    if (level >= 80) return "text-olive";
    return "text-muted-foreground";
  };

  const getReadinessLabel = (level: number) => {
    if (level >= 90) return "COMBAT READY";
    if (level >= 80) return "OPERATIONAL";
    return "DEVELOPING";
  };

  return (
    <section id="skills" className="relative py-24 bg-jet">
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
          <span className="tactical-label text-gold mb-4 block">Section 02</span>
          <h2 className="section-header">CAPABILITY MATRIX</h2>
          <div className="tactical-divider mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="tactical-card p-8"
          >
            <h3 className="font-display text-2xl tracking-wider text-gold mb-8">
              TECHNICAL ARSENAL
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium text-sm">
                      {skill.name}
                    </span>
                    <span className="tactical-label">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Combat Readiness */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="tactical-card p-8"
          >
            <h3 className="font-display text-2xl tracking-wider text-gold mb-8">
              OPERATIONAL READINESS
            </h3>

            <div className="space-y-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="p-4 bg-gunmetal/50 border border-border"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-foreground font-medium">
                      {category.name}
                    </span>
                    <span
                      className={`text-xs font-bold tracking-wider ${getReadinessColor(
                        category.readiness
                      )}`}
                    >
                      {getReadinessLabel(category.readiness)}
                    </span>
                  </div>
                  
                  {/* Tactical Meter */}
                  <div className="flex gap-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-3 flex-1 ${
                          i < Math.floor(category.readiness / 10)
                            ? "bg-olive-gradient"
                            : "bg-muted"
                        } ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                        style={{ animationDelay: `${(index * 10 + i) * 50}ms` }}
                      />
                    ))}
                  </div>
                  
                  <div className="mt-2 text-right">
                    <span className="text-gold font-display text-xl">
                      {category.readiness}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
