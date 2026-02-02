import { useState } from "react";
import { Phone, MapPin, Check, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import pizzaHero from "@/assets/pizza-hero.png";
import burgerHero from "@/assets/burger-hero.png";
import sandwichHero from "@/assets/sandwich-hero.png";
import friesHero from "@/assets/fries-hero.png";
import coffeeHero from "@/assets/coffee-hero.png";

const Order = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<{id: number; name: string; price: number; quantity: number; size?: string}[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const menuItems = [
    // Pizzas
    { id: 1, name: "Onion Pizza (Small)", category: "pizza", price: 59, image: pizzaHero },
    { id: 2, name: "Onion Pizza (Medium)", category: "pizza", price: 119, image: pizzaHero },
    { id: 3, name: "Onion Pizza (Large)", category: "pizza", price: 199, image: pizzaHero },
    { id: 4, name: "Mix Vegee Pizza (Small)", category: "pizza", price: 89, image: pizzaHero },
    { id: 5, name: "Paneer Pizza (Medium)", category: "pizza", price: 159, image: pizzaHero },
    // Burgers
    { id: 6, name: "Veg Burger", category: "burger", price: 40, image: burgerHero },
    { id: 7, name: "Cheese Burger", category: "burger", price: 50, image: burgerHero },
    { id: 8, name: "Cheese Paneer Burger", category: "burger", price: 60, image: burgerHero },
    // Sandwiches
    { id: 9, name: "Veg Sandwich", category: "sandwich", price: 40, image: sandwichHero },
    { id: 10, name: "Cheese Sandwich", category: "sandwich", price: 50, image: sandwichHero },
    // Fries
    { id: 11, name: "French Fries", category: "fries", price: 40, image: friesHero },
    { id: 12, name: "Peri Peri Fries", category: "fries", price: 60, image: friesHero },
    // Coffee
    { id: 13, name: "Cold Coffee", category: "coffee", price: 50, image: coffeeHero },
    { id: 14, name: "Chocolate Cold Coffee", category: "coffee", price: 60, image: coffeeHero },
  ];

  const addToCart = (item: typeof menuItems[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
    toast({
      title: "Added to Cart! 🛒",
      description: `${item.name} added to your order`,
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = i.quantity + delta;
        return newQty > 0 ? {...i, quantity: newQty} : i;
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      toast({
        title: "Cart Empty!",
        description: "Please add items to your cart first",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const orderDetails = cart.map(item => `${item.name} x${item.quantity} = ₹${item.price * item.quantity}`).join('\n');
    const message = `🍕 *New Order from Pizza-E-Bites Website*\n\n*Customer Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n${formData.notes ? `Notes: ${formData.notes}` : ''}\n\n*Order Details:*\n${orderDetails}\n\n*Total: ₹${total}*`;
    
    const whatsappUrl = `https://wa.me/918800027263?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and cart
    setCart([]);
    setFormData({ name: "", phone: "", address: "", notes: "" });
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-oswald font-bold mb-4">
            Order <span className="text-gradient-hero">Online</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your items and place your order via WhatsApp!
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-accent/20 border border-accent/50 rounded-full px-4 py-2">
              <Check size={16} className="text-accent" />
              <span className="text-accent font-medium">Free Delivery within 3km</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2">
              <span className="text-primary font-medium">Min Order: ₹199</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-oswald font-bold mb-6">Select Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menuItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 hover:border-primary transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-primary font-bold">₹{item.price}</p>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart & Order Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Cart */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-xl font-oswald font-bold mb-4 flex items-center gap-2">
                  <ShoppingCart size={20} className="text-primary" />
                  Your Cart
                </h2>

                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-primary text-sm">₹{item.price} × {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-primary">₹{total}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Form */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-xl font-oswald font-bold mb-4">Delivery Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary outline-none transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Delivery Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Complete delivery address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Special Notes</label>
                    <input
                      type="text"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary outline-none transition-colors"
                      placeholder="Any special instructions"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-whatsapp flex items-center justify-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Place Order via WhatsApp
                  </button>
                </form>
              </div>

              {/* Quick Call */}
              <a
                href="tel:8800027263"
                className="block w-full btn-call text-center"
              >
                <Phone size={18} className="inline mr-2" />
                Or Call: 8800027263
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
