export interface Flight {
  id: string;
  provider: string;
  destination: string;
  duration: string;
  price: number;
  date: string;
  seatsAvailable: number;
  type: 'Sub-orbital' | 'Orbital' | 'Lunar';
  imageUrl: string;
  features: string[];
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'Health' | 'Training' | 'Finance' | 'Legal';
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum FlightType {
  SUB_ORBITAL = 'Sub-orbital',
  ORBITAL = 'Orbital',
  LUNAR = 'Lunar'
}