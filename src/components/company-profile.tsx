import { MapPin, Globe, UserCheck } from "lucide-react";
import oceaneLogo from "@assets/image4-removebg-preview_1750870939621.png";

export default function CompanyProfile() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold oceane-blue font-playfair mb-4">
            Company Profile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in Abomey-Calavi, Cotonou, Benin, we specialize in the production and export of premium agricultural products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold oceane-blue mb-3 flex items-center">
                <MapPin className="text-yellow-500 mr-3 h-5 w-5" />
                Location & Registration
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Location:</strong> Abomey-Calavi, Cotonou, Benin</p>
                <p><strong>RCCM:</strong> Cot N° RB/ABC/23 A 95630</p>
                <p><strong>IFU:</strong> 0202326060268</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Globe className="text-yellow-400 mr-3 h-5 w-5" />
                Our Specialty
              </h3>
              <p className="text-gray-100">
                Production and Export of Agricultural Products from Benin with focus on quality, sustainability, and reliable international partnerships.
              </p>
            </div>

            <div className="bg-oceane-gold p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <UserCheck className="text-white mr-3 h-5 w-5" />
                Leadership
              </h3>
              <p><strong>Founder:</strong> Thierry ADJIVEHOU</p>
              <p className="text-gray-100 mt-2">Leading with expertise in agricultural export procedures and international trade</p>
            </div>
          </div>

          <div className="flex items-center justify-center h-full">
            <img 
              src={oceaneLogo}
              alt="Oceane Center Logo"
              className="rounded-xl shadow-lg w-full max-w-md object-contain h-full bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
