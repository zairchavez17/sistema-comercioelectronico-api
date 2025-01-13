import { AppDataSource } from "../config/db.config";
import { MetodoPago } from "../entities/metodo-pago";
import { EstadoAuditoria } from "../enums/estado-auditoria";




const repository = AppDataSource.getRepository(MetodoPago);


export const insertarMetodoPago = async (data: Partial<MetodoPago>): Promise<MetodoPago> => {
    const newMetodoPago: MetodoPago = await repository.save(data);
    return await repository.findOne({where: {idMetodoPago: newMetodoPago.idMetodoPago}});
}



export const listarMetodoPago = async (): Promise<MetodoPago[]> => {
    return await repository.find({where: {estadoAuditoria: EstadoAuditoria.ACTIVO}});
}


export const obtenerMetodoPago = async (idMetodoPago: number): Promise<MetodoPago> => {
    return await repository.findOne({where: {idMetodoPago, estadoAuditoria: EstadoAuditoria.ACTIVO},});
}

export const actualizarMetodoPago = async (idMetodoPago: number, data: Partial<MetodoPago>): Promise<MetodoPago> => {
    await repository.update(idMetodoPago,data);
    return obtenerMetodoPago(idMetodoPago);
}

export const darBajaMetodoPago = async (idMetodoPago: number): Promise<void> => {
    await repository.update(idMetodoPago,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}