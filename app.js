//IMPORTACIONES
import express from 'express'
import cors from 'cors'
import helmet from 'helmet' 
import morgan from 'morgan'
import { connectDb } from './database/db.js'
import { router } from './src/routes/routes.js'
import './database/associations.js'
import './middleware/hash.js'


//CONFIGURACION DE LA APP Y EL PUERTO DEL SERVIDOR
const app = express();
const PORT = process.env.PORT || 3000


//CONFIGURACION DE middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());


//CONEXION A BASE DE DATOS
connectDb();


//RUTAS
app.use('/', router)

//SERVIDOR CORRIENDO  
app.listen(PORT, () => 
console.log(`Servidor corriendo en http://localhost:${PORT}`));