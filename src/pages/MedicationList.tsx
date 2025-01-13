import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { medications } from '../data/mockData';
import { Navbar } from '../components/Navbar';

export const MedicationList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMedications = medications.filter(medication => 
    medication.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    medication.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Liste des Médicaments</h2>
        
        <div className="mb-6 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher par nom ou catégorie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          {filteredMedications.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              Aucun médicament trouvé
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredMedications.map((medication) => (
                <li key={medication.id}>
                  <Link
                    to={`/medications/${medication.id}`}
                    className="block hover:bg-gray-50 p-4"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {medication.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {medication.category}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};