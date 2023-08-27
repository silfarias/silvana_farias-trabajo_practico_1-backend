import { getAllPlaylists } from "../controllers/controller-playlist.js";
import { createUser} from "../controllers/controller-user.js";
import { Router } from "express";

const router = Router();

router.post('/newuser', createUser)




//RUTAS PARA EL CRUD DE PLAYLIST
//OBTENER TODAS LAS PLAYLISTS
router.get('/getPlaylists', getAllPlaylists )

export { router };