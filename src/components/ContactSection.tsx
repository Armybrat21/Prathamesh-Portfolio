import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Shield, Github, MessageCircle, PhoneCall } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  const handleEmailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&to=Prathameshrane221@gmail.com", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917304761903", "_blank");
    setShowPhoneOptions(false);
  };

  const handleCall = () => {
    window.location.href = "tel:+917304761903";
    setShowPhoneOptions(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Prathameshrane221@gmail.com",
      onClick: handleEmailClick,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7304761903",
      isPhone: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prathamesh-rane8899",
      href: "https://www.linkedin.com/in/prathamesh-rane8899",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@rane.prathamesh.8899",
      href: "https://www.instagram.com/rane.prathamesh.8899?igsh=bnNwczZiZmxtN3E0",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Armybrat21",
      href: "https://github.com/Armybrat21",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kudal, Maharashtra, India",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-jet">
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
          <h2 className="section-header">SECURE COMMUNICATION</h2>
          <div className="tactical-divider mt-6" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="tactical-card p-8">
              <h3 className="font-display text-2xl tracking-wider text-gold mb-8 flex items-center gap-3">
                <Shield size={24} />
                COMMUNICATION CHANNELS
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {item.isPhone ? (
                      <div className="relative">
                        <button
                          onClick={() => setShowPhoneOptions(!showPhoneOptions)}
                          className="w-full flex items-start gap-4 p-4 bg-gunmetal/50 border border-border hover:border-gold/30 transition-colors group text-left"
                        >
                          <item.icon
                            size={20}
                            className="text-gold mt-0.5 flex-shrink-0"
                          />
                          <div>
                            <span className="tactical-label block mb-1">{item.label}</span>
                            <span className="text-foreground group-hover:text-gold transition-colors">
                              {item.value}
                            </span>
                          </div>
                        </button>
                        
                        {showPhoneOptions && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-full left-0 right-0 mt-2 z-20 flex gap-2"
                          >
                            <button
                              onClick={handleWhatsApp}
                              className="flex-1 flex items-center justify-center gap-2 p-3 bg-olive border border-gold/30 hover:border-gold text-foreground transition-colors"
                            >
                              <MessageCircle size={18} />
                              <span className="text-sm font-medium">WhatsApp</span>
                            </button>
                            <button
                              onClick={handleCall}
                              className="flex-1 flex items-center justify-center gap-2 p-3 bg-olive border border-gold/30 hover:border-gold text-foreground transition-colors"
                            >
                              <PhoneCall size={18} />
                              <span className="text-sm font-medium">Call</span>
                            </button>
                          </motion.div>
                        )}
                      </div>
                    ) : item.onClick ? (
                      <button
                        onClick={item.onClick}
                        className="w-full flex items-start gap-4 p-4 bg-gunmetal/50 border border-border hover:border-gold/30 transition-colors group text-left"
                      >
                        <item.icon
                          size={20}
                          className="text-gold mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <span className="tactical-label block mb-1">{item.label}</span>
                          <span className="text-foreground group-hover:text-gold transition-colors">
                            {item.value}
                          </span>
                        </div>
                      </button>
                    ) : item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-4 bg-gunmetal/50 border border-border hover:border-gold/30 transition-colors group"
                      >
                        <item.icon
                          size={20}
                          className="text-gold mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <span className="tactical-label block mb-1">{item.label}</span>
                          <span className="text-foreground group-hover:text-gold transition-colors">
                            {item.value}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 bg-gunmetal/50 border border-border">
                        <item.icon
                          size={20}
                          className="text-gold mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <span className="tactical-label block mb-1">{item.label}</span>
                          <span className="text-foreground">{item.value}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
