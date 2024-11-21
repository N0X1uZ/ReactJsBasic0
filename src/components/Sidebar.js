// components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar({ navigateTo, active }) {
  return (
    <div className="sidebar">
      <button
        className={active === 'home' ? 'active' : ''}
        onClick={() => navigateTo('home')}
      >
        <span>INICIO</span>
      </button>
      <button
        className={active === 'report' ? 'active' : ''}
        onClick={() => navigateTo('report')}
      >
        <span>REPORTE CUADRANTE</span>
      </button>
      <button
        className={active === 'scan' ? 'active' : ''}
        onClick={() => navigateTo('scan')}
      >
        <span>ESCANEAR QR</span>
      </button>
      <button
        className={active === 'quadrants' ? 'active' : ''}
        onClick={() => navigateTo('quadrants')}
      >
        <span>REGISTRAR RECORRIDO</span> {/* Este es el cuarto botón */}
      </button>
      <button
        className={active === 'patrols' ? 'active' : ''}
        onClick={() => navigateTo('patrols')}
      >
        <span>PATRULLAS</span>
      </button>
    </div>
  );
}

export default Sidebar;
