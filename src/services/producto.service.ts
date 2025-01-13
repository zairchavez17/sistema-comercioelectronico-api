import { AppDataSource } from "../config/db.config";
import { Producto } from "../entities/producto";
import { EstadoAuditoria } from "../enums/estado-auditoria";


const repository = AppDataSource.getRepository(Producto);


export const insertarProducto = async (data: Partial<Producto>): Promise<Producto> => {
    const newProducto: Producto = await repository.save(data);
    return await repository.findOne({where: {idProducto: newProducto.idProducto}});
}



export const listarProducto = async (): Promise<Producto[]> => {
    return await repository.find({
        where: {estadoAuditoria: EstadoAuditoria.ACTIVO},
        relations: ['categoria']
    });
}


export const obtenerProducto = async (idProducto: number): Promise<Producto> => {
    return await repository.findOne({
        where: {idProducto, estadoAuditoria: EstadoAuditoria.ACTIVO}, 
        relations: ['categoria']});
}

export const actualizarProducto = async (idProducto: number, data: Partial<Producto>): Promise<Producto> => {
    await repository.update(idProducto,data);
    return obtenerProducto(idProducto);
}

export const darBajaProducto = async (idProducto: number): Promise<void> => {
    await repository.update(idProducto,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}