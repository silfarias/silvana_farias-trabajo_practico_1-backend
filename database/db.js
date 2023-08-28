import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

//CREAMOS INSTANIA DE CONEXION A BASE DE DATOS Y EXPORTAMOS
export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST, 
        dialect: process.env.DB_DIALECT
    }
);

export const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Nos hemos conectado a la base de datos')
    } catch (error) {
        console.log('Error al intentar conectar', error)
    };
};