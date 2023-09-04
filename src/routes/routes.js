import { Router } from "express";
import { createPlaylist, deletePlaylist,
getAllPlaylists, getPlaylistId, updatePlaylist } from "../controllers/controller-playlist.js";
import { validacion, validateSchema } from "../../middleware/validationShema.js";
import { createUser } from "../controllers/controller-user.js";
import { createsong, getAllSongs } from "../controllers/controller-song.js";
import '../../middleware/hash.js'

const router = Router();

//CREAR USUARIO CON VALIDACIONES
router.post('/newuser',
validacion, validateSchema, createUser )

//RUTA PARA CREAR/GUARDAR SONG EN PLAYLIST
router.post('/newsong/:id_playlist', createsong )
//RUTA PARA ACCEDER A TODAS LAS CANCIONES
router.get('/getsongs', getAllSongs)


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//RUTAS PARA EL CRUD DE PLAYLIST

//OBTENER TODAS LAS PLAYLISTS
router.get('/getplaylists', getAllPlaylists )

//OBTENER UNA PLAYLIST POR SU ID
router.get('/getplay/:id', getPlaylistId )

//CREAR PLAYLIST
router.post('/createplay/:id_user', createPlaylist)

//EDITAR PLAYLIST
router.put('/updateplay/:id', updatePlaylist)

//ELIMINAR PLAYLIST
router.delete('/deleteplay/:id', deletePlaylist)

export { router };