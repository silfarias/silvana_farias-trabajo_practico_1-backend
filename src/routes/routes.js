import { validateSchema } from "../../middleware/validShema.js";
import { body, validationResult } from 'express-validator'
import { createPlaylist, deletePlaylist, getAllPlaylists } from "../controllers/controller-playlist.js";
import { createUser} from "../controllers/controller-user.js";
import { Router } from "express";
import { createUserShema } from "../models/usermodel.js";

const router = Router();

//CREAR USUARIO
router.post('/newuser', createUserShema, createUser)


//RUTAS PARA EL CRUD DE PLAYLIST

//OBTENER TODAS LAS PLAYLISTS
router.get('/getPlaylists', getAllPlaylists )

//CREAR PLAYLIST
router.post('/createplay', createPlaylist)

//ELIMINAR PLAYLIST
router.delete('/deleteplay', deletePlaylist)

export { router };