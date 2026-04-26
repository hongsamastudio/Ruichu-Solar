import { Sun, Zap, Battery, ArrowRight, ShieldCheck, Wallet, Headset } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAsNYSam6bTHlfEkblevrHB0DFfq61Zw2jY0VdZB45X3yxws9KxhEyXyaSndc6OPW_hONWWcgI6MQ7svdG8EBLU7GH2u1CMcBK-9RotxkQtGyLs_MNgkXujp08mpcQTZtQNwp9T8oqpfndITP1UGEKwU3KIZou3lSNduEeuxNkaUEXhPhtaqBk5NJ0wBs2xKxmAUclbbFDS_SiUHloXtKUR0j4NABzGCIYC6nkwzylW7AYCWZCL-fxmb4yaTLqDlYbwP0PqJOeognfw";

export default function LandingPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submission:', formData);
  };

  return (
    <div className="pt-[calc(80px+env(safe-area-inset-top))]">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Solar panels in Rwanda landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto tracking-tight leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center items-center">
            <Link to="/products" className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-sm font-bold text-base hover:bg-opacity-95 transition-all text-center">
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Core Products */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="products">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">{t('landing.products.heading')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            icon={<Sun className="w-8 h-8 text-primary" />}
            title={t('landing.products.solar_panels.title')}
            description={t('landing.products.solar_panels.description')}
          />
          <ProductCard 
            icon={<Zap className="w-8 h-8 text-primary" />}
            title={t('landing.products.power_stations.title')}
            description={t('landing.products.power_stations.description')}
          />
          <ProductCard 
            icon={<Battery className="w-8 h-8 text-primary" />}
            title={t('landing.products.storage_systems.title')}
            description={t('landing.products.storage_systems.description')}
          />
        </div>
      </section>

      {/* The Ruichu Advantage */}
      <section className="bg-[#f0fdf4] py-24 mb-12" id="advantages">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">{t('landing.advantages.heading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AdvantageItem 
              icon={<Wallet className="w-10 h-10" />}
              title={t('landing.advantages.direct_import.title')}
              description={t('landing.advantages.direct_import.description')}
            />
            <AdvantageItem 
              icon={<ShieldCheck className="w-10 h-10" />}
              title={t('landing.advantages.quality.title')}
              description={t('landing.advantages.quality.description')}
            />
            <AdvantageItem 
              icon={<Headset className="w-10 h-10" />}
              title={t('landing.advantages.support.title')}
              description={t('landing.advantages.support.description')}
            />
          </div>
        </div>
      </section>

      {/* Schedule a Meeting CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="contact">
        <div className="max-w-4xl mx-auto bg-[#f0fdf4] rounded-sm p-12 md:p-20 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('landing.cta_section.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">{t('landing.cta_section.subtitle')}</p>
          </div>
          
          <div className="flex justify-center items-center">
            <Link to="/contact#inquiry-form" className="w-full sm:w-auto bg-primary text-white px-12 py-4 rounded-sm font-bold text-lg hover:bg-opacity-95 transition-all shadow-lg">
              {t('landing.cta_section.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gray-100 rounded-sm p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="w-12 h-12 bg-surface-container-low rounded-sm flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <Link to="/products" className="inline-flex items-center text-sm font-bold text-gray-800 hover:text-primary hover:underline hover:gap-1 transition-all">
        {t('landing.products.details')} <ArrowRight className="w-4 h-4 ml-1.5" />
      </Link>
    </div>
  );
}

function AdvantageItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center group">
      <div className="mx-auto w-16 h-16 rounded-sm bg-white border border-gray-100 flex items-center justify-center text-primary mb-6 shadow-sm">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-4">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}
