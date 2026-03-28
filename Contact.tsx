import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 pb-40 px-6 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="material-symbols-outlined text-5xl">check_circle</span>
        </div>
        <h1 className="text-4xl font-extrabold text-primary mb-4">Message Sent!</h1>
        <p className="text-secondary mb-10">Thank you for reaching out. Our engineering team will review your inquiry and get back to you within 24 hours.</p>
        <button 
          onClick={() => setIsSubmitted(false)} 
          className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition-all"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-primary-container rounded-xl overflow-hidden relative min-h-[400px] flex items-center p-12">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold tracking-widest uppercase rounded mb-6">Connect With Us</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">Precision Support for Precision Vehicles</h1>
            <p className="text-lg text-blue-100 leading-relaxed opacity-90">Experience the gold standard in automotive service. Our engineers are ready to assist with your vehicle's complex needs.</p>
          </div>
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200"
              alt="Contact hero"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/15 transition-all duration-200 hover:shadow-lg group">
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white">call</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us Directly</h3>
              <p className="text-secondary text-sm mb-4">Available Mon-Sat, 8am to 6pm</p>
              <a className="text-primary font-bold text-lg hover:underline" href="tel:+94112345678">+94 11 234 5678</a>
            </div>
            <div className="p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/15 transition-all duration-200 hover:shadow-lg group">
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white">mail</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-secondary text-sm mb-4">We reply within 24 hours</p>
              <a className="text-primary font-bold text-lg hover:underline" href="mailto:service@dnlanka.lk">service@dnlanka.lk</a>
            </div>
          </div>

          <div className="bg-surface-container-low p-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary tracking-wider uppercase px-1">Full Name</label>
                  <input required className="w-full px-4 py-3 bg-white border border-outline-variant/15 rounded-lg focus:ring-0 focus:border-primary/40 transition-all outline-none" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary tracking-wider uppercase px-1">Email Address</label>
                  <input required className="w-full px-4 py-3 bg-white border border-outline-variant/15 rounded-lg focus:ring-0 focus:border-primary/40 transition-all outline-none" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary tracking-wider uppercase px-1">Service Type</label>
                <select className="w-full px-4 py-3 bg-white border border-outline-variant/15 rounded-lg focus:ring-0 focus:border-primary/40 transition-all outline-none appearance-none">
                  <option>General Maintenance</option>
                  <option>Engine Diagnostic</option>
                  <option>Precision Tuning</option>
                  <option>Transmission Service</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary tracking-wider uppercase px-1">Message</label>
                <textarea required className="w-full px-4 py-3 bg-white border border-outline-variant/15 rounded-lg focus:ring-0 focus:border-primary/40 transition-all outline-none" placeholder="How can our engineers assist you?" rows={4}></textarea>
              </div>
              <button className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition-all shadow-sm active:scale-95" type="submit">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/15 overflow-hidden shadow-sm">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Engineering Center</h3>
              <div className="flex items-start space-x-3 mb-6">
                <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                <p className="text-secondary leading-relaxed">
                  452/A Precision Way,<br />
                  Kandy Road, Peliyagoda,<br />
                  Sri Lanka
                </p>
              </div>
              <div className="w-full h-72 bg-surface-container-high rounded-lg overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
                  alt="Map location"
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-lg border-2 border-primary">
                    <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl text-white shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl">chat</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Instant Consultation</h3>
            <p className="text-white/90 mb-8 max-w-xs">Need an immediate quote? Chat with our service leads directly on WhatsApp.</p>
            <a className="w-full py-4 bg-white text-[#128C7E] rounded-lg font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center space-x-2" href="#">
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl">
            <h4 className="font-bold text-sm text-secondary uppercase tracking-widest mb-6">Service Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                <span className="font-medium">Monday - Friday</span>
                <span className="text-primary font-bold">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                <span className="font-medium">Saturday</span>
                <span className="text-primary font-bold">08:00 - 14:00</span>
              </li>
              <li className="flex justify-between items-center text-secondary/50">
                <span className="font-medium">Sunday</span>
                <span className="font-bold">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
