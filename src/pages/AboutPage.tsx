import { Globe, ShieldCheck, Factory, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-[calc(80px+env(safe-area-inset-top))]">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Global Heritage Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{t('about.heritage.title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.heritage.p1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.heritage.p2')}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-[480px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
                alt="Global Energy Connection" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Quality Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-20">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Factory className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{t('about.quality.title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.quality.p1')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-800">{t('about.quality.cert1')}</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-800">{t('about.quality.cert2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-800">{t('about.quality.cert3')}</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-800">{t('about.quality.cert4')}</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed pt-4">
              {t('about.quality.p2')}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-[480px] bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="R&D Lab" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission in Rwanda Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{t('about.mission.title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.mission.p1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.mission.p2')}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-[480px] bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80" 
                alt="Kigali Cityscape" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{t('about.cta.title')}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('about.cta.subtitle')}
          </p>
          <div className="pt-6">
            <Link 
              to="/contact#inquiry-form" 
              className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-opacity-95 transition-all shadow-lg group"
            >
              {t('about.cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
