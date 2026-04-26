import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const langRef = useRef<HTMLDivElement>(null);

  const languages = [
    'English',
    'Kinyarwanda',
    'Français',
    '中文 (Chinese)',
    '日本語 (Japanese)',
    '한국어 (Korean)'
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    const baseClass = "text-sm font-semibold transition-all pb-1";
    if (isActive) {
      return `${baseClass} text-black border-b-2 border-black`;
    }
    return `${baseClass} text-gray-500 hover:text-black`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">
          Ruichu Solar Rwanda
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className={getLinkClass('/about')}>About us</Link>
          <Link to="/products" className={getLinkClass('/products')}>Products</Link>
          <Link to="/advantages" className={getLinkClass('/advantages')}>Advantages</Link>
          <Link to="/services" className={getLinkClass('/services')}>Services</Link>
          <Link to="/contact#inquiry-form" className={getLinkClass('/contact')}>Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-sm text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden lg:inline">{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-sm shadow-xl py-2 z-[60]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        currentLang === lang 
                          ? 'bg-gray-50 text-primary font-bold' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact#inquiry-form" className="hidden sm:block bg-primary text-on-primary px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-opacity-90 transition-all">
            Book a Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
