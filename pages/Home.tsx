import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, TrendingUp, Globe2 } from 'lucide-react';
import { FLIGHTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 bg-black">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Space Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 backdrop-blur-md">
            <span className="text-gold-400 text-sm font-semibold tracking-wider uppercase">The Final Frontier Awaits</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
            Buy Your Ticket <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">To The Stars</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Experience the "Overview Effect". CosmicTravels curates exclusive sub-orbital and orbital expeditions for the discerning voyager.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/flights"
              className="px-8 py-4 bg-gold-500 text-black font-bold text-lg rounded-full hover:bg-gold-400 transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Preparation Services
            </Link>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-space-900/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Flights Booked', value: '142' },
              { label: 'Partner Providers', value: '4' },
              { label: 'Safety Rating', value: '100%' },
              { label: 'Destinations', value: '5' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Expeditions</h2>
              <p className="text-gray-400">Hand-picked experiences for maximum awe.</p>
            </div>
            <Link to="/flights" className="text-gold-400 hover:text-white transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLIGHTS.slice(0, 3).map((flight) => (
               <div key={flight.id} className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
                 <img src={flight.imageUrl} alt={flight.destination} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent opacity-90" />
                 <div className="absolute bottom-0 left-0 p-8 w-full">
                    <span className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-2 block">{flight.provider}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{flight.destination}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                      <span>{flight.duration}</span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full" />
                      <span>{flight.type}</span>
                    </div>
                    <Link to="/flights" className="w-full block text-center py-3 bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md rounded-xl font-semibold transition-all">
                      View Details
                    </Link>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-space-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose CosmicTravels?</h2>
            <p className="text-gray-400 text-lg">We don't just sell tickets; we engineer your entire journey from Earth to orbit and back, ensuring safety, comfort, and financial security.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-space-900/50 p-8 rounded-2xl border border-space-700 hover:border-gold-400/30 transition-colors">
              <div className="w-14 h-14 bg-space-800 rounded-xl flex items-center justify-center mb-6 text-gold-400">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">End-to-End Safety</h3>
              <p className="text-gray-400 leading-relaxed">
                From rigorous medical screenings to centrifuge training, we ensure you are physically prepared for G-forces and microgravity.
              </p>
            </div>
            <div className="bg-space-900/50 p-8 rounded-2xl border border-space-700 hover:border-gold-400/30 transition-colors">
              <div className="w-14 h-14 bg-space-800 rounded-xl flex items-center justify-center mb-6 text-gold-400">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">All Major Providers</h3>
              <p className="text-gray-400 leading-relaxed">
                Compare and book flights from AstraX, Blue Horizon, and Galactic Virgin all in one unified marketplace.
              </p>
            </div>
            <div className="bg-space-900/50 p-8 rounded-2xl border border-space-700 hover:border-gold-400/30 transition-colors">
              <div className="w-14 h-14 bg-space-800 rounded-xl flex items-center justify-center mb-6 text-gold-400">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Financial Planning</h3>
              <p className="text-gray-400 leading-relaxed">
                Specialized insurance packages and crypto-asset liquidation services to fund your ticket to the stars.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;