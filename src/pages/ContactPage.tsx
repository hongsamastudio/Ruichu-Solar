import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Users, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-[calc(80px+env(safe-area-inset-top))]">
      {/* Header Section */}
      <section className="bg-[#1A472A] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            {t('contact.header.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            {t('contact.header.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 border-b pb-4 border-gray-100">
                {t('contact.details.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('contact.details.kigali_office.title')}</h4>
                    <p className="text-gray-600">{t('contact.details.kigali_office.address')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-sm flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('contact.details.email.title')}</h4>
                    <p className="text-gray-600">rwanda.biz.hub@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-sm flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('contact.details.call.title')}</h4>
                    <p className="text-gray-600">+250786018176</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-sm flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('contact.details.hours.title')}</h4>
                    <p className="text-gray-600">{t('contact.details.hours.value')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Advantage Section */}
            <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-primary space-y-4">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Users className="w-6 h-6" />
                <h3 className="text-xl font-bold uppercase tracking-wider text-sm">{t('contact.experts.title')}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t('contact.experts.description')}
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div id="inquiry-form" className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-gray-100 scroll-mt-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              {t('contact.form.title')}
            </h3>
            <form action="https://formspree.io/f/xkokevey" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{t('contact.form.labels.name')}</label>
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder={t('contact.form.placeholders.name')} 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{t('contact.form.labels.email')}</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder={t('contact.form.placeholders.email')} 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">{t('contact.form.labels.subject')}</label>
                <select name="inquiry_type" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                  <option value="General Inquiry">{t('contact.form.subjects.general')}</option>
                  <option value="Quote Request">{t('contact.form.subjects.quote')}</option>
                  <option value="Technical Support">{t('contact.form.subjects.support')}</option>
                  <option value="Business Partnership">{t('contact.form.subjects.partnership')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">{t('contact.form.labels.message')}</label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder={t('contact.form.placeholders.message')} 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-sm border border-gray-200">
                <input 
                  type="checkbox" 
                  name="meeting_requested"
                  id="request-meeting"
                  value="Yes"
                  className="w-5 h-5 accent-primary cursor-pointer"
                />
                <label htmlFor="request-meeting" className="text-sm text-gray-700 cursor-pointer select-none">
                  {t('contact.form.checkbox')}
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-white py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-opacity-95 transition-all shadow-lg text-lg group"
              >
                {t('contact.form.button')}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="office-map" className="py-24 px-6 bg-gray-50 border-t border-gray-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{t('contact.map.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('contact.map.description')}
            </p>
          </div>
          
          <div className="h-[450px] bg-white border border-gray-200 rounded-sm overflow-hidden relative shadow-inner">
             <iframe 
               src="https://maps.google.com/maps?q=KABC%20KN5,%20Kigali,%20Rwanda&t=&z=15&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="450" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Ruichu Solar Rwanda Office Location"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
