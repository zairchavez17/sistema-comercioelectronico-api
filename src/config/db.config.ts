import { DataSource } from "typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME } from "../shared/constants";
import { Producto } from "../entities/producto";
import { Usuario } from "../entities/usuario";
import { Categoria } from "../entities/categoria";
import { Rol } from "../entities/rol";
import { Promocion } from "../entities/promocion";
import { Favorito } from "../entities/favorito";
import { Opinion } from "../entities/opinion";
import { Pedido } from "../entities/pedido";
import { PedidoDetalle } from "../entities/pedido-detalle";
import { MetodoEnvio } from "../entities/metodo-envio";
import { MetodoPago } from "../entities/metodo-pago";


export const AppDataSource = new DataSource({

    type: DB_TYPE as any,
    host: DB_HOST,
    port: Number(DB_PORT||'0'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [
        Producto,
        Usuario,
        Categoria,
        Rol,
        Promocion,
        Favorito,
        Opinion,
        Pedido,
        PedidoDetalle,
        MetodoEnvio,
        MetodoPago],
    
});