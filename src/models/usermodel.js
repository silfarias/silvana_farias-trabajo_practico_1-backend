import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db.js";
import { checkSchema } from "express-validator";

//MODELO DE TABLA USERS
export const users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            messge: 'El email ya existe'
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    tableName: 'users'
});


users.sync({ force: false });


export const createUserShema = checkSchema({
    email: { errorMessage: 'Email Inválido', isEmail: true },
    password: {
      isLength: {
        options: { min: 8, max: 15 },
        errorMessage: 'La contraseña debe tener entre 8 y 15 carácteres'
      }
    }
});