import React from 'react';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos Bootstrap
import './ScanScreen.css';
import qrImage from '../assets/Recurso1.png'; // QR Code
import logoImage from '../assets/Recurso2.png'; // Logo

function ScanScreen({ navigateTo }) {
  return (
    <div className="d-flex scan-screen">
      <Sidebar navigateTo={navigateTo} active="scan" />
      <div className="scan-content container text-center">
        <div className="qr-container shadow-lg p-4 bg-white rounded">
          <img src={qrImage} alt="QR Code" className="qr-image img-fluid" />
          <h1 className="qr-title mt-3">Escanear QR</h1>
        </div>
        <img src={logoImage} alt="Logo" className="corner-logo" />
      </div>
    </div>
  );
}

export default ScanScreen;
