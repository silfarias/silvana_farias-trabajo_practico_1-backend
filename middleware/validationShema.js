import { body, validationResult } from 'express-validator';


export const validacion = [
  body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
  body("email").notEmpty().withMessage("El email es obligatorio").isEmail().withMessage("El email no es válido"),
  body("password").notEmpty().withMessage("La contraseña es obligatoria").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
]


export const validateSchema = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
next();
};



