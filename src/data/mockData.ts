import { Medication } from '../types/medication';

export const medications: Medication[] = [
  
    {
      id: '4',
      name: 'Aspirine',
      description: 'Analgésique et anticoagulant utilisé pour soulager les douleurs légères à modérées.',
      dosage: '75mg - 325mg',
      sideEffects: ['Irritation gastrique', 'Saignements', 'Réactions allergiques'],
      manufacturer: 'Bayer',
      imageUrl: 'https://images.unsplash.com/photo-1511235087608-c2f1c973f3f1?auto=format&fit=crop&q=80&w=500',
      category: 'Analgésique',
      price: 4.99
    },
    {
      id: '5',
      name: 'Oméprazole',
      description: 'Inhibiteur de la pompe à protons utilisé pour traiter les reflux acides.',
      dosage: '20mg - 40mg',
      sideEffects: ['Douleurs abdominales', 'Flatulences', 'Constipation'],
      manufacturer: 'AstraZeneca',
      imageUrl: 'https://images.unsplash.com/photo-1584308663205-31e74cc634d4?auto=format&fit=crop&q=80&w=500',
      category: 'Antiacide',
      price: 8.49
    },
    {
      id: '6',
      name: 'Cétirizine',
      description: 'Antihistaminique utilisé pour soulager les symptômes des allergies.',
      dosage: '10mg',
      sideEffects: ['Somnolence', 'Sécheresse buccale', 'Maux de tête'],
      manufacturer: 'UCB Pharma',
      imageUrl: 'https://images.unsplash.com/photo-1578496478817-7c44c915b8d5?auto=format&fit=crop&q=80&w=500',
      category: 'Antihistaminique',
      price: 6.99
    },
    {
      id: '7',
      name: 'Metformine',
      description: 'Médicament utilisé pour le traitement du diabète de type 2.',
      dosage: '500mg - 850mg',
      sideEffects: ['Troubles digestifs', 'Goût métallique', 'Diarrhée'],
      manufacturer: 'Merck',
      imageUrl: 'https://images.unsplash.com/photo-1508979235427-d05ce53e1f99?auto=format&fit=crop&q=80&w=500',
      category: 'Antidiabétique',
      price: 9.99
    },
    {
      id: '8',
      name: 'Loratadine',
      description: 'Antihistaminique non sédatif pour traiter les allergies.',
      dosage: '10mg',
      sideEffects: ['Fatigue', 'Sécheresse de la bouche', 'Nervosité'],
      manufacturer: 'Bayer',
      imageUrl: 'https://images.unsplash.com/photo-1584308666647-755d7c520bd4?auto=format&fit=crop&q=80&w=500',
      category: 'Antihistaminique',
      price: 5.99
    },
    {
      id: '9',
      name: 'Diclofénac',
      description: 'Anti-inflammatoire utilisé pour soulager les douleurs articulaires.',
      dosage: '50mg - 100mg',
      sideEffects: ['Irritation gastrique', 'Vertiges', 'Éruption cutanée'],
      manufacturer: 'Novartis',
      imageUrl: 'https://images.unsplash.com/photo-1545147983-2c6f79b75544?auto=format&fit=crop&q=80&w=500',
      category: 'AINS',
      price: 10.99
    },
    {
      id: '10',
      name: 'Salbutamol',
      description: 'Bronchodilatateur utilisé pour traiter l\'asthme et la bronchopneumopathie.',
      dosage: '100mcg',
      sideEffects: ['Tremblements', 'Palpitations', 'Nervosité'],
      manufacturer: 'GSK',
      imageUrl: 'https://images.unsplash.com/photo-1578496981365-0b97d0dc8c0b?auto=format&fit=crop&q=80&w=500',
      category: 'Bronchodilatateur',
      price: 15.99
    },
    {
      id: '11',
      name: 'Atorvastatine',
      description: 'Statine utilisée pour réduire le cholestérol.',
      dosage: '10mg - 40mg',
      sideEffects: ['Douleurs musculaires', 'Troubles digestifs', 'Fatigue'],
      manufacturer: 'Pfizer',
      imageUrl: 'https://images.unsplash.com/photo-1585435411422-cc5a02b97b4e?auto=format&fit=crop&q=80&w=500',
      category: 'Hypolipidémiant',
      price: 18.99
    },
    {
      id: '12',
      name: 'Esoméprazole',
      description: 'Inhibiteur de la pompe à protons pour traiter les ulcères gastriques.',
      dosage: '20mg - 40mg',
      sideEffects: ['Douleurs abdominales', 'Nausées', 'Constipation'],
      manufacturer: 'AstraZeneca',
      imageUrl: 'https://images.unsplash.com/photo-1576077401776-bf9b7e4d22b8?auto=format&fit=crop&q=80&w=500',
      category: 'Antiacide',
      price: 9.49
    },
    {
      id: '13',
      name: 'Clopidogrel',
      description: 'Anticoagulant utilisé pour prévenir les caillots sanguins.',
      dosage: '75mg',
      sideEffects: ['Saignements', 'Maux de tête', 'Démangeaisons'],
      manufacturer: 'Sanofi',
      imageUrl: 'https://images.unsplash.com/photo-1584308663757-755d7c520bd4?auto=format&fit=crop&q=80&w=500',
      category: 'Anticoagulant',
      price: 20.99
    },
    {
      id: '14',
      name: 'Spironolactone',
      description: 'Diurétique utilisé pour traiter l\'hypertension et l\'insuffisance cardiaque.',
      dosage: '25mg - 100mg',
      sideEffects: ['Hyperkaliémie', 'Fatigue', 'Nausées'],
      manufacturer: 'Pfizer',
      imageUrl: 'https://images.unsplash.com/photo-1584308663757-755d7c520bd4?auto=format&fit=crop&q=80&w=500',
      category: 'Diurétique',
      price: 7.99
    }
  
  
];