import { useState, useCallback, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Leaf, Package, Calendar, Star, Flame, Sprout, Award, Shield } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  features: { icon: any; text: string; color: string }[];

}

const products: Product[] = [
  {
    id: 1,
    name: "Cassava Flour (Gari)",
    image: "https://cdn.businessday.ng/2021/05/Untitled-design-2021-05-20T113930.638-1.png",
    features: [
      { icon: Leaf, text: "Naturally dried, no additives", color: "text-green-500" },
      { icon: Package, text: "25 kg, 50 kg or custom bags", color: "text-amber-500" },
      { icon: Calendar, text: "Shelf life: 12 months", color: "text-blue-500" }
    ],
    
  },
  {
    id: 2,
    name: "Red Palm Oil",
    image: "https://images.theconversation.com/files/457424/original/file-20220411-6515-e90lih.png?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
    features: [
      { icon: Sprout, text: "Traditionally cold-pressed", color: "text-green-500" },
      { icon: Package, text: "25L drums / 200L barrels", color: "text-amber-500" },
      { icon: Calendar, text: "Shelf life: 12-18 months", color: "text-blue-500" }
    ],
    
  },
  {
    id: 3,
    name: "Charcoal",
    image: "https://www.agricultureaucameroun.net/wp-content/uploads/2018/03/fabrication-charbon-ecologique.jpg",
    features: [
      { icon: Flame, text: "Hardwood, long burning", color: "text-red-500" },
      { icon: Package, text: "25 kg, 50 kg or custom bags", color: "text-amber-500" },
      { icon: Award, text: "Premium quality", color: "text-blue-500" }
    ],
    
  },
  {
    id: 4,
    name: "Sorghum",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpu0Pn8CDCwbyDpsGF9TgrGQZ7NverzgtJjw&s",
    features: [
        { icon: Sprout, text: "Red and white varieties", color: "text-red-500" },
        { icon: Package, text: "25 kg, 50 kg or custom bags", color: "text-amber-500" },
        { icon: Shield, text: "Gluten-free", color: "text-green-500" }
    ]
  },
  {
    id: 5,
    name: "Shea Nuts",
    image: "https://coopares.com/wp-content/uploads/2019/12/karite.jpg",
    features: [
        { icon: Award, text: "High oil content", color: "text-amber-500" },
        { icon: Package, text: "25 kg, 50 kg or custom bags", color: "text-amber-500" },
        { icon: Leaf, text: "Wild harvested", color: "text-green-500" }
    ]
  },
  {
    id: 6,
    name: "cashew",
    image: "https://images.tcdn.com.br/img/img_prod/753894/muda_de_caju_vermelho_produzindo_altura_de_1_0_m_a_1_5_m_799_2_d1edd054b530b2a737480a33a09a7147.jpg",
    features: [
      { icon: Star, text: "cashews, noise & processed", color: "text-amber-500" },
      { icon: Package, text: "50 pieces or custom bags", color: "text-amber-500" },
      { icon: Calendar, text: "Shelf life: 6-12 months", color: "text-blue-500" }
    ]
  },
  {
    id: 7,
    name: "Ginger",
    image: "https://images.prismic.io/la-fourche/tout-savoir-sur-le-gingembre-bienfaits-et-utilisations.jpg?auto=compress,format&rect=0,0,1920,1080&w=1920&h=1080",
    features: [
        { icon: Flame, text: "Spicy and aromatic", color: "text-red-500" },
        { icon: Package, text: "25 kg, 50 kg or custom bags", color: "text-amber-500" },
        { icon: Star, text: "Fresh or dried", color: "text-blue-500" }
    ]
  },
  {
    id: 8,
    name: "Red Chili Pepper",
    image: "https://media.ouest-france.fr/v1/pictures/MjAxNzAxOTc0ODFiYmZhNGVlYTJiODZjNTcyZWRiOGI1Y2I3ZjQ?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=37fa580bde946cae4b7585508fefaa9d8f2b1abfe0d2e26009b0852d7777242c",
    features: [
        { icon: Flame, text: "Spicy and tasty", color: "text-red-500" },
        { icon: Package, text: "25 kg, 50 kg or custom bags", color: "text-amber-500" },
        { icon: Leaf, text: "Sun-dried", color: "text-green-500" }
    ]
  },
  {
    id: 9,
    name: "Soybeans",
    image: "https://www.vivafrik.com/wp-content/uploads/2018/09/Le-soja-une-culture-efficace-de-lutte-contre-pauvret%C3%A9-.jpg",
    features: [
      { icon: Shield, text: "Non-GMO, high protein", color: "text-green-500" },
      { icon: Package, text: "25 kg, 50 kg or custom bags", color: "text-amber-500" },
      { icon: Leaf, text: "Premium quality", color: "text-blue-500" }
    ]
  },
  {
    id: 10,
    name: "Cocoa Beans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKiTxB8TUSV9ifp0xDo1ECXFew1CnxjelOA&s",
    features: [
      { icon: Sprout, text: "Natural fermentation", color: "text-amber-600" },
      { icon: Package, text: "25 kg, 50 kg or custom bags", color: "text-amber-500" },
      { icon: Award, text: "Premium quality", color: "text-blue-500" }
    ]
  },
  {
    id: 11,
    name: "Arachide (Peanut)",
    image: "https://previews.123rf.com/images/wilaiwanphoto/wilaiwanphoto1606/wilaiwanphoto160600012/59949138-fresh-peanuts-plants-with-roots-peanut.jpg",
    features: [
      { icon: Leaf, text: "Rich in protein and natural oil", color: "text-green-500" },
      { icon: Package, text: "25 kg, 50 kg or custom bags", color: "text-amber-500" },
      { icon: Calendar, text: "Shelf life: up to 12 months", color: "text-blue-500" }
    ]
  },
  {
    id: 12,
    name: "Coconut Fiber (Coir)",
    image: "https://media.istockphoto.com/id/509754575/fr/photo/de-noix-de-coco-coir-%C3%A9pi.jpg?s=612x612&w=0&k=20&c=husLNxvrJgF4HZ4QoAEnijLQJSBhQUU_OmCobCw2OJE=",
    features: [
      { icon: Sprout, text: "Natural, biodegradable and durable fiber", color: "text-green-500" },
      { icon: Package, text: "Compressed bales or rolls", color: "text-amber-500" },
      { icon: Award, text: "Used for mulching, horticulture, ropes", color: "text-blue-500" }
    ]
  }
];

