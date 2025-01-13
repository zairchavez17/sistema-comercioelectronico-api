import { Router } from "express";
import { actualizarPedidoDetalle, darBajaPedidoDetalle, insertarPedidoDetalle, listarPedidoDetalle, obtenerPedidoDetalle } from "../controllers/pedido-detalle.controller";


const router: Router = Router();

router.post('/', insertarPedidoDetalle);
router.get('/', listarPedidoDetalle);
router.get('/:idPedidoDetalle', obtenerPedidoDetalle);
router.put('/:idPedidoDetalle', actualizarPedidoDetalle);
router.delete('/:idPedidoDetalle', darBajaPedidoDetalle);

export default router;