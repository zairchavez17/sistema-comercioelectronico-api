import { Router } from "express";
import { insertarPedido, listarPedido, obtenerPedido, actualizarPedido, darBajaPedido } from "../controllers/pedido.controller";



const router : Router = Router();


router.post('/',insertarPedido);
router.get('/',listarPedido);
router.get('/:idPedido',obtenerPedido);
router.put('/:idPedido',actualizarPedido);
router.delete('/:idPedido',darBajaPedido);



export default router;