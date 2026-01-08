import { motion } from "framer-motion";
import { MapPin, Crosshair, Camera, Dumbbell, Music, CircleDot, TargetIcon } from "lucide-react";
import { GraduationCap } from "lucide-react";

const AboutSection = () => {
  const operationalDomains = [
    "AI / ML Engineering",
    "Web Development",
    "Data Analysis",
    "Backend Systems",
  ];

  const coreStrengths = [
    "AI & DS",
    "Python",
    "HTML & CSS",
    "JavaScript",
    "Flutter",
    "TensorFlow",
    "Node.js",
    "React",
    "SQL",
  ];

  const auxiliarySkills = [
    { icon: Camera, label: "Photography" },
    { icon: Dumbbell, label: "Boxing" },
    { icon: Music, label: "Music" },
    { icon: CircleDot, label: "Running" },
    { icon: TargetIcon, label: "Marksmanship" },
  ];

  return (
    <section id="about" className="relative py-24 bg-tactical-gradient">
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
          <span className="tactical-label text-gold mb-4 block">Section 01</span>
          <h2 className="section-header">PERSONNEL DOSSIER</h2>
          <div className="tactical-divider mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Panel - Operator Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="tactical-card p-8"
          >
            <h3 className="font-display text-2xl tracking-wider text-gold mb-8">
              OPERATOR PROFILE
            </h3>

            {/* Education */}
            <div className="flex items-start gap-4 mb-8">
              <GraduationCap className="text-gold mt-1 flex-shrink-0" size={20} />
              <div>
                <span className="tactical-label block mb-1">Education</span>
                <p className="text-foreground font-medium text-sm leading-relaxed">
                  Bachelor of Engineering — Artificial Intelligence & Data Science<br />
                  Datta Meghe College of Engineering, Airoli, Maharashtra, India<br />
                  <span className="text-muted-foreground">CGPA: 7 / 10</span>
                </p>
              </div>
            </div>


            {/* Base Location */}
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
              <div>
                <span className="tactical-label block mb-1">Base Location</span>
                <p className="text-foreground font-medium">
                  Kudal, Maharashtra, India
                </p>
              </div>
            </div>

            {/* Operational Domains */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Crosshair className="text-gold" size={20} />
                <span className="tactical-label">Operational Domains</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {operationalDomains.map((domain, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    <span className="text-sm">{domain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Strengths */}
            <div className="mb-8">
              <span className="tactical-label block mb-4">Core Strengths</span>
              <div className="flex flex-wrap gap-2">
                {coreStrengths.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-olive/30 border border-olive/50 text-foreground text-sm font-medium tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Auxiliary Skills */}
            <div>
              <span className="tactical-label block mb-4">Auxiliary Skills</span>
              <div className="flex gap-6">
                {auxiliarySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                  >
                    <skill.icon size={24} />
                    <span className="text-xs uppercase tracking-wider">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Background Brief */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="tactical-card p-8"
          >
            <h3 className="font-display text-2xl tracking-wider text-gold mb-8">
              BACKGROUND BRIEF
            </h3>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">Prathamesh Dattatray Rane</span> —
                AI Engineer and Full-Stack Developer, trained to design intelligent systems,
                build scalable web applications, and deploy real-world AI solutions with
                precision and discipline.
              </p>

              <p>
                With a focus on machine learning, deep learning, and full-stack development,
                I approach every project with the mindset of a mission — clear objectives,
                strategic planning, and flawless execution. My technical arsenal spans from
                Python and TensorFlow for AI/ML to React, Next.js, and Flutter for modern
                web and mobile applications.
              </p>

              <p>
                Beyond the digital battlefield, I maintain operational readiness through
                boxing training, endurance running, and creative pursuits including music
                and wildlife photography. These disciplines cultivate the focus, patience,
                and attention to detail that translate directly into superior engineering work.
              </p>

              <p>
                Every line of code is written with purpose. Every system is built to perform
                under pressure. Every solution is engineered for real-world impact.
              </p>
            </div>

            {/* Mission Quote */}
            <div className="mt-8 p-6 border-l-2 border-gold bg-gunmetal/50">
              <p className="font-display text-xl tracking-wider text-gold italic">
                "Trained to execute. Built to deliver."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
