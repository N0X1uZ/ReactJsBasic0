// App.js
import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import ReportScreen from './components/ReportScreen';
import HomeScreen from './components/HomeScreen';
import ScanScreen from './components/ScanScreen';
import ConfirmationScreen from './components/ConfirmationScreen';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('home'); // Navega a la vista principal después de iniciar sesión
  };

  const navigateTo = (page) => setCurrentPage(page);

  return (
    <div className="App">
      {!isAuthenticated ? (
        <LoginScreen onLogin={handleLogin} />
      ) : currentPage === 'home' ? (
        <HomeScreen navigateTo={navigateTo} />
      ) : currentPage === 'report' ? (
        <ReportScreen navigateTo={navigateTo} />
      ) : currentPage === 'scan' ? (
        <ScanScreen navigateTo={navigateTo} />
      ) : currentPage === 'confirmation' ? (
        <ConfirmationScreen navigateTo={navigateTo} />
      ) : null}
    </div>
  );
}

export default App;
