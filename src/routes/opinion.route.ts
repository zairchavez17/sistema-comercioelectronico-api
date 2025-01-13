import { Router } from "express";
import { actualizarOpinion, darBajaOpinion, insertarOpinion, listarOpinion, obtenerOpinion } from "../controllers/opinion.controller";



const router: Router = Router();

router.post('/', insertarOpinion);
router.get('/', listarOpinion);
router.get('/:idOpinion', obtenerOpinion);
router.put('/:idOpinion', actualizarOpinion);
router.delete('/:idOpinion', darBajaOpinion);


export default router;
