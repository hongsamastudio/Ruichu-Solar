import React from 'react';
import { motion } from 'motion/react';
import { Settings, Wrench, Headphones, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <div className="aspect-video bg-gray-100 rounded-sm overflow-hidden shadow-xl border border-gray-100">
           <img 
             src={imageUrl} 
             alt={title}
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer"
           />
        </div>
      </div>
    </div>
  </section>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-[#1A472A] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Professional Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            We provide comprehensive end-to-end support to ensure your transition to sustainable energy is seamless, efficient, and perfectly matched to your goals.
          </motion.p>
        </div>
      </section>

      {/* Service 1 */}
      <ServiceSection 
        icon={Settings}
        title="Tailored Engineering for Rwanda’s Needs"
        description="We don’t believe in one-size-fits-all. Our engineering team offers flexible product customization and solution design services specifically tailored to Rwanda’s grid standards and climatic conditions."
        imageUrl="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
        features={[
          "Site-specific energy requirement analysis",
          "Customized system configuration (Off-grid & Hybrid)",
          "Grid-stability optimization for sensitive appliances"
        ]}
      />

      {/* Service 2 */}
      <ServiceSection 
        icon={Wrench}
        title="Seamless Installation & Setup Support"
        description="Transitioning to solar should be stress-free. We provide comprehensive sales support and technical guidance to ensure your systems are installed correctly and safely for long-term performance."
        imageUrl="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
        reverse
        features={[
          "Expert technical assembly guides",
          "Safety and performance verification",
          "Local engineering consultation in Kigali"
        ]}
      />

      {/* Service 3 */}
      <ServiceSection 
        icon={Headphones}
        title="Local Technical Support & Guarantee"
        description="Your partnership with Ruichu Solar doesn't end at delivery. We have established a robust service system providing timely and professional technical support and after-sales guarantees."
        imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
        features={[
          "Professional technical troubleshooting",
          "Real-time system monitoring support",
          "Maintenance consultations with local staff"
        ]}
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
                <h2 className="text-3xl font-bold">Business Growth via Rwanda Biz Hub</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  For large-scale projects and investors, we provide integrated business support. From company registration to investment consulting, we help you navigate the Rwandan market while providing the hardware to power your growth.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                   <div className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium">Market Analysis</div>
                   <div className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium">Regulatory Support</div>
                   <div className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium">B2B Integration</div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600">
            Book a meeting with our local engineering staff in Kigali to design your customized energy solution.
          </p>
          <div className="flex justify-center pt-4">
            <Link 
              to="/contact#inquiry-form" 
              className="bg-primary text-white px-10 py-4 rounded-sm font-bold text-base hover:bg-opacity-95 transition-all shadow-lg flex items-center gap-2 group"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
