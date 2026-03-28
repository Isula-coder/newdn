import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold tracking-widest mb-6 backdrop-blur-sm">
              ESTABLISHED PRECISION
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
              Reliable Vehicle <br />
              <span className="text-blue-300">Service in Sri Lanka</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              Experience automotive care defined by engineering excellence. From routine maintenance to complex repairs, we ensure your journey is seamless and safe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="px-8 py-4 rounded-xl bg-white text-primary font-bold text-base hover:bg-surface-container-low transition-colors duration-200 ambient-shadow"
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-xl border border-white/30 text-white font-bold text-base backdrop-blur-sm hover:bg-white/10 transition-colors duration-200"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Precision Services Highlights */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-4">Precision Services</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-8 rounded-xl ambient-shadow flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">car_repair</span>
                <h3 className="text-2xl font-bold text-primary mb-4">Full Service</h3>
                <p className="text-secondary leading-relaxed max-w-xs">
                  Our comprehensive 150-point inspection and maintenance protocol designed for peak vehicle longevity.
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <Link to="/services" className="text-primary font-bold flex items-center gap-2 group">
                  Learn More <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="md:col-span-1 bg-surface-container-lowest p-8 rounded-xl ambient-shadow flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl text-primary mb-4">oil_barrel</span>
                <h3 className="text-xl font-bold text-primary mb-2">Oil Change</h3>
              </div>
              <p className="text-sm text-secondary mb-4">Synthetic lubricant replacement for engine health.</p>
              <Link to="/services" className="text-primary text-sm font-bold flex items-center gap-1">
                Details <span className="material-symbols-outlined text-xs">chevron_right</span>
              </Link>
            </div>
            <div className="md:col-span-1 bg-primary text-white p-8 rounded-xl ambient-shadow flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl text-blue-300 mb-4">precision_manufacturing</span>
                <h3 className="text-xl font-bold mb-2">Engine Check</h3>
              </div>
              <p className="text-sm text-blue-100">Advanced diagnostics for optimal performance.</p>
            </div>
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl ambient-shadow flex items-center justify-between gap-8 group">
              <div className="flex-1">
                <span className="material-symbols-outlined text-3xl text-primary mb-4">tire_repair</span>
                <h3 className="text-xl font-bold text-primary mb-2">Tire Service</h3>
                <p className="text-sm text-secondary">Alignment, balancing, and premium replacements.</p>
              </div>
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-surface-container-low hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400"
                  alt="Tire Service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Client Voices</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-4">Trusted by Drivers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Arjuna Mahendra', role: 'SUV Owner', text: "The most professional service center I've visited in Colombo. Their attention to detail and transparency on parts used is unmatched." },
              { name: 'Sanduni Nimhara', role: 'Sedan Owner', text: "Quick turn-around and friendly staff. They fixed an engine light issue that three other shops couldn't diagnose." },
              { name: 'Kasun Perera', role: 'Hybrid Owner', text: "Highly recommend DN Lanka for their hybrid battery services. Knowledgeable experts and reasonable pricing." }
            ].map((t, i) => (
              <div key={i} className="bg-surface-container-low p-10 rounded-xl relative">
                <span className="material-symbols-outlined text-primary/10 absolute top-8 right-10 text-6xl">format_quote</span>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="material-symbols-outlined text-sm text-primary">star</span>
                  ))}
                </div>
                <p className="text-secondary italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{t.name}</h4>
                    <p className="text-xs text-secondary">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary-container rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Ready to Restore Your <br />
                Vehicle's Peak Performance?
              </h2>
              <p className="text-blue-200 text-lg mb-8 max-w-lg">
                Our experts are standing by. Get a quote or schedule your appointment in seconds.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">call</span>
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase font-bold tracking-widest">Phone Support</p>
                  <p className="text-xl font-bold">+94 112 345 678</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto relative z-10">
              <Link
                to="/booking"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-low transition-all duration-200 flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                Book Appointment
              </Link>
              <a
                href="#"
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
