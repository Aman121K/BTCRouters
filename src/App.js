// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RouterStatusDashboard from './RouterStatusDashboard';
import AddRouter from './AddRouter';
import './App.css';
import Choose from './Choose';
import LoginPage from './loginPage';
import { AuthProvider, useAuth } from './AuthContext'; // Import AuthContext

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/" />; // Redirect to login if not authenticated
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/choose' element={<Choose />} />
          <Route path="/add-router" element={<ProtectedRoute element={<AddRouter />} />} />
          <Route path="/check-router-status" element={<ProtectedRoute element={<RouterStatusDashboard />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;