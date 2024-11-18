import React, { useState } from "react";
import registroUsuario from "../../../utils/RegistroUsuario";
import { getUsuarioById, getUsuarioBycorreo } from "../../../utils/GetUsuario";
import { sendVerificationEmail } from "../../../utils/Correo";
import './Registro.css';

const Register = ({ handleInicioSesion, handleCancelar }) => {
  const [_id, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [confirmaClave, setConfirmarClave] = useState('');

  const admin = false;

  const handleErrores = async () => {
    const usuarioPorCorreo = await getUsuarioBycorreo(correo);
    if (usuarioPorCorreo && usuarioPorCorreo.nombre) {
      alert('El correo electrónico ya está registrado.');
      return false;
    }

    const usuarioPorId = await getUsuarioById(_id);
    if (usuarioPorId && usuarioPorId.nombre) {
      alert('La cédula ya está registrada.');
      return false;
    }

    if (clave !== confirmaClave) {
      alert('La clave de confirmación no coincide.');
      return false;
    }

    if (_id.length < 9) {
      alert('La cédula debe tener al menos 9 caracteres.');
      return false;
    }

    if (nombre.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres.');
      return false;
    }

    if (apellido.length < 3) {
      alert('El apellido debe tener al menos 3 caracteres.');
      return false;
    }

    if (correo.length < 6) {
      alert('El correo electrónico debe tener al menos 6 caracteres.');
      return false;
    }

    if (clave.length < 8) {
      alert('La clave debe tener al menos 8 caracteres.');
      return false;
    }

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = await handleErrores();

    if (error) {
      const usuario = { _id, nombre, apellido, correo, clave, admin };

      try {
        await registroUsuario(usuario);
        alert('Usuario registrado exitosamente.');
        sendVerificationEmail(correo);
        handleInicioSesion();
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
        alert('Error al registrar el usuario.');
      }
    }
  };

  const handleCedulaChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCedula(value);
    }
  }

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Registro</h2>
        <div className="input-group">
          <input type="text" value={_id} onChange={handleCedulaChange} required placeholder="Cédula" />
        </div>

        <div className="input-group">
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required placeholder="Nombre" />
        </div>

        <div className="input-group">
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required placeholder="Apellido" />
        </div>

        <div className="input-group">
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required placeholder="Correo Electronico" />
        </div>

        <div className="input-group">
          <input type="password" value={clave} onChange={(e) => setClave(e.target.value)} required placeholder="Contraseña" />
        </div>

        <div className="input-group">
          <input type="password" value={confirmaClave} onChange={(e) => setConfirmarClave(e.target.value)} required placeholder="Confirmar Contraseña" />
        </div>

        <div className="btn-container">
          <button type="button" onClick={handleCancelar} className="btn-cancelar-registro">cancelar</button>
          <button type="submit" className="register-button">Registrarse</button>
        </div>

        <hr />

        <div className="contenedor-btn-login">
          <button onClick={handleInicioSesion} type="submit" className="login-button">Login</button>
        </div>

      </form>
    </div>
  );
};

export default Register;
