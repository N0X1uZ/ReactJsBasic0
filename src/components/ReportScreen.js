import React from 'react';
import Sidebar from './Sidebar';
import './ReportScreen.css';
import qrImage from '../assets/Recurso1.png';
import logo from '../assets/Recurso2.png'; 

function ReportScreen({ navigateTo }) {
  // Datos de ejemplo para la tabla
  const reportData = [
    { id: 1, patrulla: 'P-123', cuadrante: 'A1', ubicacion: 'Centro', recorrido: 'Ruta 1' },
    { id: 2, patrulla: 'P-124', cuadrante: 'A2', ubicacion: 'Norte', recorrido: 'Ruta 2' },
    { id: 3, patrulla: 'P-125', cuadrante: 'B1', ubicacion: 'Sur', recorrido: 'Ruta 3' },
    { id: 4, patrulla: 'P-126', cuadrante: 'B2', ubicacion: 'Este', recorrido: 'Ruta 4' },
  ];

  return (
    <div className="report-screen d-flex">
      <Sidebar navigateTo={navigateTo} active="report" />
      <div className="report-content container-fluid p-4">
        <div className="row justify-content-center align-items-center">
          {/* Fondo del código QR */}
          <div className="qr-background">
            <img src={qrImage} alt="QR Code" className="qr-image" />
            <div className="qr-text">SICRP</div>
          </div>

          {/* Tabla */}
          <div className="col-lg-10 col-md-12 report-table-container p-4 bg-white shadow rounded">
            <h2 className="text-center text-primary mb-4">Reporte de Cuadrantes</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover text-center">
                <thead className="thead-dark">
                  <tr>
                    <th>Id</th>
                    <th>PATRULLA</th>
                    <th>CUADRANTE</th>
                    <th>UBICACIÓN</th>
                    <th>RECORRIDO</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.patrulla}</td>
                      <td>{row.cuadrante}</td>
                      <td>{row.ubicacion}</td>
                      <td>{row.recorrido}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Logo en la esquina */}
          <img src={logo} alt="Logo" className="corner-logo position-absolute" />
        </div>
      </div>
    </div>
  );
}

export default ReportScreen;
