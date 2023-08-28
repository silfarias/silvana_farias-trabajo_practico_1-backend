import { users } from "../models/usermodel.js";

//CRUD
//CREAR UN USUARIO
export const createUser = async (req, res) => {
  const {
    nombre,
    email,
    password
  } = req.body;

  try {
    const newUser = new users({
      nombre,
      email,
      password
    })
    await newUser.save()
    return res.status(201).json({ message: 'Usuario creado'});
  } catch (error) {
    console.log('Error al crear el usuario', error);
    return res.status(500).json({ error: error.message });
  }
};

