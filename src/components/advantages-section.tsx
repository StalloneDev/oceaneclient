import { Award, Truck, Factory, Handshake, Settings, Clock } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "High-Quality Products",
    description: "Premium grade agricultural products with strict quality control and natural processing methods.",
    gradient: "from-blue-600 to-teal-600"
  },
  {
    icon: Truck,
    title: "Export Expertise",
    description: "Complete mastery of export procedures with flexible incoterms (FOB, CIF) and fast delivery times.",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Factory,
    title: "Large Capacity",
    description: "Ability to deliver in large quantities with consistent supply chains and reliable production schedules.",
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    icon: Handshake,
    title: "Reliable Partnerships",
    description: "Committed to sustainable and reliable international partnerships with transparent communication.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Settings,
    title: "Flexible Terms",
    description: "Adaptable packaging options and flexible incoterms to meet specific client requirements.",
    gradient: "from-purple-500 to-violet-600"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient logistics and processing systems ensuring fast delivery times for international orders.",
    gradient: "from-red-500 to-pink-600"
  }
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold oceane-blue font-playfair mb-4">
            Why Choose Oceane Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our competitive advantages ensure reliable partnerships and premium quality for international markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className={`bg-gradient-to-br ${advantage.gradient} text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <advantage.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold oceane-blue mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
