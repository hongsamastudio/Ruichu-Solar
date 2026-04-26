import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Landmark, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AdvantageCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 bg-[#f0fdf4] rounded-full flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const AdvantagesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-[calc(80px+env(safe-area-inset-top))]">
      {/* Hero Section */}
      <section className="bg-[#1A472A] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('advantages_page.hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            {t('advantages_page.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AdvantageCard 
              icon={Landmark}
              title={t('advantages_page.cards.direct.title')}
              description={t('advantages_page.cards.direct.description')}
            />
            <AdvantageCard 
              icon={Shield}
              title={t('advantages_page.cards.quality.title')}
              description={t('advantages_page.cards.quality.description')}
            />
            <AdvantageCard 
              icon={Award}
              title={t('advantages_page.cards.biz_hub.title')}
              description={t('advantages_page.cards.biz_hub.description')}
            />
            <AdvantageCard 
              icon={Globe}
              title={t('advantages_page.cards.global.title')}
              description={t('advantages_page.cards.global.description')}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f0fdf4] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {t('advantages_page.cta.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('advantages_page.cta.subtitle')}
          </p>
          <div className="flex justify-center pt-4">
            <Link 
              to="/contact#inquiry-form" 
              className="bg-primary text-white px-10 py-4 rounded-sm font-bold text-base hover:bg-opacity-95 transition-all shadow-lg flex items-center gap-2 group"
            >
              {t('advantages_page.cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvantagesPage;
