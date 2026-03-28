import React from 'react';
import { motion } from 'motion/react';

export default function Dashboard() {
  return (
    <div className="pt-8 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">Welcome Back, Saman</h1>
        <p className="text-secondary font-medium">Manage your vehicle services and appointments with precision engineering care.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Profile Quick Stats */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                SK
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Saman Kumara</h3>
                <p className="text-xs text-secondary">Loyalty Member since 2022</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-surface-container-low rounded-lg">
                <span className="text-sm font-medium text-secondary">Registered Vehicle</span>
                <span className="text-sm font-bold text-primary">WP CAS-4492</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-surface-container-low rounded-lg">
                <span className="text-sm font-medium text-secondary">Next Service Due</span>
                <span className="text-sm font-bold text-primary">12 Oct 2024</span>
              </div>
            </div>
          </div>

          {/* Promotional Card */}
          <div className="relative overflow-hidden bg-primary-container text-white p-6 rounded-xl min-h-[200px] flex flex-col justify-end">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
              alt="Brake Service"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <h4 className="text-xl font-bold mb-2 relative z-10">Brake Safety Month</h4>
            <p className="text-sm text-blue-200 mb-4 relative z-10">Get a 20% discount on all brake system diagnostics this month.</p>
            <button className="w-full py-2 bg-white text-primary font-bold rounded-lg text-sm relative z-10">Claim Offer</button>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="lg:col-span-8 space-y-8">
          <section>
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-2xl font-bold text-primary">Upcoming Bookings</h2>
              <span className="text-xs font-bold text-primary bg-blue-100 px-2 py-1 rounded uppercase tracking-widest">Next Week</span>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Full Engine Tuning', date: '14 Sep, 2024', time: '09:30 AM', status: 'Confirmed', icon: 'minor_crash' },
                { title: 'Hybrid Battery Health Check', date: '18 Sep, 2024', time: '02:00 PM', status: 'Pending', icon: 'oil_barrel' }
              ].map((booking, i) => (
                <div key={i} className="bg-surface-container-lowest p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:shadow-md">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl">{booking.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary">{booking.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-secondary">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">calendar_today</span> {booking.date}</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">schedule</span> {booking.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {booking.status}
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-secondary hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit_calendar</span>
                      </button>
                      <button className="p-2 text-secondary hover:text-red-600 transition-colors">
                        <span className="material-symbols-outlined">cancel</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Service History</h2>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low">
                      <th className="p-4 text-xs font-bold text-secondary uppercase tracking-wider">Date</th>
                      <th className="p-4 text-xs font-bold text-secondary uppercase tracking-wider">Service Type</th>
                      <th className="p-4 text-xs font-bold text-secondary uppercase tracking-wider">Vehicle</th>
                      <th className="p-4 text-xs font-bold text-secondary uppercase tracking-wider">Status</th>
                      <th className="p-4 text-xs font-bold text-secondary uppercase tracking-wider text-right">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    {[
                      { date: 'Aug 12, 2024', type: 'Annual Maintenance', invoice: '#DN-8821', vehicle: 'CAS-4492' },
                      { date: 'Jul 05, 2024', type: 'Wheel Alignment', invoice: '#DN-7650', vehicle: 'CAS-4492' },
                      { date: 'Apr 22, 2024', type: 'Brake Pad Replacement', invoice: '#DN-6611', vehicle: 'CAS-4492' }
                    ].map((history, i) => (
                      <tr key={i} className="hover:bg-surface-container-low transition-colors">
                        <td className="p-4 text-sm font-medium">{history.date}</td>
                        <td className="p-4">
                          <div className="text-sm font-bold text-primary">{history.type}</div>
                          <div className="text-xs text-secondary">Invoice {history.invoice}</div>
                        </td>
                        <td className="p-4 text-sm">{history.vehicle}</td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">Completed</span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-primary font-bold hover:underline text-sm">View PDF</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
