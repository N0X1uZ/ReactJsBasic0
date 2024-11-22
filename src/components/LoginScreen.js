import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
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
    <div className="login-container container-fluid d-flex flex-column justify-content-center align-items-center">
      {/* Línea gruesa en la parte superior */}
      <div className="top-line"></div>

      {/* Contenido central */}
      <div className="row w-100 h-100 align-items-center justify-content-center">
        {/* Sección izquierda con QR */}
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center p-3">
          <img src={qrCodeImage} alt="QR Code" className="qr-code img-fluid" />
        </div>

        {/* Divisor vertical */}
        <div className="d-none d-md-block col-md-1">
          <div className="login-divider"></div>
        </div>

        {/* Sección derecha con el formulario */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center p-4">
          <h1 className="title">SICRP</h1>
          <p className="subtitle">
            SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA
          </p>
          <div className="form shadow-lg">
            <input
              type="text"
              placeholder="ID PATRULLA"
              value={patrulla}
              onChange={(e) => setPatrulla(e.target.value)}
              className="input-field form-control mb-3"
            />
            <input
              type="text"
              placeholder="CUADRANTE"
              value={cuadrante}
              onChange={(e) => setCuadrante(e.target.value)}
              className="input-field form-control mb-4"
            />
            <button onClick={handleLogin} className="login-button btn btn-primary w-100">
              INGRESAR
            </button>
          </div>
        </div>
      </div>

      {/* Logo en la esquina inferior derecha */}
      <img src={logoImage} alt="Logo" className="logo" />
    </div>
  );
}

export default LoginScreen;
