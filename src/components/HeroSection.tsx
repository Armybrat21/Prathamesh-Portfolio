import { motion } from "framer-motion";
import { ChevronDown, Target, Mail, FileDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-jet/80 via-jet/70 to-jet" />
        <div className="absolute inset-0 grid-overlay opacity-20" />
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gold/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gold/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gold/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gold/30" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="status-indicator tactical-label">
            Operational Status: Active
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.1em] text-foreground mb-4 stencil-text"
        >
          PRATHAMESH DATTATRAY
          <div>RANE</div>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 text-gold font-body text-sm md:text-base tracking-[0.2em] uppercase mb-8"
        >
          <span>AI Engineer</span>
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          <span>Full-Stack Developer</span>
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          <span>ML Enthusiast</span>
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          <span>Data Analyst</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-display text-2xl md:text-3xl tracking-[0.3em] text-muted-foreground mb-16"
        >
          "PRECISION. INTELLIGENCE. EXECUTION."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex items-center gap-3 px-8 py-4 bg-olive-gradient text-foreground font-body font-medium tracking-wider uppercase text-sm hover:scale-105 transition-transform duration-300 gold-glow"
          >
            <Target size={18} />
            View Missions
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-3 px-8 py-4 border border-gold/50 text-gold font-body font-medium tracking-wider uppercase text-sm hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            <Mail size={18} />
            Establish Contact
          </button>
          <a
            href="/resume.pdf"
            download="Prathamesh_Rane_Resume.pdf"
            className="group flex items-center gap-3 px-8 py-4 border border-gold/50 text-gold font-body font-medium tracking-wider uppercase text-sm hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            <FileDown size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
          <span className="tactical-label">Scroll</span>
          <ChevronDown className="animate-bounce" size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
