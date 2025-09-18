import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Courses",
      links: [
        { name: "Web Development", href: "/courses/web-development" },
        { name: "Design", href: "/courses/design" },
        { name: "Business", href: "/courses/business" },
        { name: "AI & Machine Learning", href: "/courses/ai-ml" },
        { name: "Mobile Development", href: "/courses/mobile" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Student Success", href: "/student-success" },
        { name: "Instructor Resources", href: "/instructor-resources" },
        { name: "System Status", href: "/status" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Accessibility", href: "/accessibility" },
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/samosglobal" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/samosglobal" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/samosglobal" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/samosglobal" },
  ];

  const contactInfo = [
    { icon: Mail, text: "edu@samos.uz", href: "mailto:edu@samos.uz" },
    { icon: Phone, text: "+998 (90) 123-45-67", href: "tel:+998901234567" },
    { icon: MapPin, text: "Tashkent, Uzbekistan", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Samos</span>
                <span className="text-sm text-white/70 -mt-1">Education</span>
              </div>
            </Link>
            
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Empowering learners worldwide with high-quality, interactive education. 
              Transform your career with expert-led courses and industry-recognized certifications.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center text-sm text-white/70 hover:text-white transition-colors"
                >
                  <item.icon className="w-4 h-4 mr-3 text-accent" />
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-sm text-white/70">
                Get the latest courses, industry insights, and special offers delivered to your inbox.
              </p>
            </div>
            
            <div className="flex w-full lg:w-auto max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="bg-accent hover:bg-accent/90 px-6 py-2 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-sm text-white/60">
              © {currentYear} Samos Global Technologies Inc. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-accent/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;