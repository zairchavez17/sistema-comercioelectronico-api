import { AppDataSource } from "../config/db.config";
import { PedidoDetalle } from "../entities/pedido-detalle";
import { EstadoAuditoria } from "../enums/estado-auditoria";


const repository = AppDataSource.getRepository(PedidoDetalle);

export const insertarPedidoDetalle = async(data: Partial<PedidoDetalle>): Promise<PedidoDetalle> => {

    const newPedidoDetalle: PedidoDetalle = await repository.save(data);
    return await repository.findOne({where: {idPedidoDetalle: newPedidoDetalle.idPedidoDetalle}});
}


export const listarPedidoDetalle = async(): Promise<PedidoDetalle[]> => {

    return await repository.find({
        where:{estadoAuditoria:EstadoAuditoria.ACTIVO},
        relations:['pedido','producto']
    });
}


export const obtenerPedidoDetalle = async(idPedidoDetalle:number): Promise<PedidoDetalle> => {

    return await repository.findOne({
        where:{idPedidoDetalle,estadoAuditoria:EstadoAuditoria.ACTIVO},
        relations:['pedido','producto']
    });
}


export const actualizarPedidoDetalle = async(idPedidoDetalle:number,data:Partial<PedidoDetalle>): Promise<PedidoDetalle>=>{

     await repository.update(idPedidoDetalle,data);
     return obtenerPedidoDetalle(idPedidoDetalle);
}


export const darBajaPedidoDetalle = async(idPedidoDetalle:number):Promise<void> => {

    await repository.update(idPedidoDetalle,{estadoAuditoria:EstadoAuditoria.INACTIVO});
}