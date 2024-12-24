import express, {Application, Request, Response} from 'express';
import morgan from "morgan";
import productoRouter from './routes/producto.route';
import usuarioRouter from './routes/usuario.route';
import categoriaRouter from './routes/categoria.route';
import rolRouter from './routes/rol.route';
import { AppDataSource } from './config/db.config';

const app: Application = express();

/*
app.get('/saludar',(req:Request, res:Response)=>{
    console.log("Hola estoy saludando");
    res.json({nombre : 'Draken', apellidos : 'can'});
});*/

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/productos',productoRouter);
app.use('/api/v1/usuarios',usuarioRouter);
app.use('/api/v1/categorias',categoriaRouter);
app.use('/api/v1/roles',rolRouter);

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}


export default app;