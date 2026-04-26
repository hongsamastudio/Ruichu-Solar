import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Users, Map as MapIcon, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-[#1A472A] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Contact Ruichu Solar Rwanda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            Have a project in mind or need technical advice? Our local team in Kigali is ready to power your transition to sustainable energy.
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
                Contact Details
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Kigali Office</h4>
                    <p className="text-gray-600">KABC KN5, Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-sm flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">rwanda.biz.hub@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-sm flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+250786018176</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-sm flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Mon - Fri, 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Advantage Section */}
            <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-primary space-y-4">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Users className="w-6 h-6" />
                <h3 className="text-xl font-bold uppercase tracking-wider text-sm">Meet Our Local Experts</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of face-to-face partnership. Our dedicated local staff in Kigali is available for in-person consultations to discuss your specific energy needs, site assessments, and business investment opportunities through Rwanda Biz Hub.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div id="inquiry-form" className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-gray-100 scroll-mt-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              Send an Inquiry
            </h3>
            <form action="https://formspree.io/f/xkokevey" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Your Name" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="email@example.com" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <select name="inquiry_type" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Quote Request">Quote Request</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Business Partnership">Business Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="How can we help you?" 
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
                  Request Quote / Personal Meeting at Kigali Office
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-white py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-opacity-95 transition-all shadow-lg text-lg group"
              >
                Send Message / Book Meeting
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
            <h2 className="text-3xl font-bold text-gray-900">Visit Us in Kigali</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our office is located in the heart of Kigali's business district. We welcome walk-in inquiries during business hours.
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
