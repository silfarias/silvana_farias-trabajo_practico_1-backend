/*Es una función que procesa los resultados de las validaciones
y los transforma en una estructura más manejable*/
import { validationResult } from 'express-validator';


export const validateSchema = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

next();
};



