import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-extrabold tracking-tighter text-primary uppercase font-headline">
          DN LANKA SERVICE
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-semibold tracking-tight transition-colors",
                location.pathname === link.path
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-secondary hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/booking"
            className="bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2 rounded-lg text-sm font-bold transition-all hover:shadow-lg active:scale-95"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface-container-low w-full pt-12 pb-6 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        <div className="col-span-1">
          <div className="text-lg font-bold text-primary mb-4 uppercase font-headline">DN LANKA SERVICE</div>
          <p className="text-sm text-secondary mb-4 leading-relaxed">
            Precision Engineering for Sri Lankan Roads. Excellence in automotive care since 2010.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="text-secondary hover:underline">Hybrid Care</Link></li>
            <li><Link to="/services" className="text-secondary hover:underline">Engine Tuning</Link></li>
            <li><Link to="/services" className="text-secondary hover:underline">Body Works</Link></li>
            <li><Link to="/services" className="text-secondary hover:underline">Diagnostics</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-4">Support</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="text-secondary hover:underline">Location Map</Link></li>
            <li><Link to="/contact" className="text-secondary hover:underline">WhatsApp Support</Link></li>
            <li><Link to="#" className="text-secondary hover:underline">Privacy Policy</Link></li>
            <li><Link to="#" className="text-secondary hover:underline">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-4">Connect</h5>
          <div className="flex gap-4">
            <a href="#" className="text-secondary hover:text-primary">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="text-secondary hover:text-primary">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-6 border-t border-outline-variant/20">
        <p className="text-xs text-secondary text-center">
          © 2024 DN LANKA SERVICE. Precision Engineering for Sri Lankan Roads.
        </p>
      </div>
    </footer>
  );
}
