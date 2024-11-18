import React from "react";

const RecuperoPassword = () => {
    return (
        <div>
            <h1>Recuperar Contraseña</h1>
            <form>
                <label htmlFor="correo">Correo electr&oacute;nico:</label>
                <input type="email" id="correo" name="correo" required />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default RecuperoPassword;