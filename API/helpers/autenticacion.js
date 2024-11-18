import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';

export function generarToken(correo) {
    return jsonwebtoken.sign({correo}, process.env.JWT_SECRET, {expiresIn: '2h'});
}
