import React from 'react';
import Sidebar from './Sidebar';
import './HomeScreen.css';
import qrCodeImage from '../assets/Recurso1.png'; // Imagen del QR
import logoImage from '../assets/Recurso2.png'; // Imagen del logo

function HomeScreen({ navigateTo }) {
  return (
    <div className="home-screen">
      <Sidebar navigateTo={navigateTo} active="home" />
      <div className="home-content">
        <div className="home-qr-container">
          <div className="home-qr-background"></div> {/* Fondo circular azul */}
          <img src={qrCodeImage} alt="QR Code" className="home-qr-code" />
        </div>
        <img src={logoImage} alt="Logo" className="home-logo-image" />
      </div>
    </div>
  );
}

export default HomeScreen;
