import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Trophy } from "lucide-react";
import { useState, useEffect } from "react";

const DeploymentSection = () => {
  const [experience, setExperience] = useState({ years: 0, months: 0 });

  const deployments = [
    {
      position: "Backend Web Developer",
      company: "Diarossa Jewels Pvt Ltd",
      duration: "Jan 2026 - Present",
      startDate: "2026-01-02",
      endDate: null,
      location: "Dombivli, Maharashtra, India",
      achievements: [
        "Built responsive and interactive web interfaces using HTML, CSS, and JavaScript.",
        "Developed and customized WordPress & WooCommerce websites for product and content management.",
        "Supported backend functionality and integrations using Node.js.",
      ],
    },
    {
      position: "Data Analyst Intern",
      company: "Quess Corp Ltd",
      duration: "Oct 2024 - Dec 2024",
      startDate: "2024-10-01",
      endDate: "2024-12-31",
      location: "Remote Deployment",
      achievements: [
        "Analyzed and cleaned data using Excel, Python, and SQL.",
        "Created clear insights through reports and dashboards.",
        "Ensured data accuracy and consistency across datasets.",
      ],
    },
    
  ];

  // Calculate total experience
  useEffect(() => {
    const calculateExperience = () => {
      let totalMonths = 0;

      deployments.forEach((deployment) => {
        const start = new Date(deployment.startDate);
        const end = deployment.endDate ? new Date(deployment.endDate) : new Date();

        // Base month difference
        let monthsDiff =
          (end.getFullYear() - start.getFullYear()) * 12 +
          (end.getMonth() - start.getMonth());

        // If the end day is on/after the start day, count the current partial month
        // (round partial months up so the displayed months feel intuitive)
        if (end.getDate() >= start.getDate()) monthsDiff += 1;

        // Ensure non-negative
        if (monthsDiff < 0) monthsDiff = 0;

        totalMonths += monthsDiff;
      });

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      setExperience({ years, months });
    };

    calculateExperience();

    // Update every day (for the "Present" position)
    const interval = setInterval(calculateExperience, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="deployment" className="relative py-24 bg-background">
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
          <span className="tactical-label text-gold mb-4 block">Section 03</span>
          <h2 className="section-header">DEPLOYMENT HISTORY</h2>
          <div className="tactical-divider mt-6" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {deployments.map((deployment, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-jet/50 border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition-all duration-300"
            >
              {/* Timeline marker */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold to-transparent rounded-l-lg" />

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Position & Company */}
                <div className="col-span-1">
                  <div className="flex items-start gap-3 mb-4">
                    <Briefcase className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-display text-xl text-gold">{deployment.position}</h3>
                      <p className="text-foreground/70">{deployment.company}</p>
                    </div>
                  </div>
                </div>

                {/* Center: Duration & Location */}
                <div className="col-span-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gold/70 flex-shrink-0" size={18} />
                    <p className="tactical-label">{deployment.duration}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-gold/70 flex-shrink-0" size={18} />
                    <p className="tactical-label">{deployment.location}</p>
                  </div>
                </div>

                {/* Right: Achievements */}
                <div className="col-span-1">
                  <h4 className="font-display text-sm text-gold/90 mb-3 flex items-center gap-2">
                    <Trophy size={16} />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {deployment.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-foreground/80 text-sm">
                        <span className="text-gold mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 mt-16"
        >
          <div className="bg-gold/10 border border-gold/20 rounded-lg p-6 text-center">
            <p className="text-3xl font-display text-gold mb-2">
              {`${experience.years} years ${experience.months} months`}
            </p>
            <p className="tactical-label">Total Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeploymentSection;
