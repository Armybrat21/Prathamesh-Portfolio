import { Linkedin, Instagram, Mail, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/prathamesh-rane8899",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/rane.prathamesh.8899?igsh=bnNwczZiZmxtN3E0",
      label: "Instagram",
    },
    {
      icon: Github,
      href: "https://github.com/Armybrat21",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:Prathameshrane221@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative py-12 bg-jet border-t border-border">
      <div className="absolute inset-0 grid-overlay opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <span className="font-display text-2xl tracking-[0.15em] text-foreground">
              PRATHAMESH RANE
            </span>
            <p className="tactical-label mt-2">AI Engineer • Full-Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-gold text-muted-foreground hover:text-gold transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="tactical-divider my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Prathamesh Rane. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm font-display tracking-wider">
            "BUILT WITH DISCIPLINE AND PRECISION"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
