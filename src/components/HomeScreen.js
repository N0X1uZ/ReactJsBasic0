// components/HomeScreen.js
import React from 'react';
import Sidebar from './Sidebar';
import './HomeScreen.css';
import qrCodeImage from '../assets/Recurso1.png'; // Imagen del QR
import logoImage from '../assets/Recurso2.png'; // Imagen del logo

function HomeScreen({ navigateTo }) {
  return (
    <div className="home-screen">
      <Sidebar navigateTo={navigateTo} active="home" />
      <div className="content">
        <div className="qr-container">
          {/* QR centrado */}
          <img src={qrCodeImage} alt="QR Code" className="qr-code" />
          {/* Logo en la esquina inferior derecha */}
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
