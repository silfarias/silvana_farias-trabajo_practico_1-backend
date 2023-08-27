import { users } from "../src/models/usermodel.js";
import { playlists } from "../src/models/playlistsmodel.js";
import { songs } from "../src/models/songsmodel.js";


//RELACIONES CON LAS ENTIDADES

//RELACION DE UNO A MUCHOS ENTRE USUARIO Y PLAYLIST
//Se añade una clave userId a la tabla playlists, una playlist pertenece a un solo usuario
users.hasMany(playlists, { 
    foreignKey: 'id_user'
});
playlists.belongsTo(users);


//RELACION DE UNO A MUCHOS ENTRE PLAYLIST Y CANCION
//Se añade una clave id_playlist a la tabla songs, una canción pertenece a una sola playlist
playlists.hasMany(songs, {
    foreignKey: 'id_playlist'
});
songs.belongsTo(playlists);
