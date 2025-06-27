import { ShieldCheck, MapPin, PackageSearch, Award, Truck, Factory, Handshake, Settings, Clock } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Certification & Quality",
    description:
      "Our products are sourced from certified organic or transitional supply chains, ensuring compliance with international standards for sustainable agriculture. Each batch is traceable and comes with all necessary export compliance documents."
  },
  {
    icon: MapPin,
    title: "Origin & Traceability",
    description:
      "Our farms and partners are located in Benin, in regions renowned for the quality of their agricultural production. This strategic location facilitates logistics and rapid export to international markets."
  },
  {
    icon: PackageSearch,
    title: "Supply Capacity & Flexible Pricing",
    description:
      "We guarantee a monthly supply capacity tailored to your needs, with consistent volumes and competitive prices. Our rates are available both ex warehouse and FOB Cotonou port, ensuring full transparency and adaptation to your logistics requirements."
  }
];

const advantages = [
  {
    icon: Award,
    title: "High-Quality Products",
    description: "Premium agricultural products with strict quality control and natural processing methods.",
    gradient: "from-blue-600 to-teal-600"
  },
  {
    icon: Truck,
    title: "Export Expertise",
    description: "Complete mastery of export procedures, flexible incoterms (FOB, CIF), and fast delivery times.",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Factory,
    title: "Large Capacity",
    description: "Ability to deliver in large quantities with reliable supply chains and regular production schedules.",
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    icon: Handshake,
    title: "Reliable Partnerships",
    description: "Commitment to sustainable and reliable international partnerships with transparent communication.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Settings,
    title: "Flexible Terms",
    description: "Adaptable packaging options and incoterms to meet specific client requirements.",
    gradient: "from-purple-500 to-violet-600"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient logistics and processing systems ensuring fast delivery times for international orders.",
    gradient: "from-red-500 to-pink-600"
  }
];

export default function GuaranteesAdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold oceane-blue font-playfair mb-4">
            Our Guarantees & Advantages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparency, quality, reliability, and performance at every stage of your supply chain
          </p>
        </div>
        {/* Guarantees sub-grid */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold oceane-blue mb-8 text-center">Our Guarantees</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((g, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-xl shadow-lg p-8 text-center flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <g.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold oceane-blue mb-3">{g.title}</h4>
                <p className="text-gray-600 text-base">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Advantages sub-grid */}
        <div>
          <h3 className="text-2xl font-semibold oceane-blue mb-8 text-center">Our Advantages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="text-center group">
                <div className={`bg-gradient-to-br ${adv.gradient} text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <adv.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold oceane-blue mb-3">{adv.title}</h4>
                <p className="text-gray-600">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
