import React, { useState } from "react";
import './InicioSesion.css';

const Login = ({handleRegistro}) => {
  const [correo, setEmail] = useState('');
  const [clave, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', correo);
    console.log('Password:', clave);
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
          <a href="/recuperar-contrasena" className="recuperar-contrasena">Recuperar contraseña</a>
        </div>
        <div className="btn-login-container">
          <div className="btn-cancelar-login">
            <a  href="/" >cancelar</a>
          </div>
          <button type="submit" className="login-button">Login</button>
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
