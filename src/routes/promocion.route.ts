import { Router } from "express";
import { insertarPromocion, listarPromocion, obtenerPromocion, actualizarPromocion, darBajaPromocion } from "../controllers/promocion.controller";



const router : Router = Router();


router.post('/',insertarPromocion);
router.get('/',listarPromocion);
router.get('/:idPromocion',obtenerPromocion);
router.put('/:idPromocion',actualizarPromocion);
router.delete('/:idPromocion',darBajaPromocion);



export default router;