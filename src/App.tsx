import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Login } from './pages/Login';
import { MedicationList } from './pages/MedicationList';
import { MedicationDetail } from './pages/MedicationDetail';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/medications"
            element={
              <ProtectedRoute>
                <MedicationList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/medications/:id"
            element={
              <ProtectedRoute>
                <MedicationDetail />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/medications" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;