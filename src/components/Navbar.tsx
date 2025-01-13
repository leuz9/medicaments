import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">PharmApp</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 hover:text-blue-200"
        >
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </div>
    </nav>
  );
};