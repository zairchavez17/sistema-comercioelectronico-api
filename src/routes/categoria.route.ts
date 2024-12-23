import { Router } from "express";
import { actualizarCategoria, darBajaCategoria, insertarCategoria, listarCategoria, obtenerCategoria } from "../controllers/categoria.controller";


const router : Router = Router();

router.post('/',insertarCategoria);
router.get('/',listarCategoria);
router.get('/:idCategoria',obtenerCategoria);
router.put('/:idCategoria',actualizarCategoria);
router.delete('/:idCategoria',darBajaCategoria);



export default router;