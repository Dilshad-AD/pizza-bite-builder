import { Star, Heart, Truck, Clock, Users, Award } from "lucide-react";
import pizzaHero from "@/assets/pizza-hero.png";
import deliveryScooter from "@/assets/delivery-scooter.png";

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "1000+", label: "Orders Delivered", icon: <Truck className="w-6 h-6" /> },
    { number: "5", label: "Menu Categories", icon: <Award className="w-6 h-6" /> },
    { number: "30", label: "Mins Delivery", icon: <Clock className="w-6 h-6" /> },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every dish is prepared with passion and care, just like homemade food.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Fresh Ingredients",
      description: "We use only the freshest, high-quality ingredients for authentic taste.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Quick Delivery",
      description: "Free delivery within 3km radius. Your food arrives hot and fresh!",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container-custom px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl font-oswald font-bold mb-6">
              About <span className="text-gradient-hero">Pizza-E-Bites</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Welcome to <span className="text-primary font-semibold">Pizza-E-Bites</span>! 
              We're your neighborhood's favorite destination for delicious pizzas, juicy burgers, 
              crispy sandwiches, refreshing cold coffee, and crispy french fries.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Located in the heart of <span className="text-secondary font-semibold">Gurugram Sector-22, Mullahera</span>, 
              we've been serving the community with fresh, flavorful, and 100% vegetarian food that 
              brings families and friends together.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-accent/20 border border-accent/50 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-accent font-medium">100% Vegetarian 🌿</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/20 border border-secondary/50 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-secondary font-medium">Just Started!</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <img 
              src={pizzaHero} 
              alt="Delicious Pizza" 
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl animate-float"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-lg flex items-center gap-3">
              <img src={deliveryScooter} alt="Delivery" className="w-12 h-12" />
              <div>
                <p className="font-semibold text-primary">Free Delivery</p>
                <p className="text-sm text-muted-foreground">Within 3km radius</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-oswald font-bold text-gradient-hero mb-2">
                {stat.number}
              </h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-oswald font-bold mb-4">
            Why Choose <span className="text-gradient-hero">Us?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to delivering the best food experience to our customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-oswald font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-oswald font-bold mb-6">
              Our <span className="text-gradient-hero">Story</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Pizza-E-Bites started with a simple dream - to bring delicious, affordable, and 
              hygienic food to our neighborhood. What began as a small corner shop has quickly 
              become a favorite spot for families, students, and food lovers alike.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our menu features freshly made pizzas starting at just ₹59, along with mouth-watering 
              burgers, sandwiches, crispy fries, and refreshing cold coffees. Every item is prepared 
              with fresh ingredients and served with love.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We believe in quality over quantity, and that's why every bite at Pizza-E-Bites 
              is an experience worth savoring. Come visit us or order online - we can't wait to 
              serve you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
