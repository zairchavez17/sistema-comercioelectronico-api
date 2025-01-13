import { Router } from "express";
import { actualizarMetodoEnvio, darBajaMetodoEnvio, insertarMetodoEnvio, listarMetodoEnvio, obtenerMetodoEnvio } from "../controllers/metodo-envio.controller";



const router : Router = Router();

router.post('/',insertarMetodoEnvio);
router.get('/',listarMetodoEnvio);
router.get('/:idMetodoEnvio',obtenerMetodoEnvio);
router.put('/:idMetodoEnvio',actualizarMetodoEnvio);
router.delete('/:idMetodoEnvio',darBajaMetodoEnvio);

export default router;