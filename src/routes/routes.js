import { Router } from "express";
import { createPlaylist, deletePlaylist,
getAllPlaylists, getPlaylist, updatePlaylist } from "../controllers/controller-playlist.js";
import { validacion, validateSchema } from "../../middleware/validationShema.js";
import { createUser } from "../controllers/controller-user.js";

const router = Router();

//CREAR USUARIO CON VALIDACIONES
router.post('/newuser',
validacion, validateSchema, createUser )




//RUTAS PARA EL CRUD DE PLAYLIST

//OBTENER TODAS LAS PLAYLISTS
router.get('/getplaylists', getAllPlaylists )

//OBTENER UNA PLAYLIST POR SU ID
router.get('/getplay:id', getPlaylist )

//CREAR PLAYLIST
router.post('/createplay', createPlaylist)

//EDITAR PLAYLIST
router.put('/updateplay', updatePlaylist)

//ELIMINAR PLAYLIST
router.delete('/deleteplay', deletePlaylist)

export { router };