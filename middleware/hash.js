import bcrypt from "bcrypt";
import { users } from "../src/models/usermodel.js";


//HOOK PARA HASHEAR LA CONTRASEÑA ANTES DE CREAR UN NUEVO USUARIO
users.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
});

//VERIFICAMOS LA CONTRASEÑA INGRESADA
users.prototype.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export default users;