import { Router } from "express";
import { actualizarMetodoPago, darBajaMetodoPago, insertarMetodoPago, listarMetodoPago, obtenerMetodoPago } from "../controllers/metodo-pago.controller";


const router : Router = Router();

router.post('/',insertarMetodoPago);
router.get('/',listarMetodoPago);
router.get('/:idMetodoPago',obtenerMetodoPago);
router.put('/:idMetodoPago',actualizarMetodoPago);
router.delete('/:idMetodoPago',darBajaMetodoPago);

export default router;