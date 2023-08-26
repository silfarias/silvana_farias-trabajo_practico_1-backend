//IMPORTACIONES
import express from 'express'
import cors from 'cors'
import helmet from 'helmet' 
import morgan from 'morgan'
import dotenv from 'dotenv'
import { connectDb } from './db.js'

//CONFIGURACION DE LA APP Y EL PUERTO DEL SERVIDOR
const app = express();
const PORT = process.env.PORT || 3000


//CONFIGURACION DE MIDDELWARES
dotenv.config();
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

//CONEXION A BASE DE DATOS
connectDb();



//SERVIDOR CORRIENDO  
app.listen(PORT, () => 
console.log(`Servidor corriendo en http://localhost:${PORT}`));




//CREACIONES DE LAS TABLAS
/* import { playlists, users } from './src/models/playlist.js';
sequelize.authenticate()
.then(() => console.log('Tabla de playlists, users creada'))
.catch((error) => console.log('Error al crear la tabla playlists o users')) */