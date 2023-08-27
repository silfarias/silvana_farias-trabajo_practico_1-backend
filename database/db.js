import { Sequelize } from 'sequelize';

//CREAMOS INSTANIA DE CONEXION A BASE DE DATOS Y EXPORTAMOS
export const sequelize = new Sequelize('playlistdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Nos hemos conectado a la base de datos')
    } catch (error) {
        console.log('Error al intentar conectar', error)
    };
};