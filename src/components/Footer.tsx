import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Instagram, Clock, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Order Now", path: "/order" },
  ];

  const menuItems = [
    "Pizza",
    "Burger",
    "Sandwich",
    "Cold Coffee",
    "French Fries",
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-oswald font-bold">
                <span className="text-primary">PIZZA</span>
                <span className="text-secondary">-E-</span>
                <span className="text-accent">BITES</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Serving delicious pizza, burgers, sandwiches, and more since 2024. 
              Experience the taste that brings you back for more!
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/pizzaebites"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-secondary transition-colors group"
              >
                <Instagram size={20} className="group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a
                href="mailto:pizzaebites@gmail.com"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Mail size={20} className="group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://wa.me/918800027263"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current group-hover:text-accent-foreground transition-colors">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-oswald font-bold text-primary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="text-xl font-oswald font-bold text-primary mb-6">Our Menu</h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item}>
                  <Link
                    to="/menu"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-oswald font-bold text-primary mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:8800027263" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <span>8800027263</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/hE5NLW6q7wXdvVy18" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Near Sanjeevni Clinic, Mullahera, Sector 22, Gurugram, Haryana 122015</span>
                </a>
              </li>
              <li>
                <a href="mailto:pizzaebites@gmail.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <span>pizzaebites@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock size={20} className="text-secondary mt-1 flex-shrink-0" />
                <span>Open Daily: 11:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background/50">
        <div className="container-custom py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 Pizza-E-Bites. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-secondary animate-pulse" /> for food lovers
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a
          href="tel:8800027263"
          className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
          title="Call Now"
        >
          <Phone size={24} className="text-secondary-foreground" />
        </a>
        <a
          href="https://wa.me/918800027263?text=Hi! I want to place an order"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          style={{ boxShadow: "0 0 20px hsl(120, 70%, 40%, 0.5)" }}
          title="WhatsApp Order"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-accent-foreground">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
