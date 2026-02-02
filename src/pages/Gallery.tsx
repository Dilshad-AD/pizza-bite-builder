import { useState } from "react";
import pizzaHero from "@/assets/pizza-hero.png";
import burgerHero from "@/assets/burger-hero.png";
import sandwichHero from "@/assets/sandwich-hero.png";
import friesHero from "@/assets/fries-hero.png";
import coffeeHero from "@/assets/coffee-hero.png";
import heroBanner from "@/assets/hero-banner.jpeg";
import menuBoard from "@/assets/menu-board.jpeg";
import shopBanner from "@/assets/shop-banner.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: heroBanner, alt: "Pizza-E-Bites Banner", category: "Shop" },
    { src: menuBoard, alt: "Menu Board", category: "Menu" },
    { src: shopBanner, alt: "Shop Front", category: "Shop" },
    { src: pizzaHero, alt: "Delicious Pizza", category: "Pizza" },
    { src: burgerHero, alt: "Cheese Burger", category: "Burger" },
    { src: sandwichHero, alt: "Grilled Sandwich", category: "Sandwich" },
    { src: friesHero, alt: "French Fries", category: "Fries" },
    { src: coffeeHero, alt: "Cold Coffee", category: "Coffee" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-oswald font-bold mb-4">
            Our <span className="text-gradient-hero">Gallery</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a peek at our delicious creations and cozy shop!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="font-medium">{image.alt}</p>
                <span className="text-sm text-primary">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
              <img
                src={selectedImage}
                alt="Gallery Preview"
                className="w-full h-full object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:scale-110 transition-transform"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="mt-16 text-center bg-card border border-border rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-oswald font-bold mb-4">
            Follow Us on <span className="text-gradient-hero">Instagram</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Stay updated with our latest creations, offers, and behind-the-scenes moments!
          </p>
          <a
            href="https://instagram.com/pizzaebites"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @pizzaebites
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
