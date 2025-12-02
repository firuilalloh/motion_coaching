import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo! Saya ingin informasi lebih lanjut tentang MOTION Coaching."
    );
    window.open(`https://wa.me/6285875000806?text=${message}`, "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1B263B] shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          <span className="text-white">MOTION</span>
          <span className="text-[#F5C542] ml-1">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["about", "framework", "programs", "tools", "blog"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white hover:text-[#F5C542] transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          <Button
            onClick={handleWhatsAppClick}
            className="bg-[#F5C542] hover:bg-[#f5d976] text-[#1B263B] rounded-full px-6 py-2 font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1B263B] mx-4 mt-3 rounded-2xl shadow-xl overflow-hidden animate-fade">
          <nav className="flex flex-col p-4 space-y-2">
            {["about", "framework", "programs", "tools", "blog"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white text-left px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#F5C542] hover:bg-[#f5d976] text-[#1B263B] rounded-full px-6 py-3 font-semibold w-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;