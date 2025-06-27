import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import oceaneLogo from "@assets/image4-removebg-preview_1750870939621.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "advantages", label: "Advantages" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <img src={oceaneLogo} alt="Oceane Center Logo" className="h-16 w-auto" />
            <div>
              <h1 className="text-2xl font-bold oceane-blue font-playfair">Premium Agricultural</h1>
              <p className="text-sm text-gray-600">Oceane Imports & Exports Center</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={() => {
                  if (item.id === "home") {
                    const el = document.getElementById("home");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-oceane-gold hover:bg-amber-600 text-white px-6 py-2"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className="text-left text-lg text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => {
                        if (item.id === "home") {
                          const el = document.getElementById("home");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                          setIsOpen(false);
                        } else {
                          scrollToSection(item.id);
                        }
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-oceane-gold hover:bg-amber-600 text-white w-full"
                  >
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