// Images sorted by product name (easily editable)


const productImages: Record<string, string[]> = {
  "Cassava Flour (Gari)": [
    "https://cdn.businessday.ng/2021/05/Untitled-design-2021-05-20T113930.638-1.png",
    "https://thumbs.dreamstime.com/b/sacs-de-farine-et-grain-dans-l-entrep%C3%B4t-sont-empil%C3%A9s-sur-des-palettes-les-que-usine-traite-trie-208718265.jpg",
    "https://lanation.bj/storage/assets/2023/12/un0EPuswKAUAQJKT_Capture_d'%C3%A9cran_2023-12-22_064508.png.webp"
  ],
  "Red Palm Oil": [
    "https://lanouvelletribune.info/wp-content/uploads/2020/02/palmier-huile.jpg",
    "https://images.theconversation.com/files/457424/original/file-20220411-6515-e90lih.png?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
    "https://www.algomtl.com/upload/1634936-uploaded-image1-158145044-tjqdp8.png",
    "https://kalenews.org/wp-content/uploads/2023/03/51EB198E-4666-4449-A561-8EB2B6FEBF35.jpeg"
  ],
  "Charcoal": [
    "https://www.agricultureaucameroun.net/wp-content/uploads/2018/03/fabrication-charbon-ecologique.jpg",
    "https://gdb.voanews.com/01000000-0aff-0242-054c-08dc47672bf3_cx0_cy9_cw0_w1080_h608_s.jpeg",
    "https://lautrefigaro.bj/wp-content/uploads/2025/01/image.jpeg"
  ],
  "Sorghum": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpu0Pn8CDCwbyDpsGF9TgrGQZ7NverzgtJjw&s",
    "https://pensezsauvage.org/local/cache-vignettes/L1024xH538/cd5167e719039dcc1815ea3b9e6fc4-579d0.jpg",
    "https://www.lesahel.org/wp-content/uploads/2024/12/S4EYNI-MOUSSA.jpg"
  ],
  "Shea Nuts": [
    "https://coopares.com/wp-content/uploads/2019/12/karite.jpg",
    "https://lelauriercreations.wordpress.com/wp-content/uploads/2016/09/noix-de-karitc3a9-e1453563159899.jpg?w=680",
    "https://www.boutique-nere.com/wp-content/uploads/2023/08/production-beurre-de-karite.jpg"
  ],
  "cashew": [
    "https://images.tcdn.com.br/img/img_prod/753894/muda_de_caju_vermelho_produzindo_altura_de_1_0_m_a_1_5_m_799_2_d1edd054b530b2a737480a33a09a7147.jpg",
    "https://www.snrd-africa.net/wp-content/uploads/2019/03/fullsizeoutput_404-e1552474345144-800x450.jpeg",
    "https://agridigitale.com/storage/uploads/NOIX%20CAJOU%20TRANSFORME%20TOGO.jpg",
    "https://www.cashewmachine.ci/wp-content/uploads/2019/02/liste-des-exportateurs-de-noix-de-cajou-brutes-agrees-au-titre-de-la-campagne-2019-1200x900.jpg"
  ],
  "Ginger": [
    "https://images.prismic.io/la-fourche/tout-savoir-sur-le-gingembre-bienfaits-et-utilisations.jpg?auto=compress,format&rect=0,0,1920,1080&w=1920&h=1080",
    "https://i-dj.unimedias.fr/2024/02/16/rhizome-gingembre_as.jpeg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=max&w=1050",
    "https://image.made-in-china.com/202f0j00HYrUPqbyVDgf/Supply-Good-Quality-Mesh-Bag-Packing-Ginger.webp"
  ],
  "Red Chili Pepper": [
    "https://media.ouest-france.fr/v1/pictures/MjAxNzAxOTc0ODFiYmZhNGVlYTJiODZjNTcyZWRiOGI1Y2I3ZjQ?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=37fa580bde946cae4b7585508fefaa9d8f2b1abfe0d2e26009b0852d7777242c",
    "https://thumbs.dreamstime.com/b/poivre-de-piment-rouge-dans-la-ferme-106042667.jpg",
    "https://us.123rf.com/450wm/chontocha/chontocha1910/chontocha191000067/131661138-groupe-de-red-hot-chili-pepper-%C3%A0-fond-noir.jpg?ver=6"
  ],
  "Soybeans": [
    "https://images.ctfassets.net/ra41rfif8mpw/zk3Xd92qmuvYwnXmvPzDa/41ae4001df20f0794a0450e41f7e6526/nh-soja-mythen-im-faktencheck-2160x1215.jpg?fm=jpg&fit=scale&r=0&q=75&w=1920",
    "https://www.vivafrik.com/wp-content/uploads/2018/09/Le-soja-une-culture-efficace-de-lutte-contre-pauvret%C3%A9-.jpg",
    "https://img.freepik.com/photos-premium/sac-jute-du-soja-fond-soja-gros-plan_571379-4035.jpg"
  ],
  "Cocoa Beans": [
    "https://shouka-chamonix.fr/wp-content/uploads/2021/01/Cabosses-scaled.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKiTxB8TUSV9ifp0xDo1ECXFew1CnxjelOA&s",
    "https://www.sagaphoto.com/bassedefWM/PF002454.jpg"
  ],
  "Arachide (Peanut)": [
    "https://previews.123rf.com/images/wilaiwanphoto/wilaiwanphoto1606/wilaiwanphoto160600012/59949138-fresh-peanuts-plants-with-roots-peanut.jpg",
    "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/79de/live/2e3cff10-280d-11ef-baa7-25d483663b8e.jpg.webp",
    "https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2016/07/20/dsc_0359n.jpg",
    "https://media.dailythanthi.com/h-upload/2022/12/04/1019589-12.webp",
    "https://www.studiotamani.org/wp-content/uploads/2024/12/PHOTO-BAFOULABE-3.jpg"
  ],
  "Coconut Fiber (Coir)": [
    "https://media.istockphoto.com/id/509754575/fr/photo/de-noix-de-coco-coir-%C3%A9pi.jpg?s=612x612&w=0&k=20&c=husLNxvrJgF4HZ4QoAEnijLQJSBhQUU_OmCobCw2OJE=",
    "https://i.etsystatic.com/23741052/r/il/cc7ae4/3026193441/il_794xN.3026193441_7xua.jpg",
    "https://media.istockphoto.com/id/2155482150/fr/photo/coconut-coir-rope-making-with-traditional-process.jpg?s=612x612&w=0&k=20&c=gOM7xJ5aPBvso4nE2f2zMHAuSNOt0QmNIN4zlBHIj-U=",
    "https://www.ceyloncoirfibre.com/img/coirfibrebale/CoirBaleFibre-02.jpg"
    
    
  ]
};

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false });
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!emblaApi || !modalOpen) return;
    const onSelect = () => {};
    emblaApi.on('select', onSelect);
    onSelect();
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, modalOpen]);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  // Fonctions pour les flèches
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold oceane-blue font-playfair mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality agricultural products from Benin, carefully processed and packaged for the world market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCardClick(product)}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="oceane-blue">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <feature.icon className={`${feature.color} mr-2 h-4 w-4`} />
                      {feature.text}
                    </div>
                  ))}
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal with image carousel and arrows */}
        <Dialog open={modalOpen} onOpenChange={handleClose}>
          <DialogContent className="max-w-2xl">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProduct.name}</DialogTitle>
                </DialogHeader>
                <div className="mb-4 relative">
                  <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="flex" style={{ transition: 'transform 0.3s', willChange: 'transform' }}>
                      {(productImages[selectedProduct.name] || []).map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={selectedProduct.name + " image " + (idx + 1)}
                          className="w-full h-64 object-cover flex-shrink-0"
                          style={{ minWidth: '100%' }}
                        />
                      ))}
                    </div>
                    {/* Navigation arrows */}
                    <button
                      onClick={scrollPrev}
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition z-10"
                      style={{ outline: 'none', border: 'none' }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                      onClick={scrollNext}
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition z-10"
                      style={{ outline: 'none', border: 'none' }}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <feature.icon className={`${feature.color} mr-2 h-4 w-4`} />
                      {feature.text}
                    </div>
                  ))}
                </div>
                
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
