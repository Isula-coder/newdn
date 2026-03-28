import React, { useState } from 'react';
import { motion } from 'motion/react';

const vehicles = [
  { id: 'car', name: 'Car', icon: 'directions_car' },
  { id: 'bike', name: 'Bike', icon: 'two_wheeler' },
  { id: 'van', name: 'Van', icon: 'airport_shuttle' },
  { id: 'lorry', name: 'Lorry', icon: 'local_shipping' },
];

const timeSlots = [
  '08:00 AM', '09:30 AM', '11:00 AM', '12:30 PM',
  '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'
];

export default function Booking() {
  const [selectedVehicle, setSelectedVehicle] = useState('car');
  const [selectedTime, setSelectedTime] = useState('');
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
        <h1 className="text-4xl font-extrabold text-primary mb-4">Booking Received!</h1>
        <p className="text-secondary mb-10">Our service engineers will contact you shortly to confirm your appointment for the {selectedVehicle}.</p>
        <button 
          onClick={() => setIsSubmitted(false)} 
          className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition-all"
        >
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">Precision Service Booking</h1>
        <p className="text-lg text-secondary max-w-2xl leading-relaxed">
          Secure your slot with Sri Lanka's leading automotive engineering team. Professional maintenance tailored to your vehicle's specific needs.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Section: Vehicle Selection */}
          <section className="bg-surface-container-low p-6 md:p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <h2 className="text-xl font-bold">Select Your Vehicle</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {vehicles.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedVehicle(v.id)}
                  className={`flex flex-col items-center justify-center p-6 rounded-lg border transition-all duration-200 ${
                    selectedVehicle === v.id
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-secondary border-outline-variant/20 hover:border-primary/40 hover:bg-slate-50'
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl mb-2">{v.icon}</span>
                  <span className="text-sm font-semibold">{v.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Section: Service Details */}
          <section className="bg-surface-container-low p-6 md:p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <h2 className="text-xl font-bold">Service Details</h2>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">Service Category</label>
                  <select className="w-full bg-white border border-outline-variant/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none">
                    <option>Full Service</option>
                    <option>Oil & Filter Change</option>
                    <option>Engine Tune-up</option>
                    <option>Brake System Maintenance</option>
                    <option>Wheel Alignment</option>
                    <option>Hybrid Battery Check</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">Service Branch</label>
                  <select className="w-full bg-white border border-outline-variant/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none">
                    <option>Colombo Central Branch</option>
                    <option>Kandy Regional Hub</option>
                    <option>Galle Coastal Service</option>
                    <option>Negombo Expressway Point</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">Preferred Appointment Date</label>
                <input
                  type="date"
                  required
                  className="w-full bg-white border border-outline-variant/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-4">Available Time Slots</label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      disabled={slot === '12:30 PM'}
                      className={`py-2 text-sm font-medium rounded border transition-colors ${
                        selectedTime === slot
                          ? 'bg-primary text-white border-primary'
                          : slot === '12:30 PM'
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed border-transparent'
                          : 'bg-white text-secondary border-outline-variant/20 hover:bg-primary hover:text-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Additional Notes */}
          <section className="bg-surface-container-low p-6 md:p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <h2 className="text-xl font-bold">Additional Notes</h2>
            </div>
            <textarea
              className="w-full bg-white border border-outline-variant/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
              placeholder="Mention any specific issues or requirements..."
              rows={4}
            ></textarea>
          </section>

          <button 
            type="submit"
            className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-5 rounded-xl text-lg font-extrabold shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-[0.98]"
          >
            Submit Booking
          </button>
        </div>

        {/* Summary Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-outline-variant/20 sticky top-28 ambient-shadow">
            <h3 className="text-lg font-bold text-primary mb-4">Booking Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm border-b border-surface-container pb-4">
                <span className="text-secondary font-medium">Vehicle Type</span>
                <span className="font-bold text-primary capitalize">{selectedVehicle}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-surface-container pb-4">
                <span className="text-secondary font-medium">Service</span>
                <span className="font-bold text-primary">Full Service</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-surface-container pb-4">
                <span className="text-secondary font-medium">Branch</span>
                <span className="font-bold text-primary">Colombo Central</span>
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Estimated Cost</span>
                </div>
                <div className="text-3xl font-extrabold text-primary">LKR 24,500.00</div>
                <p className="text-[10px] text-secondary mt-2">*Final price may vary based on specific spare parts and fluids used.</p>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">support_agent</span>
                <div>
                  <div className="text-xs font-bold text-primary">Need Help?</div>
                  <div className="text-xs text-secondary">Call us at 011-2345678</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
              alt="Engine bay"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
              <p className="text-white text-xs font-medium italic">"Precision engineering is in our DNA."</p>
            </div>
          </div>
        </aside>
      </form>
    </div>
  );
}
