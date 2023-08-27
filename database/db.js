import { Sequelize } from 'sequelize';

//CREAMOS INSTANIA DE CONEXION A BASE DE DATOS Y EXPORTAMOS
export const sequelize = new Sequelize('tem3playlistdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' //No utilicé las variables de entorno del archivo .env porque el servidor no las leía
});

export const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Nos hemos conectado a la base de datos')
    } catch (error) {
        console.log('Error al intentar conectar', error)
    };
};