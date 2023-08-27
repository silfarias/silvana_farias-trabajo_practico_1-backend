import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db.js";

//MODELO DE TABLA SONGS
export const songs = sequelize.define('songs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artista: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    timestamps: true,
    tableName: 'songs'
})

songs.sync({ force: false })