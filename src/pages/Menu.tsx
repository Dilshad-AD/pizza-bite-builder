import { useState } from "react";
import pizzaHero from "@/assets/pizza-hero.png";
import burgerHero from "@/assets/burger-hero.png";
import sandwichHero from "@/assets/sandwich-hero.png";
import friesHero from "@/assets/fries-hero.png";
import coffeeHero from "@/assets/coffee-hero.png";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items" },
    { id: "pizza", name: "Pizza" },
    { id: "burger", name: "Burger" },
    { id: "sandwich", name: "Sandwich" },
    { id: "fries", name: "Fries" },
    { id: "coldcoffee", name: "Cold Coffee" },
  ];

  const menuItems = [
    // Pizzas
    { id: 1, name: "Onion Pizza", category: "pizza", small: 59, medium: 119, large: 199, image: pizzaHero },
    { id: 2, name: "Onion Tomato Pizza", category: "pizza", small: 59, medium: 119, large: 199, image: pizzaHero },
    { id: 3, name: "Onion Capsicum Pizza", category: "pizza", small: 59, medium: 119, large: 199, image: pizzaHero },
    { id: 4, name: "Sweet Corn Onion Pizza", category: "pizza", small: 69, medium: 129, large: 219, image: pizzaHero },
    { id: 5, name: "Chilli Capsicum Onion Pizza", category: "pizza", small: 69, medium: 129, large: 219, image: pizzaHero },
    { id: 6, name: "Mix Vegee Pizza", category: "pizza", small: 89, medium: 149, large: 219, image: pizzaHero },
    { id: 7, name: "Paneer Pizza", category: "pizza", small: 99, medium: 159, large: 219, image: pizzaHero },
    // Burgers
    { id: 8, name: "Veg Burger", category: "burger", price: 40, image: burgerHero },
    { id: 9, name: "Cheese Burger", category: "burger", price: 50, image: burgerHero },
    { id: 10, name: "Cheese Paneer Burger", category: "burger", price: 60, image: burgerHero },
    // Sandwiches
    { id: 11, name: "Veg Sandwich", category: "sandwich", price: 40, image: sandwichHero },
    { id: 12, name: "Cheese Sandwich", category: "sandwich", price: 50, image: sandwichHero },
    { id: 13, name: "Paneer Cheese Sandwich", category: "sandwich", price: 60, image: sandwichHero },
    // Fries
    { id: 14, name: "French Fries", category: "fries", price: 40, image: friesHero },
    { id: 15, name: "Peri Peri Fries", category: "fries", price: 60, image: friesHero },
    // Cold Coffee
    { id: 16, name: "Cold Coffee", category: "coldcoffee", price: 50, image: coffeeHero },
    { id: 17, name: "Chocolate Cold Coffee", category: "coldcoffee", price: 60, image: coffeeHero },
    { id: 18, name: "Hazelnut Cold Coffee", category: "coldcoffee", price: 80, image: coffeeHero },
    { id: 19, name: "Caramel Cold Coffee", category: "coldcoffee", price: 80, image: coffeeHero },
    { id: 20, name: "Vanilla Cold Coffee", category: "coldcoffee", price: 60, image: coffeeHero },
    { id: 21, name: "Strong Cold Coffee", category: "coldcoffee", price: 60, image: coffeeHero },
    { id: 22, name: "Thick Spl. Cold Coffee", category: "coldcoffee", price: 80, image: coffeeHero },
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const generateWhatsAppMessage = (item: typeof menuItems[0]) => {
    const message = `Hi! I want to order ${item.name}`;
    return `https://wa.me/918800027263?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-oswald font-bold mb-4">
            Our <span className="text-gradient-hero">Menu</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fresh ingredients, authentic taste, and love in every bite!
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-accent/20 border border-accent/50 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent font-medium">100% Vegetarian 🌿</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Pizza Items with Size Pricing */}
        {(activeCategory === "all" || activeCategory === "pizza") && (
          <div className="mb-16">
            <h2 className="text-3xl font-oswald font-bold mb-6 text-center">
              🍕 <span className="text-primary">Pizza</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-2xl overflow-hidden border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="py-4 px-4 text-left font-oswald text-lg">Item</th>
                    <th className="py-4 px-4 text-center font-oswald text-lg">Small</th>
                    <th className="py-4 px-4 text-center font-oswald text-lg">Medium</th>
                    <th className="py-4 px-4 text-center font-oswald text-lg">Large</th>
                    <th className="py-4 px-4 text-center font-oswald text-lg">Order</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems.filter(item => item.category === "pizza").map((item, index) => (
                    <tr 
                      key={item.id} 
                      className="border-t border-border hover:bg-muted/50 transition-colors animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <td className="py-4 px-4 flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                        <span className="font-medium">{item.name}</span>
                      </td>
                      <td className="py-4 px-4 text-center text-primary font-bold">₹{item.small}/-</td>
                      <td className="py-4 px-4 text-center text-primary font-bold">₹{item.medium}/-</td>
                      <td className="py-4 px-4 text-center text-primary font-bold">₹{item.large}/-</td>
                      <td className="py-4 px-4 text-center">
                        <a
                          href={generateWhatsAppMessage(item)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Order
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Other Menu Items (Grid Layout) */}
        {activeCategory !== "pizza" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.filter(item => item.category !== "pizza").map((item, index) => (
              <div
                key={item.id}
                className="card-food group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
                    ₹{item.price}/-
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-oswald font-bold text-xl mb-3">{item.name}</h3>
                  <a
                    href={generateWhatsAppMessage(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-whatsapp inline-flex items-center justify-center gap-2 text-sm"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Burgers, Sandwiches, Fries, Cold Coffee Sections for "All" view */}
        {activeCategory === "all" && (
          <>
            {/* Burgers */}
            <div className="mb-16">
              <h2 className="text-3xl font-oswald font-bold mb-6 text-center">
                🍔 <span className="text-secondary">Burger</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.filter(item => item.category === "burger").map((item, index) => (
                  <div key={item.id} className="card-food group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="aspect-square overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">₹{item.price}/-</div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-oswald font-bold text-xl mb-3">{item.name}</h3>
                      <a href={generateWhatsAppMessage(item)} target="_blank" rel="noopener noreferrer" className="w-full btn-whatsapp inline-flex items-center justify-center gap-2 text-sm">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Order
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sandwiches */}
            <div className="mb-16">
              <h2 className="text-3xl font-oswald font-bold mb-6 text-center">
                🥪 <span className="text-accent">Sandwich</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.filter(item => item.category === "sandwich").map((item, index) => (
                  <div key={item.id} className="card-food group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="aspect-square overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">₹{item.price}/-</div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-oswald font-bold text-xl mb-3">{item.name}</h3>
                      <a href={generateWhatsAppMessage(item)} target="_blank" rel="noopener noreferrer" className="w-full btn-whatsapp inline-flex items-center justify-center gap-2 text-sm">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Order
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fries */}
            <div className="mb-16">
              <h2 className="text-3xl font-oswald font-bold mb-6 text-center">
                🍟 <span className="text-primary">French Fries</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {menuItems.filter(item => item.category === "fries").map((item, index) => (
                  <div key={item.id} className="card-food group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="aspect-square overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">₹{item.price}/-</div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-oswald font-bold text-xl mb-3">{item.name}</h3>
                      <a href={generateWhatsAppMessage(item)} target="_blank" rel="noopener noreferrer" className="w-full btn-whatsapp inline-flex items-center justify-center gap-2 text-sm">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Order
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cold Coffee */}
            <div className="mb-16">
              <h2 className="text-3xl font-oswald font-bold mb-6 text-center">
                ☕ <span className="text-secondary">Cold Coffee</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {menuItems.filter(item => item.category === "coldcoffee").map((item, index) => (
                  <div key={item.id} className="card-food group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="aspect-square overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">₹{item.price}/-</div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-oswald font-bold text-xl mb-3">{item.name}</h3>
                      <a href={generateWhatsAppMessage(item)} target="_blank" rel="noopener noreferrer" className="w-full btn-whatsapp inline-flex items-center justify-center gap-2 text-sm">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Order
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
