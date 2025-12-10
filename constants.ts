import { Flight, ServicePackage, FlightType } from './types';

export const FLIGHTS: Flight[] = [
  {
    id: 'f1',
    provider: 'AstraX',
    destination: 'Low Earth Orbit',
    duration: '3 Days',
    price: 55000000,
    date: '2025-06-15',
    seatsAvailable: 2,
    type: FlightType.ORBITAL,
    imageUrl: 'https://picsum.photos/800/600?grayscale',
    features: ['Zero-G Experience', 'Luxury Quarters', 'Earth Views']
  },
  {
    id: 'f2',
    provider: 'Blue Horizon',
    destination: 'Kármán Line',
    duration: '15 Minutes',
    price: 450000,
    date: '2025-04-20',
    seatsAvailable: 4,
    type: FlightType.SUB_ORBITAL,
    imageUrl: 'https://picsum.photos/800/601?grayscale',
    features: ['Short Duration', 'Intense G-Force', 'Astronaut Wings']
  },
  {
    id: 'f3',
    provider: 'Galactic Virgin',
    destination: 'Sub-orbital Space',
    duration: '90 Minutes',
    price: 450000,
    date: '2025-05-10',
    seatsAvailable: 6,
    type: FlightType.SUB_ORBITAL,
    imageUrl: 'https://picsum.photos/800/602?grayscale',
    features: ['Runway Takeoff', 'Floating Cabin', 'Champagne Toast']
  },
  {
    id: 'f4',
    provider: 'Lunar Express',
    destination: 'Lunar Orbit',
    duration: '7 Days',
    price: 150000000,
    date: '2026-01-01',
    seatsAvailable: 1,
    type: FlightType.LUNAR,
    imageUrl: 'https://picsum.photos/800/603?grayscale',
    features: ['Far Side Views', 'Deep Space Isolation', 'Premium Dining']
  }
];

export const SERVICES: ServicePackage[] = [
  {
    id: 's1',
    title: 'Pre-Flight Medical Optimization',
    description: 'Comprehensive 3-month health regime including cardiovascular conditioning and G-force tolerance building.',
    price: 25000,
    category: 'Health',
    icon: 'HeartPulse'
  },
  {
    id: 's2',
    title: 'Centrifuge & Zero-G Training',
    description: 'Week-long intensive bootcamp at a certified astronaut training facility.',
    price: 15000,
    category: 'Training',
    icon: 'Activity'
  },
  {
    id: 's3',
    title: 'Off-World Asset Protection',
    description: 'Legal structuring and insurance for high-risk extra-terrestrial activities.',
    price: 10000,
    category: 'Finance',
    icon: 'Shield'
  },
  {
    id: 's4',
    title: 'Spaceflight Financing',
    description: 'Liquidity solutions and crypto-backed loans to fund your journey.',
    price: 5000,
    category: 'Finance',
    icon: 'Coins'
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are NOVA, the AI Concierge for CosmicTravels. 
Your role is to assist ultra-high-net-worth individuals and space enthusiasts in planning their space journeys.
You have access to information about:
1. Flight types: Sub-orbital (short, cheaper), Orbital (days, expensive), Lunar (week-long, exclusive).
2. Providers: AstraX (like SpaceX), Blue Horizon (like Blue Origin), Galactic Virgin (like Virgin Galactic).
3. Preparation: Medical requirements (heart health, G-force), Financials (insurance costs, crypto payments).

Tone: Sophisticated, professional, yet inspiring and futuristic. 
Keep responses concise but luxurious. 
Do not make up fake specific flight dates not in the provided context, but speak generally about availability.
Always emphasize safety and the transformative nature of the "Overview Effect".
`;