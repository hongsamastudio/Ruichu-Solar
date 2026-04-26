import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    title: "Solar Panels",
    subtitle: "Chinese Engineering Excellence",
    description: "Our monocrystalline solar panels are sourced from top-tier Chinese manufacturers, ensuring the highest conversion rates and durability. Specifically chosen for Rwanda's varying light conditions, these panels offer peak performance from dawn until dusk.",
    features: [
      "Up to 22.5% efficiency rating",
      "Anti-reflective self-cleaning glass",
      "25-year linear power warranty",
      "High wind and snow load resistance"
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Portable Power Stations",
    subtitle: "Power on the Move",
    description: "Versatile, high-capacity mobile power supplies for outdoor, home backup, and emergency use. Includes portable, handbag and sleeve models. These stations provide clean, silent power wherever you need it, from camping trips to critical home backup during outages.",
    features: [
      "High-capacity LiFePO4 batteries",
      "Multiple output ports (AC, USB, DC)",
      "Portable, handbag & sleeve designs",
      "Solar charging compatible"
    ],
    image: "https://placehold.co/800x600/1A472A/FFFFFF?text=Portable+Power+Station"
  },
  {
    title: "Energy Storage Systems",
    subtitle: "Energy Independence",
    description: "Comprehensive residential and commercial stacked battery solutions integrated with EU/US standard inverters for maximum energy independence. Our high-voltage systems ensure seamless transition to battery power with minimal efficiency loss.",
    features: [
      "Stacked modular design",
      "Integrated EU/US standard inverters",
      "Intelligent peak-shaving logic",
      "Comprehensive cloud monitoring"
    ],
    image: "https://placehold.co/800x600/1A472A/FFFFFF?text=Energy+Storage+System"
  }
];

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Our Product Catalog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/80 max-w-2xl mx-auto"
        >
          World-class solar hardware directly imported and supported in Rwanda.
        </motion.p>
      </section>

      {/* Product Sections */}
      <div className="py-20 flex flex-col gap-32">
        {PRODUCTS.map((product, index) => (
          <section key={index} className="max-w-7xl mx-auto px-6">
            <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
              {/* Image */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="w-full md:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <div className="space-y-2">
                  <p className="text-primary font-bold uppercase tracking-widest text-sm">{product.subtitle}</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{product.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-[#f0fdf4] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Ready to Power Your Future? Let's Talk.
          </h2>
          <p className="text-lg text-gray-600">
            Face-to-face meetings with our local staff in Kigali are always available. Book now to discuss your specific energy needs.
          </p>
          <div className="flex justify-center pt-4">
            <Link to="/contact#inquiry-form" className="bg-primary text-white px-10 py-4 rounded-sm font-bold text-base hover:bg-opacity-95 transition-all shadow-lg">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
