import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Teenused", href: "#services" },
    { title: "Referentsid", href: "#references" },
    { title: "Kontakt", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold text-primary">
            Bestclean
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
              >
                {item.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;