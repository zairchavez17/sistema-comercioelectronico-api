import { Router } from "express";
import { actualizarFavorito, darBajaFavorito, insertarFavorito, listarFavorito, obtenerFavorito } from "../controllers/favorito.controller";


const router: Router = Router();

router.post('/', insertarFavorito);
router.get('/', listarFavorito);
router.get('/:idFavorito', obtenerFavorito);
router.put('/:idFavorito', actualizarFavorito);
router.delete('/:idFavorito', darBajaFavorito);


export default router;
