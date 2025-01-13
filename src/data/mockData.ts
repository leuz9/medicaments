import { Medication } from '../types/medication';

export const medications: Medication[] = [
  {
    id: '1',
    name: 'Paracétamol',
    description: 'Analgésique et antipyrétique couramment utilisé pour soulager la douleur et réduire la fièvre.',
    dosage: '500mg - 1000mg',
    sideEffects: ['Nausées', 'Maux de tête', 'Fatigue'],
    manufacturer: 'Sanofi',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500',
    category: 'Analgésique',
    price: 5.99
  },
  {
    id: '2',
    name: 'Ibuprofène',
    description: 'Anti-inflammatoire non stéroïdien utilisé pour traiter la douleur et l\'inflammation.',
    dosage: '200mg - 400mg',
    sideEffects: ['Troubles digestifs', 'Vertiges', 'Réactions allergiques'],
    manufacturer: 'Pfizer',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=500',
    category: 'AINS',
    price: 7.99
  },
  {
    id: '3',
    name: 'Amoxicilline',
    description: 'Antibiotique à large spectre de la famille des pénicillines.',
    dosage: '500mg - 1000mg',
    sideEffects: ['Diarrhée', 'Nausées', 'Éruptions cutanées'],
    manufacturer: 'GSK',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=500',
    category: 'Antibiotique',
    price: 12.99
  }
];