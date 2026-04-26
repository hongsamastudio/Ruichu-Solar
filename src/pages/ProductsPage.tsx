import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ProductsPage() {
  const { t } = useTranslation();

  const PRODUCTS = [
    {
      title: t('products_page.catalog.solar_panels.title'),
      subtitle: t('products_page.catalog.solar_panels.subtitle'),
      description: t('products_page.catalog.solar_panels.description'),
      features: t('products_page.catalog.solar_panels.features', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: t('products_page.catalog.portable_power.title'),
      subtitle: t('products_page.catalog.portable_power.subtitle'),
      description: t('products_page.catalog.portable_power.description'),
      features: t('products_page.catalog.portable_power.features', { returnObjects: true }) as string[],
      image: "https://i.postimg.cc/QdRShY9X/portable-station.png"
    },
    {
      title: t('products_page.catalog.storage_systems.title'),
      subtitle: t('products_page.catalog.storage_systems.subtitle'),
      description: t('products_page.catalog.storage_systems.description'),
      features: t('products_page.catalog.storage_systems.features', { returnObjects: true }) as string[],
      image: "https://i.postimg.cc/hPQdcD9F/Gemini-Generated-Image-8opx6m8opx6m8opx.png"
    }
  ];

  return (
    <div className="pt-[calc(80px+env(safe-area-inset-top))]">
      {/* Header */}
      <section className="bg-primary py-20 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {t('products_page.header.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/80 max-w-2xl mx-auto"
        >
          {t('products_page.header.subtitle')}
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
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full min-h-[400px] object-cover hover:scale-105 transition-transform duration-500"
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
            {t('products_page.cta.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('products_page.cta.subtitle')}
          </p>
          <div className="flex justify-center pt-4">
            <Link to="/contact#inquiry-form" className="bg-primary text-white px-10 py-4 rounded-sm font-bold text-base hover:bg-opacity-95 transition-all shadow-lg flex items-center gap-2 group">
              {t('products_page.cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
