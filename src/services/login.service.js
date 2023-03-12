import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
import userEntity, { User } from '../entities/user.js';

const login = async (email, pass) => {
    const user = await userEntity.getUserByMail(email);
    const validate = await compare(pass, user.password);
    if (!validate) {
        return `Error en correo o pasword --pass`
    }
    return `Bienvenido`
}
login('francc@gmail.com', '12345').then(console.table).catch(console.error);

const generateJWT =(payload )=>{
        const privateKey = process.env.SECRET_KEY;
        console.log(privateKey);
        sign(payload , privateKey)
        // const token = jwt.sign({ data : payload, iat: Math.floor(Date.now() / 1000) - 30 }, privateKey );
        
        console.log(token);
}

console.log(generateJWT('hola'));