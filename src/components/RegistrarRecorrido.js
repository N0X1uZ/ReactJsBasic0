import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import './RegistrarRecorrido.css';

function RegistrarRecorrido({ navigateTo }) {
  const [formData, setFormData] = useState({
    idPatrulla: '',
    cuadrante: '',
    ubicacion: '',
    horaRegistro: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos registrados:', formData);
  };

  return (
    <div className="d-flex registrar-recorrido">
      <Sidebar navigateTo={navigateTo} active="register" />
      <div className="registrar-content container text-center">
        {/* Botón de Escaneo */}
        <div className="form-header shadow p-4 rounded bg-light mb-4">
          <button className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2">
            <FontAwesomeIcon icon={faCamera} /> Scan or Gallery
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="form-recorrido bg-white shadow p-4 rounded">
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="idPatrulla" className="form-label fw-bold">
                ID Patrulla:
              </label>
              <input
                type="text"
                id="idPatrulla"
                name="idPatrulla"
                className="form-control"
                value={formData.idPatrulla}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="cuadrante" className="form-label fw-bold">
                Cuadrante:
              </label>
              <input
                type="text"
                id="cuadrante"
                name="cuadrante"
                className="form-control"
                value={formData.cuadrante}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <label htmlFor="ubicacion" className="form-label fw-bold">
                Ubicación:
              </label>
              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                className="form-control"
                value={formData.ubicacion}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="horaRegistro" className="form-label fw-bold">
                Hora de Registro:
              </label>
              <input
                type="time"
                id="horaRegistro"
                name="horaRegistro"
                className="form-control"
                value={formData.horaRegistro}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg mt-4 d-flex align-items-center gap-2 mx-auto">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Registrar Recorrido
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrarRecorrido;
