import { AppDataSource } from "../config/db.config";
import { MetodoEnvio } from "../entities/metodo-envio";
import { EstadoAuditoria } from "../enums/estado-auditoria";



const repository = AppDataSource.getRepository(MetodoEnvio);


export const insertarMetodoEnvio = async (data: Partial<MetodoEnvio>): Promise<MetodoEnvio> => {
    const newMetodoEnvio: MetodoEnvio = await repository.save(data);
    return await repository.findOne({where: {idMetodoEnvio: newMetodoEnvio.idMetodoEnvio}});
}



export const listarMetodoEnvio = async (): Promise<MetodoEnvio[]> => {
    return await repository.find({where: {estadoAuditoria: EstadoAuditoria.ACTIVO}});
}


export const obtenerMetodoEnvio = async (idMetodoEnvio: number): Promise<MetodoEnvio> => {
    return await repository.findOne({where: {idMetodoEnvio, estadoAuditoria: EstadoAuditoria.ACTIVO},});
}

export const actualizarMetodoEnvio = async (idMetodoEnvio: number, data: Partial<MetodoEnvio>): Promise<MetodoEnvio> => {
    await repository.update(idMetodoEnvio,data);
    return obtenerMetodoEnvio(idMetodoEnvio);
}

export const darBajaMetodoEnvio = async (idMetodoEnvio: number): Promise<void> => {
    await repository.update(idMetodoEnvio,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}