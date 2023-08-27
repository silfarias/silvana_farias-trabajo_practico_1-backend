import { users } from "../models/usermodel.js";


//CRUD
//CREAR UN USUARIO
export const createUser = async (req, res) => {
    try {
      const newUser = await users.create(req.body);
      res.status(201).json({ message: 'Usuario creado'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

