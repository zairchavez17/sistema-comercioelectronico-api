import {Router} from 'express';
import { actualizarProducto, darBajaProducto, insertarProducto, listarProducto, obtenerProducto } from '../controllers/producto.controller';

const router : Router = Router();

router.post('/',insertarProducto);
router.get('/',listarProducto);
router.get('/:idProducto',obtenerProducto);
router.put('/:idProducto',actualizarProducto);
router.delete('/:idProducto',darBajaProducto);



export default router;