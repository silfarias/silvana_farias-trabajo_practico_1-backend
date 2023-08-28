import { playlists } from "../models/playlistsmodel.js";
import { songs } from "../models/songsmodel.js";


//CRUD
//CREAR/GUARDAR CANCIÓN 
export const createsong = async (req, res) => {
  const {
    nombre,
    artista,
    id_playlist
  } = req.body;

  try {
    const newSong = new songs ({
      nombre,
      artista,
      id_playlist
    })
    await newSong.save()
    return res.status(201).json({ message: 'Cancion guardada en la Playlist'});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllSongs = async (req, res) => {
  try {
    const allSongs = await songs.findAll();
     return res.status(200).json(allSongs);
  } catch (error) {
    console.error('Error al obtener las canciones:', error);
     return res.status(500).json({ message: 'Error al obtener las canciones' });
  }
};