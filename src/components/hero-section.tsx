import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Sprout, Phone } from "lucide-react";

const carouselImages = [
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=50', // champ de blé
  'https://www.vivafrik.com/wp-content/uploads/2018/09/Le-soja-une-culture-efficace-de-lutte-contre-pauvret%C3%A9-.jpg', // agriculteur
  'https://media.ouest-france.fr/v1/pictures/MjAxNzAxOTc0ODFiYmZhNGVlYTJiODZjNTcyZWRiOGI1Y2I3ZjQ?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=37fa580bde946cae4b7585508fefaa9d8f2b1abfe0d2e26009b0852d7777242c',
  'https://centifoliabio.fr/img/ybc_blog/post/thumb/cacao-plante.jpg',
  'https://img.freepik.com/vecteurs-premium/noix-karite-aux-feuilles-vertes-noix-karite-brune-noix-foetus-biologiques-karite_1284-51454.jpg',
  // plantation
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    // Autoplay
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Carrousel d'images en arrière-plan */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {carouselImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ minWidth: '100%' }}
              loading="lazy"
            />
          ))}
        </div>
        {/* Dots navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${activeIndex === idx ? 'bg-yellow-400' : 'bg-white bg-opacity-60'}`}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      </div>
      {/* Contenu par-dessus */}
      <div className="relative z-20 text-center text-white px-4">
        <h2 className="text-5xl md:text-7xl font-bold font-playfair mb-6 drop-shadow-lg animate-fade-in">
          Premium Agricultural Imports & Exports from{" "} <span className="text-yellow-400">Benin</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed animate-fade-in delay-200">
          Connecting global markets with high-quality agricultural products through sustainable farming and reliable export services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("products")}
            className="bg-oceane-gold hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold shadow-lg animate-fade-in delay-300"
            size="lg"
          >
            <Sprout className="mr-2 h-5 w-5" />
            Découvrir nos produits
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600 shadow-lg animate-fade-in delay-300"
            size="lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Get Quote
          </Button>
        </div>
      </div>
      <style>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .animate-fade-in.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in.delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
