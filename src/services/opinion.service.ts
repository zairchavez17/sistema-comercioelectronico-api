import { AppDataSource } from "../config/db.config";
import { Opinion } from "../entities/opinion";
import { EstadoAuditoria } from "../enums/estado-auditoria";



const repository = AppDataSource.getRepository(Opinion);


export const insertarOpinion = async (data: Partial<Opinion>): Promise<Opinion> => {
    const newOpinion: Opinion = await repository.save(data);
    return await repository.findOne({where: {idOpinion: newOpinion.idOpinion}});
}



export const listarOpinion = async (): Promise<Opinion[]> => {
    return await repository.find({
        where: {estadoAuditoria: EstadoAuditoria.ACTIVO},
        relations: ['producto','usuario']      
    });
}


export const obtenerOpinion = async (idOpinion: number): Promise<Opinion> => {
    return await repository.findOne({
        where: {idOpinion, estadoAuditoria: EstadoAuditoria.ACTIVO}, 
        relations: ['producto','usuario']});
}

export const actualizarOpinion = async (idOpinion: number, data: Partial<Opinion>): Promise<Opinion> => {
    await repository.update(idOpinion,data);
    return obtenerOpinion(idOpinion);
}

export const darBajaOpinion = async (idOpinion: number): Promise<void> => {
    await repository.update(idOpinion,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}