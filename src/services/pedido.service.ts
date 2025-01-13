import { AppDataSource } from "../config/db.config";
import { Pedido } from "../entities/pedido";
import { EstadoAuditoria } from "../enums/estado-auditoria";



const repository = AppDataSource.getRepository(Pedido);

export const insertarPedido = async (data: Partial<Pedido>): Promise<Pedido> => {
    const newPedido: Pedido = await repository.save(data);
    return await repository.findOne({where: {idPedido: newPedido.idPedido}});
}




export const listarPedido = async (): Promise<Pedido[]> => {
    return await repository.find({
        where: {estadoAuditoria: EstadoAuditoria.ACTIVO},
        relations: ['usuario','metodoPago','metodoEnvio']
    });
}




export const obtenerPedido = async (idPedido: number): Promise<Pedido> => {
    return await repository.findOne({
        where: {idPedido, estadoAuditoria: EstadoAuditoria.ACTIVO},
        relations: ['usuario','metodoPago','metodoEnvio']
    });
}



export const actualizarPedido = async (idPedido: number, data: Partial<Pedido>): Promise<Pedido> => {
    await repository.update(idPedido,data);
    return obtenerPedido(idPedido);
}


export const darBajaPedido = async (idPedido: number): Promise<void> => {
    await repository.update(idPedido,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}