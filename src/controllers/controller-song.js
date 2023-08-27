import { songs } from "../models/songsmodel.js";


//CRUD
//CREAR UN USUARIO
export const createsong = async (req, res) => {
    try {
      const newSong = await songs.create(req.body);
      res.status(201).json({ message: 'Cancion guardada en la Playlist'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};