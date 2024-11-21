import React from 'react';
import Sidebar from './Sidebar';
import './ReportScreen.css';
import qrImage from '../assets/Recurso1.png';
import logo from '../assets/Recurso2.png'; 

function ReportScreen({ navigateTo }) {
  return (
    <div className="report-screen">
      <Sidebar navigateTo={navigateTo} active="report" />
      <div className="report-content">
        <div className="report-table-container">
          <div className="qr-background">
            <img src={qrImage} alt="QR Code" className="qr-image" />
            <div className="qr-text">SICRP</div>
          </div>
          <table className="report-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>PATRULLA</th>
                <th>CUADRANTE</th>
                <th>UBICACIÓN</th>
                <th>RECORRIDO</th>
              </tr>
            </thead>
            <tbody>
              {}
            </tbody>
          </table>
          <img src={logo} alt="Logo" className="corner-logo" />
        </div>
      </div>
    </div>
  );
}

export default ReportScreen;
