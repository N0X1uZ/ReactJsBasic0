// components/ScanScreen.js
import React from 'react';
import Sidebar from './Sidebar';
import './ScanScreen.css';
import qrImage from '../assets/Recurso1.png'; // QR Code
import logoImage from '../assets/Recurso2.png'; // Logo

function ScanScreen({ navigateTo }) {
  return (
    <div className="scan-screen">
      <Sidebar navigateTo={navigateTo} active="scan" />
      <div className="scan-content">
        <img src={qrImage} alt="QR Code" className="qr-image" />
        <h1 className="title">ESCANEAR QR</h1>
        <p className="subtitle">Por favor oprima el código QR para registrar su posición.</p>
        <button className="qr-button">Scan or Gallery</button>
        <img src={logoImage} alt="Logo" className="corner-logo" />
      </div>
    </div>
  );
}

export default ScanScreen;
