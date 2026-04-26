import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-xl font-bold text-gray-900 tracking-tight">
              Ruichu Solar Rwanda
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              {t('footer.brand.description')}
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">{t('footer.links.title')}</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-gray-500">
              <Link to="/about" className="hover:text-primary transition-colors">{t('footer.links.about')}</Link>
              <Link to="/products" className="hover:text-primary transition-colors">{t('footer.links.products')}</Link>
              <Link to="/advantages" className="hover:text-primary transition-colors">{t('footer.links.advantages')}</Link>
              <Link to="/services" className="hover:text-primary transition-colors">{t('footer.links.services')}</Link>
              <Link to="/contact#inquiry-form" className="hover:text-primary transition-colors">{t('footer.links.contact')}</Link>
            </div>
          </div>

          {/* Contact Office Column */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">{t('footer.office.title')}</h4>
            <div className="space-y-4 text-sm">
              <Link 
                to="/contact#office-map" 
                className="block text-gray-500 hover:text-gray-900 transition-all leading-relaxed hover:underline underline-offset-4"
              >
                KABC KN5, Kigali, Rwanda
              </Link>
              <Link 
                to="/contact#inquiry-form" 
                className="block font-medium text-gray-500 hover:text-gray-900 transition-all hover:underline underline-offset-4"
              >
                rwanda.biz.hub@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-gray-400 font-medium order-2 md:order-1">
            {t('footer.legal.copy')}
          </div>
          
          <div className="flex gap-8 text-xs text-gray-400 font-medium order-1 md:order-2">
            <a href="#" className="hover:text-primary transition-colors">{t('footer.legal.privacy')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer.legal.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
