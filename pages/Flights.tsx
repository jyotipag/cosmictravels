import React, { useState } from 'react';
import { Search, Filter, Rocket } from 'lucide-react';
import { FLIGHTS } from '../constants';
import FlightCard from '../components/FlightCard';
import { Flight } from '../types';

const Flights: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  const filteredFlights = FLIGHTS.filter(flight => {
    const matchesSearch = flight.destination.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          flight.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || flight.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleBook = (flight: Flight) => {
    setSelectedFlight(flight);
    // In a real app, this would open a modal or navigate to a checkout
    alert(`Initiating booking sequence for ${flight.destination} with ${flight.provider}. Our concierge will contact you shortly.`);
  };

  return (
    <div className="min-h-screen bg-space-900 pb-20">
      {/* Header */}
      <div className="bg-space-800 py-16 px-4 border-b border-space-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Upcoming Launches</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Select your vessel. Browse scheduled departures to Low Earth Orbit, the Lunar surface, and beyond.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="sticky top-20 z-30 bg-space-900/90 backdrop-blur-md border-b border-space-700 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search destination or provider..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-space-800 border border-space-600 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:ring-1 focus:ring-gold-400 focus:border-gold-400 outline-none transition-all"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {['All', 'Sub-orbital', 'Orbital', 'Lunar'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedType === type 
                    ? 'bg-gold-500 text-black' 
                    : 'bg-space-800 text-gray-300 hover:bg-space-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Flight Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredFlights.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} onSelect={handleBook} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-space-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No flights found</h3>
            <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flights;