import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebar.css';

function Sidebar({ navigateTo, active }) {
  return (
    <div className="sidebar d-flex flex-column">
      <button
        className={`btn sidebar-btn ${active === 'home' ? 'active' : ''}`}
        onClick={() => navigateTo('home')}
      >
        <i className="bi bi-house-door-fill"></i> {/* Icono Bootstrap */}
        <span>INICIO</span>
      </button>

      <button
        className={`btn sidebar-btn ${active === 'report' ? 'active' : ''}`}
        onClick={() => navigateTo('report')}
      >
        <i className="bi bi-file-text"></i> {/* Icono Bootstrap */}
        <span>REPORTE CUADRANTE</span>
      </button>

      <button
        className={`btn sidebar-btn ${active === 'scan' ? 'active' : ''}`}
        onClick={() => navigateTo('scan')}
      >
        <i className="bi bi-qr-code-scan"></i> {/* Icono Bootstrap */}
        <span>ESCANEAR QR</span>
      </button>

      <button
        className={`btn sidebar-btn ${active === 'register' ? 'active' : ''}`}
        onClick={() => navigateTo('register')}
      >
        <i className="bi bi-pencil-square"></i> {/* Icono Bootstrap */}
        <span>REGISTRAR RECORRIDO</span>
      </button>

      <button
        className={`btn sidebar-btn ${active === 'patrols' ? 'active' : ''}`}
        onClick={() => navigateTo('patrols')}
      >
        <i className="bi bi-shield-fill"></i> {/* Icono Bootstrap */}
        <span>PATRULLAS</span>
      </button>
    </div>
  );
}

export default Sidebar;
