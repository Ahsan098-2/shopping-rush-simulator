
import { Mission } from './types';

export const MISSIONS: Mission[] = [
  {
    id: 'classic-rush',
    name: 'The Classic Rush',
    budget: 100000,
    timeLimit: 600, // 10 mins
    theme: 'General Store',
    description: 'The original fast-paced budget burn.',
    longDescription: 'You have $100,000 and 10 minutes. Buy a mix of electronics, clothing, and everyday items. A perfect challenge for new shoppers.',
    image: 'https://picsum.photos/seed/classic/400/300',
  },
  {
    id: 'beauty-binge',
    name: 'Beauty Binge',
    budget: 50000,
    timeLimit: 300, // 5 mins
    theme: 'Cosmetics & Beauty',
    description: 'Think fast, stay fabulous.',
    longDescription: 'A focused challenge for beauty lovers. With $50,000 and only 5 minutes, can you build the ultimate collection of makeup, skincare, and fragrances?',
    image: 'https://picsum.photos/seed/beauty/400/300',
  },
  {
    id: 'home-makeover',
    name: 'Home Makeover',
    budget: 150000,
    timeLimit: 900, // 15 mins
    theme: 'Furniture & Decor',
    description: 'Redecorate your life in a rush.',
    longDescription: 'Your dream home awaits! Spend $150,000 on stylish furniture, art, and decor in 15 minutes. From sofas to sculptures, create a masterpiece.',
    image: 'https://picsum.photos/seed/home/400/300',
  },
  {
    id: 'luxury-madness',
    name: 'Luxury Madness',
    budget: 500000,
    timeLimit: 480, // 8 mins
    theme: 'Luxury Goods',
    description: 'High stakes, high fashion.',
    longDescription: 'Only the best will do. You have $500,000 and 8 minutes to acquire a collection of designer watches, supercars, and exclusive items. Spend big!',
    image: 'https://picsum.photos/seed/luxury/400/300',
  },
  {
    id: 'randomizer-mode',
    name: 'Randomizer Mode',
    budget: 200000,
    timeLimit: 420, // 7 mins
    theme: 'Random & Chaotic',
    description: 'Chaos mode — products change live.',
    longDescription: 'Embrace the chaos! Products from all categories will appear and disappear at random. A true test of your ability to adapt and spend on the fly.',
    image: 'https://picsum.photos/seed/random/400/300',
  },
  {
    id: 'billionaires-burn',
    name: "Billionaire's Burn",
    budget: 1000000000,
    timeLimit: 900, // 15 mins
    theme: 'Ultra Luxury & Assets',
    description: 'Can you even spend $1 Billion?',
    longDescription: 'The ultimate challenge. With a staggering $1 billion budget, you must acquire jets, yachts, supercars, and even private islands. A 15-minute race to financial oblivion.',
    image: 'https://picsum.photos/seed/billion/400/300',
  },
];