import React from 'react';
import { Flight } from '../types';
import { Rocket, Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface FlightCardProps {
  flight: Flight;
  onSelect: (flight: Flight) => void;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, onSelect }) => {
  return (
    <div className="bg-space-800 rounded-2xl overflow-hidden border border-space-700 hover:border-gold-400/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-gold-500/5">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-space-900 to-transparent z-10 opacity-80" />
        <img 
          src={flight.imageUrl} 
          alt={flight.destination} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="bg-gold-500 text-black text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
            {flight.type}
          </span>
          <h3 className="text-2xl font-bold text-white">{flight.destination}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-400 text-sm mb-1">Provider</p>
            <p className="text-lg font-semibold text-white flex items-center gap-2">
              <Rocket className="w-4 h-4 text-gold-400" />
              {flight.provider}
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm mb-1">Price per seat</p>
            <p className="text-xl font-bold text-gold-400">
              ${flight.price.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-space-900/50 p-3 rounded-xl border border-space-700">
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
              <Clock className="w-3 h-3" /> Duration
            </div>
            <span className="text-white font-medium">{flight.duration}</span>
          </div>
          <div className="bg-space-900/50 p-3 rounded-xl border border-space-700">
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
              <Calendar className="w-3 h-3" /> Departure
            </div>
            <span className="text-white font-medium">{new Date(flight.date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-3">Flight Features</p>
          <ul className="space-y-2">
            {flight.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={() => onSelect(flight)}
          className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gold-400 transition-colors uppercase tracking-widest text-sm"
        >
          Reserve Seat
        </button>
      </div>
    </div>
  );
};

export default FlightCard;