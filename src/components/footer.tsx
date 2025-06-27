import { MapPin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import oceaneLogo from "@assets/image4-removebg-preview_1750870939621.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const products = [
    "Cassava Flour (Gari)",
    "Fresh Coconuts",
    "Charcoal",
    "Crude Palm Oil",
    "Raw Cashew Nuts",
    "Soybeans",
    "Raw Cocoa Beans"
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img src={oceaneLogo} alt="Oceane Center Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold font-playfair">Oceane Center</h3>
                <p className="text-gray-400">Premium Agricultural Imports & Exports</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting global markets with high-quality agricultural products from Benin through sustainable farming and reliable export services.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p><strong>RCCM:</strong> Cot N° RB/ABC/23 A 95630</p>
              <p><strong>IFU:</strong> 0202326060268</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-400">
              {products.map((product, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="hover:text-yellow-400 transition-colors text-left"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <MapPin className="text-yellow-400 mr-3 h-4 w-4" />
                <span>Abomey-Calavi, Cotonou, Benin</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-green-400 mr-3 h-4 w-4" />
                <span>+229 01 58 18 85 52</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-yellow-400 mr-3 h-4 w-4" />
                <span>supremeetfils@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Oceane Center. All rights reserved. Proudly exporting premium agricultural products from Benin to the world.</p>
        </div>
      </div>
    </footer>
  );
}
