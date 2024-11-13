import React from "react";

const BotonesHeader = ({handleInicioSesion, handleRegistro}) => {
    return (
        <div className="contenedor-botones">
            <button onClick={handleInicioSesion} className="btn-iniciar-sesion">Iniciar sesión</button>
            <button onClick={handleRegistro} className="btn-registrarse">Registrarse</button>
        </div>
    )
};

export default BotonesHeader