import { AppDataSource } from "../config/db.config";
import { Categoria } from "../entities/categoria";
import { EstadoAuditoria } from "../enums/estado-auditoria";


const repository = AppDataSource.getRepository(Categoria);


export const insertarCategoria = async (data: Partial<Categoria>): Promise<Categoria> => {
    const newCategoria: Categoria = await repository.save(data);
    return await repository.findOne({where: {idCategoria: newCategoria.idCategoria}});
}



export const listarCategoria = async (): Promise<Categoria[]> => {
    return await repository.find({where: {estadoAuditoria: EstadoAuditoria.ACTIVO}});
}


export const obtenerCategoria = async (idCategoria: number): Promise<Categoria> => {
    return await repository.findOne({where: {idCategoria, estadoAuditoria: EstadoAuditoria.ACTIVO}});
}

export const actualizarCategoria = async (idCategoria: number, data: Partial<Categoria>): Promise<Categoria> => {
    await repository.update(idCategoria,data);
    return obtenerCategoria(idCategoria);
}

export const darBajaCategoria = async (idCategoria: number): Promise<void> => {
    await repository.update(idCategoria,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}