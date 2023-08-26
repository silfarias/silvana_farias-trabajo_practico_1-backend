import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

//MODELO DE TABLA PLAYLISTS
export const playlists = sequelize.define('playlists', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    timestamps: true,
    tableName: 'playlists'
});

playlists.sync();


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
    }
},{
    timestamps: true,
    tableName: 'users'
});

users.sync();

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
    }
},{
    timestamps: true,
    tableName: 'songs'
})

songs.sync();



