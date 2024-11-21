import React from 'react';
import Sidebar from './Sidebar';
import './ConfirmationScreen.css';
import logoImage from '../assets/Recurso2.png'; // Logo

function ConfirmationScreen({ navigateTo }) {
  return (
    <div className="confirmation-screen">
      <Sidebar navigateTo={navigateTo} active="" />
      <div className="confirmation-content">
        <h1>Registro Exitoso</h1>
        <p>Su posición ha sido registrada correctamente.</p>
        <img src={logoImage} alt="Logo" className="confirmation-logo" />
        <button onClick={() => navigateTo('home')} className="home-button">
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}

export default ConfirmationScreen;
