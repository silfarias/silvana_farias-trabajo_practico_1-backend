import { playlists } from "../models/playlistsmodel.js";

//CRUD CON LAS 5 OPERACIONES DE LA ENTIDAD PLAYLIST


//OBETENER UNA PLAYLIST POR SU ID
export const getPlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const lista  = await playlists.findByPk(id);
        return res.json(lista);
    } catch (error) {
        console.log('Error al obtener la playlist por su su ID', error);
        return res.status(500).json({ message: 'Error al obtener la playlist por su ID' })
    }
};


//OBTENER TODAS LAS PLAYLISTS
export const getAllPlaylists = async (req, res) => {
    try {
        const listas = await playlists.findAll();
        return res.json(listas); 
    } catch (error) {
      console.log('Error al obtener las playlists', error);
      return res.status(500).json({ message: 'Error al obtener las playlists' })
    }
};


//CREAR PLAYLIST
export const createPlaylist = async (req, res) => {
    try {
        const newPlaylist = await playlists.create(req.body);
        res.status(201).json({ message: 'Playlist creada'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


//EDITAR PLAYLIST 
export const updatePlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await playlists.findByPk(id);
        await playlist.update(req.body)
        return res.json({ message: 'Playlist actualizada' });
    } catch (error) {
        console.log('Error al actualizar la playlist', error);
        return res.status(error.status || 500).json({ message: error.message })
    }
}


//ELIMINAR UNA PLAYLIST 
export const deletePlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await playlists.findByPk(id);
        if (!playlist) {
            return res.status(404).json({ message: 'Playlist no encontrada' });
        }
        //Se marca la playlist como eliminada estableciendo el estado en false
        playlist.estado = false;
        await playlist.save();
        return res.json({ message: 'Playlist eliminada' });
    } catch (error) {
        console.log('Error al eliminar la playlist', error);
        return res.status(500).json({ message: 'Error al eliminar la playlist' });
    }
}