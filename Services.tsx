import React from 'react';
import { motion } from 'motion/react';

const services = [
  { title: 'Premium Oil Change', desc: 'Synthetic oil replacement with high-performance filtration to ensure engine longevity and peak fuel efficiency.', price: 'Rs. 5000+', icon: 'oil_barrel' },
  { title: 'Wheel Alignment', desc: 'Laser-guided 3D alignment to correct steering pull and uneven tire wear for a smoother, safer driving experience.', price: 'Rs. 3500+', icon: 'tire_repair' },
  { title: 'Hybrid Health Check', desc: 'Specialized diagnostic for hybrid battery health, inverter cooling systems, and regenerative braking efficiency.', price: 'Rs. 12000+', icon: 'construction', featured: true, items: ['Battery Cell Balancing', 'Cooling System Flush', 'Error Code Analysis'] },
  { title: 'Brake Maintenance', desc: 'Full pad inspection, rotor resurfacing, and fluid flush using premium grade hydraulic solutions.', price: 'Rs. 4500+', icon: 'minor_crash' },
  { title: 'AC Service & Gas', desc: 'Leak detection, cabin filter replacement, and high-quality refrigerant recharge for tropical comfort.', price: 'Rs. 6500+', icon: 'ac_unit' }
];

export default function Services() {
  return (
    <div className="pt-12 pb-20">
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight mb-6">
            Engineering <span className="text-blue-500">Precision</span> for Every Vehicle
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Experience Sri Lanka's leading automotive care center. From routine maintenance to complex mechanical repairs, we apply architectural precision to keep you moving safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group p-8 rounded-xl transition-all duration-300 flex flex-col justify-between border border-outline-variant/15 ${
                service.featured
                  ? 'bg-primary text-white lg:row-span-2 relative overflow-hidden'
                  : 'bg-surface-container-lowest hover:shadow-lg'
              }`}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${
                  service.featured ? 'bg-white/20 text-white' : 'bg-surface-container-low text-primary group-hover:bg-primary group-hover:text-white'
                }`}>
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${service.featured ? 'text-white' : 'text-primary'}`}>{service.title}</h3>
                <p className={`mb-6 leading-relaxed ${service.featured ? 'text-blue-100' : 'text-secondary'}`}>{service.desc}</p>
                {service.items && (
                  <ul className="space-y-4 mb-8">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-medium">
                        <span className="material-symbols-outlined text-blue-300">check_circle</span> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={`flex items-center justify-between pt-6 border-t ${service.featured ? 'border-white/20' : 'border-surface-container-low'}`}>
                <span className={`font-bold text-lg ${service.featured ? 'text-white' : 'text-primary'}`}>{service.price}</span>
                {service.featured ? (
                  <button className="w-full py-4 bg-white text-primary font-bold rounded-lg shadow-xl mt-4">Book Specialized Tech</button>
                ) : (
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">Details →</span>
                )}
              </div>
              {service.featured && (
                <div className="absolute bottom-0 right-0 opacity-5 -mb-12 -mr-12 scale-150">
                  <span className="material-symbols-outlined text-[200px]">electric_car</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl aspect-video ambient-shadow">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
                alt="Workshop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-primary mb-6">Why Professionals Choose DN LANKA</h2>
              <div className="space-y-6">
                {[
                  { title: 'Certified Technicians', desc: 'Every mechanic is trained on European and Japanese automotive standards.', icon: 'verified' },
                  { title: 'Genuine Spare Parts', desc: 'We only source OEM parts to maintain your vehicle\'s structural integrity.', icon: 'precision_manufacturing' },
                  { title: 'Transparent Progress', desc: 'Real-time digital dashboard updates on your vehicle\'s service status.', icon: 'update' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
