import { AppDataSource } from "../config/db.config";
import { Promocion } from "../entities/promocion";
import { EstadoAuditoria } from "../enums/estado-auditoria";



const repository = AppDataSource.getRepository(Promocion);


export const insertarPromocion = async(data: Partial<Promocion>): Promise<Promocion> => {

    const promocion: Promocion = await repository.save(data);
    return await repository.findOne({where: {idPromocion: promocion.idPromocion}});
}


export const listarPromocion = async(): Promise<Promocion[]> => {

    return await repository.find(
        {where: {estadoAuditoria: EstadoAuditoria.ACTIVO},
        relations: ['producto']
    });
}


export const obtenerPromocion = async(idPromocion: number): Promise<Promocion> =>{

    return await repository.findOne({
        where: {idPromocion, estadoAuditoria : EstadoAuditoria.ACTIVO},
        relations: ['producto']
    });
}


export const actualizarPromocion = async(idPromocion: number, data: Partial<Promocion>): Promise<Promocion> => {

    await repository.update(idPromocion,data);
    return obtenerPromocion(idPromocion);
}


export const darBajaPromocion = async(idPromocion: number): Promise<void> => {

    await repository.update(idPromocion,{estadoAuditoria: EstadoAuditoria.INACTIVO});

}