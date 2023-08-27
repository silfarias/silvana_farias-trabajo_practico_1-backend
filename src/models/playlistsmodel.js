import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db.js";

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
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
},{
    timestamps: true,
    tableName: 'playlists'
});

playlists.sync({ force: false });



