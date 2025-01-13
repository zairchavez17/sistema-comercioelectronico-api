import express, {Application, Request, Response} from 'express';
import morgan from "morgan";
import productoRouter from './routes/producto.route';
import usuarioRouter from './routes/usuario.route';
import categoriaRouter from './routes/categoria.route';
import rolRouter from './routes/rol.route';
import favoritoRouter from './routes/favorito.route';
import opinionRouter from './routes/opinion.route';
import metodoPagoRouter from './routes/metodo-pago.route';
import metodoEnvioRouter from './routes/metodo-envio.route';
import promocionRouter from './routes/promocion.route';
import pedidoRouter from './routes/pedido.route';
import pedidoDetalleRouter from './routes/pedido-detalle.route';
import { AppDataSource } from './config/db.config';

const app: Application = express();


app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/productos',productoRouter);
app.use('/api/v1/usuarios',usuarioRouter);
app.use('/api/v1/categorias',categoriaRouter);
app.use('/api/v1/roles',rolRouter);
app.use('/api/v1/favoritos',favoritoRouter);
app.use('/api/v1/opiniones',opinionRouter);
app.use('/api/v1/metodosPagos',metodoPagoRouter);
app.use('/api/v1/metodosEnvios',metodoEnvioRouter);
app.use('/api/v1/promociones',promocionRouter);
app.use('/api/v1/pedidos',pedidoRouter);
app.use('/api/v1/pedidosDetalles',pedidoDetalleRouter);



export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}


export default app;