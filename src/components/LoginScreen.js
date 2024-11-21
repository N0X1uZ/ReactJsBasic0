import React, { useState } from 'react';
import './LoginScreen.css';
import qrCodeImage from '../assets/Recurso1.png'; 
import logoImage from '../assets/Recurso2.png'; 

function LoginScreen({ onLogin }) {
  const [patrulla, setPatrulla] = useState('');
  const [cuadrante, setCuadrante] = useState('');

  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={qrCodeImage} alt="QR Code" className="qr-code" />
      </div>
      <div className="login-divider"></div>
      <div className="login-right">
        <h1 className="title">SICRP</h1>
        <p className="subtitle">SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA</p>
        <div className="form">
          <input
            type="text"
            placeholder="ID PATRULLA"
            value={patrulla}
            onChange={(e) => setPatrulla(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="CUADRANTE"
            value={cuadrante}
            onChange={(e) => setCuadrante(e.target.value)}
            className="input-field"
          />
          <button onClick={handleLogin} className="login-button">INGRESAR</button>
        </div>
      </div>
      <img src={logoImage} alt="Logo" className="logo" />
    </div>
  );
}

export default LoginScreen;
