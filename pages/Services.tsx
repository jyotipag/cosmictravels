import React from 'react';
import { SERVICES } from '../constants';
import { HeartPulse, Activity, Shield, Coins, Check, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Coins: <Coins className="w-6 h-6" />,
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-900 pb-20">
       {/* Header */}
      <div className="relative py-24 bg-space-800 overflow-hidden">
        <div className="absolute inset-0">
             <img src="https://picsum.photos/1920/1080?grayscale&blur=4" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Mission Readiness</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Space travel requires more than a ticket. It demands physical peak performance and financial security. We provide the comprehensive support infrastructure you need.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-space-800 rounded-2xl p-8 border border-space-700 hover:border-gold-400/50 transition-all hover:shadow-2xl hover:shadow-gold-500/5 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-space-900 border border-space-600 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                  {iconMap[service.icon]}
                </div>
                <span className="px-3 py-1 rounded-full bg-space-900 text-xs font-semibold text-gray-400 border border-space-700">
                  {service.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed h-16">{service.description}</p>
              
              <div className="flex items-end justify-between border-t border-space-700 pt-6">
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Estimated Cost</p>
                    <p className="text-2xl font-bold text-white">${service.price.toLocaleString()}</p>
                </div>
                <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gold-400 transition-colors">
                    Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Path to Launch</h2>
        <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-space-700 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                    { step: '01', title: 'Consultation', desc: 'Initial health & wealth assessment' },
                    { step: '02', title: 'Training', desc: '3-month physical conditioning' },
                    { step: '03', title: 'Clearance', desc: 'Final medical & legal approval' },
                    { step: '04', title: 'Liftoff', desc: 'Pre-flight quarantine & launch' },
                ].map((item, idx) => (
                    <div key={idx} className="bg-space-900 border border-space-700 p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-gold-500 text-black font-bold text-xl flex items-center justify-center mx-auto mb-4 border-4 border-space-900">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;