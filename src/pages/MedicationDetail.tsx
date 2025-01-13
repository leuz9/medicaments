import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { medications } from '../data/mockData';
import { Navbar } from '../components/Navbar';

export const MedicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const medication = medications.find(m => m.id === id);

  if (!medication) {
    return <div>Médicament non trouvé</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/medications')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="mr-2" />
          Retour à la liste
        </button>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {medication.name}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Fabriqué par {medication.manufacturer}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{medication.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Posologie</h3>
            <p className="text-gray-700">{medication.dosage}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Effets secondaires</h3>
            <ul className="list-disc list-inside text-gray-700">
              {medication.sideEffects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};