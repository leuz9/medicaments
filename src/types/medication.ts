export interface Medication {
  id: string;
  name: string;
  description: string;
  dosage: string;
  sideEffects: string[];
  manufacturer: string;
  imageUrl: string;
  category: string;
  price: number;
}