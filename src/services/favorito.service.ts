import { AppDataSource } from "../config/db.config";
import { Favorito } from "../entities/favorito";
import { EstadoAuditoria } from "../enums/estado-auditoria";



const repository = AppDataSource.getRepository(Favorito);


export const insertarFavorito = async (data: Partial<Favorito>): Promise<Favorito> => {
    const newFavorito: Favorito = await repository.save(data);
    return await repository.findOne({where: {idFavorito: newFavorito.idFavorito}});
}



export const listarFavorito = async (): Promise<Favorito[]> => {
    return await repository.find({
        where: {estadoAuditoria: EstadoAuditoria.ACTIVO},
        relations: ['usuario','producto']      
    });
}


export const obtenerFavorito = async (idFavorito: number): Promise<Favorito> => {
    return await repository.findOne({
        where: {idFavorito, estadoAuditoria: EstadoAuditoria.ACTIVO}, 
        relations: ['usuario','producto']});
}

export const actualizarFavorito = async (idFavorito: number, data: Partial<Favorito>): Promise<Favorito> => {
    await repository.update(idFavorito,data);
    return obtenerFavorito(idFavorito);
}

export const darBajaFavorito = async (idFavorito: number): Promise<void> => {
    await repository.update(idFavorito,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}