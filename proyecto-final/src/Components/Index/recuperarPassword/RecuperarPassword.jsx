import React, { useState } from "react";
import { getUsuarioBycorreo } from "../../../utils/GetUsuario";
import './RecuperarPassword.css';

const RecuperarContrasena = ({ handleCancelarPassword }) => {
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleRecuperarSubmit = async (e) => {
    e.preventDefault();

    const usuarioEncontrado = await getUsuarioBycorreo(correo);

    if (usuarioEncontrado) {
      setMensaje('Se ha enviado un correo con instrucciones para recuperar su contraseña.');
      // Aquí podrías añadir el código para enviar un correo de recuperación
    } else {
      alert('No se encontró una cuenta asociada a este correo.');
    }
  };

  return (
    <div className="recuperar-container">
      <form onSubmit={handleRecuperarSubmit} className="recuperar-form">
        <h2>Recuperar Contraseña</h2>

        <div className="input-group">
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required placeholder="Correo Electrónico"/>
        </div>

        {mensaje && <p className="mensaje-recuperacion">{mensaje}</p>}

        <div className="btn-recuperar-container">
          <button type="button" onClick={handleCancelarPassword} className="btn-cancelar-recuperar">Cancelar</button>
          <button className="recuperar-button">Recuperar Contraseña</button>
        </div>
      </form>
    </div>
  );
};

export default RecuperarContrasena;
