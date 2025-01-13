import { Router } from "express";
import { actualizarRol, darBajaRol, insertarRol, listarRol, obtenerRol } from "../controllers/rol.controller";



const router : Router = Router();

router.post('/',insertarRol);
router.get('/',listarRol);
router.get('/:idRol',obtenerRol);
router.put('/:idRol',actualizarRol);
router.delete('/:idRol',darBajaRol);



export default router;