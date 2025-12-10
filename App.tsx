import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Rocket, Shield, Menu, X, Globe, User } from 'lucide-react';
import ConciergeWidget from './components/ConciergeWidget';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Services from './pages/Services';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-gold-400' : 'text-gray-300 hover:text-white';

  return (
    <nav className="fixed top-0 w-full z-40 bg-space-900/80 backdrop-blur-lg border-b border-space-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-amber-600 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
              <Rocket className="w-6 h-6 text-black fill-current" />
            </div>
            <span className="font-bold text-xl tracking-wider text-white">COSMIC<span className="text-gold-400">TRAVELS</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors tracking-wide ${isActive('/')}`}>HOME</Link>
            <Link to="/flights" className={`text-sm font-medium transition-colors tracking-wide ${isActive('/flights')}`}>FLIGHTS</Link>
            <Link to="/services" className={`text-sm font-medium transition-colors tracking-wide ${isActive('/services')}`}>PREPARE</Link>
            <button className="px-6 py-2 bg-space-800 border border-gold-400/30 text-gold-400 rounded-full text-sm font-semibold hover:bg-gold-400 hover:text-black transition-all duration-300">
              SIGN IN
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-space-900 border-b border-space-700 p-4 space-y-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 py-2">Home</Link>
          <Link to="/flights" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 py-2">Flights</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 py-2">Services</Link>
          <button className="w-full py-2 bg-gold-500 text-black font-bold rounded-lg">Sign In</button>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-space-900 border-t border-space-800 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center">
              <Rocket className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold text-lg text-white">COSMIC<span className="text-gold-400">TRAVELS</span></span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Pioneering the future of human exploration. We connect visionaries with the vessels that will take them beyond the atmosphere.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Destinations</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-gold-400 transition-colors">Low Earth Orbit</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">ISS Docking</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Lunar Orbit</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Mars Colony Beta</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-gold-400 transition-colors">Medical Clearance</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Centrifuge Training</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Space Insurance</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Crypto Payments</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> Global HQ, New York</li>
            <li className="flex items-center gap-2"><User className="w-4 h-4" /> concierge@cosmictravels.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-space-800 pt-8 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} CosmicTravels. All rights reserved. Ad Astra.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-space-900 text-gray-100 font-sans selection:bg-gold-500 selection:text-black">
        <Navbar />
        <main className="pt-20 min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
        <ConciergeWidget />
      </div>
    </Router>
  );
};

export default App;