import React from 'react';
import { motion } from 'motion/react';
import { Settings, Wrench, Headphones, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServiceSection = ({ icon: Icon, title, description, features, imageUrl, reverse = false }: { 
  icon: any, 
  title: string, 
  description: string, 
  features: string[],
  imageUrl: string,
  reverse?: boolean 
}) => (
  <section className={`py-24 px-6 ${reverse ? 'bg-white' : 'bg-gray-50'}`}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className={`w-full md:w-1/2 space-y-6 ${reverse ? 'md:order-2' : ''}`}>
        <div className="w-16 h-16 bg-[#f0fdf4] rounded-sm flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-4 pt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
              <span className="text-gray-700 font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`w-full md:w-1/2 ${reverse ? 'md:order-1' : ''}`}>
        <div className="aspect-[4/3] md:aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
           <img 
             src={imageUrl} 
             alt={title}
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             loading="eager"
           />
        </div>
      </div>
    </div>
  </section>
);

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-[calc(80px+env(safe-area-inset-top))]">
      {/* Header Section */}
      <section className="bg-[#1A472A] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('services.header.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            {t('services.header.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Service 1 */}
      <ServiceSection 
        icon={Settings}
        title={t('services.engineering.title')}
        description={t('services.engineering.description')}
        imageUrl="https://i.postimg.cc/c4DnNF9z/tailored-power.png"
        features={t('services.engineering.features', { returnObjects: true }) as string[]}
      />

      {/* Service 2 */}
      <ServiceSection 
        icon={Wrench}
        title={t('services.installation.title')}
        description={t('services.installation.description')}
        imageUrl="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop"
        reverse
        features={t('services.installation.features', { returnObjects: true }) as string[]}
      />

      {/* Service 3 */}
      <ServiceSection 
        icon={Headphones}
        title={t('services.support.title')}
        description={t('services.support.description')}
        imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
        features={t('services.support.features', { returnObjects: true }) as string[]}
      />

      {/* Rwanda Biz Hub Advantage */}
      <section className="py-24 px-6 bg-[#1A472A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-12 rounded-sm backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="bg-white p-6 rounded-sm shrink-0">
                <Briefcase className="w-12 h-12 text-[#1A472A]" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">{t('services.biz_hub.title')}</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t('services.biz_hub.description')}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                   <div className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium">{t('services.biz_hub.tags.market')}</div>
                   <div className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium">{t('services.biz_hub.tags.regulatory')}</div>
                   <div className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium">{t('services.biz_hub.tags.b2b')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {t('services.cta.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('services.cta.description')}
          </p>
          <div className="flex justify-center pt-4">
            <Link 
              to="/contact#inquiry-form" 
              className="bg-primary text-white px-10 py-4 rounded-sm font-bold text-base hover:bg-opacity-95 transition-all shadow-lg flex items-center gap-2 group"
            >
              {t('services.cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
