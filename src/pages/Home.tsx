import { Link } from "react-router-dom";
import { Phone, MapPin, ArrowRight, Star, Truck, Clock } from "lucide-react";
import pizzaHero from "@/assets/pizza-hero.png";
import burgerHero from "@/assets/burger-hero.png";
import sandwichHero from "@/assets/sandwich-hero.png";
import friesHero from "@/assets/fries-hero.png";
import coffeeHero from "@/assets/coffee-hero.png";
import deliveryScooter from "@/assets/delivery-scooter.png";

const Home = () => {
  const categories = [
    { name: "Pizza", image: pizzaHero, startingPrice: "₹59" },
    { name: "Burger", image: burgerHero, startingPrice: "₹40" },
    { name: "Sandwich", image: sandwichHero, startingPrice: "₹40" },
    { name: "Cold Coffee", image: coffeeHero, startingPrice: "₹50" },
    { name: "French Fries", image: friesHero, startingPrice: "₹40" },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Delivery",
      description: "Within 3km radius",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Service",
      description: "30 mins delivery",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Fresh & Tasty",
      description: "Made with love",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
        {/* Background */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full filter blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full filter blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent rounded-full filter blur-[80px]" />
          </div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/50 rounded-full px-4 py-2 text-secondary">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium">Just Started - Special Offers!</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-oswald font-bold leading-tight">
                <span className="text-primary">PIZZA</span>
                <span className="text-secondary">-E-</span>
                <span className="text-accent">BITES</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground">
                Delicious <span className="text-primary">Pizza</span>, 
                <span className="text-secondary"> Burger</span>, 
                <span className="text-accent"> Sandwich</span>, Cold Coffee & Fries
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/menu" className="btn-primary-gradient inline-flex items-center justify-center gap-2">
                  <span>View Menu</span>
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="https://wa.me/918800027263?text=Hi! I want to place an order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm">
                  <Phone size={18} className="text-secondary" />
                  <a href="tel:8800027263" className="hover:text-primary transition-colors font-semibold">
                    8800027263
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={18} className="text-secondary" />
                  <span className="text-muted-foreground">Gurugram Sec-22</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                <img
                  src={pizzaHero}
                  alt="Delicious Pizza"
                  className="w-full max-w-lg mx-auto animate-float drop-shadow-2xl"
                />
                {/* Price Tag */}
                <div className="absolute top-0 right-0 md:right-10 bg-secondary text-secondary-foreground rounded-full w-24 h-24 flex flex-col items-center justify-center animate-bounce-slow shadow-lg">
                  <span className="text-sm">Starting</span>
                  <span className="text-2xl font-bold">₹59</span>
                </div>
                {/* Delivery Badge */}
                <div className="absolute bottom-10 left-0 bg-card border border-border rounded-xl p-4 shadow-lg flex items-center gap-3 animate-slide-up">
                  <img src={deliveryScooter} alt="Delivery" className="w-12 h-12" />
                  <div>
                    <p className="text-sm font-medium text-primary">Free Delivery</p>
                    <p className="text-xs text-muted-foreground">Within 3km • Min ₹199</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-background/50 border border-border hover:border-primary transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-oswald font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4">
              Our <span className="text-gradient-hero">Menu</span> Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our delicious range of pizzas, burgers, sandwiches, and more!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to="/menu"
                className="card-food group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-oswald font-bold text-lg">{category.name}</h3>
                  <p className="text-primary font-semibold">From {category.startingPrice}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary-gradient inline-flex items-center gap-2">
              <span>View Full Menu</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-[100px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6">
              Hungry? <span className="text-gradient-hero">Order Now!</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Call us directly or order via WhatsApp for quick delivery to your doorstep!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8800027263" className="btn-call inline-flex items-center justify-center gap-2 text-lg">
                <Phone size={24} />
                <span>8800027263</span>
              </a>
              <a
                href="https://wa.me/918800027263?text=Hi! I want to place an order"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-2 text-lg"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4">
              Find <span className="text-gradient-hero">Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Visit our shop or get directions on Google Maps
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="text-xl font-oswald font-bold text-primary mb-4">📍 Our Location</h3>
                <p className="text-muted-foreground mb-4">
                  Near Sanjeevni Clinic, Mullahera, Sector 22, Gurugram, Haryana 122015
                </p>
                <a
                  href="https://maps.app.goo.gl/hE5NLW6q7wXdvVy18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gradient inline-flex items-center gap-2"
                >
                  <MapPin size={18} />
                  <span>Get Directions</span>
                </a>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="text-xl font-oswald font-bold text-primary mb-4">🕒 Opening Hours</h3>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Daily:</span> 11:00 AM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9975893!2d77.0391!3d28.4611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ed00000001%3A0x0!2sMullahera%2C%20Sector%2022%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pizza-E-Bites Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
