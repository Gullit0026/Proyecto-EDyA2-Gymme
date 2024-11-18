import React, { useState } from "react";
import loginUsuario from "../../../utils/LoginUsuario";
import {getUsuarioBycorreo} from "../../../utils/GetUsuario";
import './InicioSesion.css';

const Login = ({handleRegistro, handleCancelar, handleRecuperarPassword, handleLogged}) => {
  const [correo, setEmail] = useState('');
  const [clave, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = { correo, password: clave };
    const usuarioEncontrado = await getUsuarioBycorreo(correo);

    if (!usuarioEncontrado) {
      alert('El correo eléctronico no se encuentra registrado.');
      return;
    }

    try {
      await loginUsuario(usuario);
      alert('Inicio de sesión exitoso.');
      handleLogged();
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('La contraseña es incorrecta.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Inicio de Sesión</h2>

        <div className="input-group">
          <input type="email" value={correo} onChange={(e) => setEmail(e.target.value)} required placeholder="Correo Electrónico"/>
        </div>

        <div className="input-group">
          <input type="password" value={clave} onChange={(e) => setPassword(e.target.value)} required placeholder="Contraseña"/>
        </div>

        <div className="redireccion-container">
          <button type="button" onClick={handleRecuperarPassword} className="recuperar-contrasena">Recuperar contraseña</button>
        </div>

        <div className="btn-login-container">
          <button type="button" onClick={handleCancelar} className="btn-cancelar-login">cancelar</button>
          <button className="login-button">Login</button>
        </div>

        <hr></hr>
        <div className="contenedor-btn-registrarse">
          <button onClick={handleRegistro}>Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
