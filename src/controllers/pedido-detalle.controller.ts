import { Request, Response } from 'express';
import { PedidoDetalle } from '../entities/pedido-detalle';
import * as pedidoDetalleService from '../services/pedido-detalle.service';
import { BaseResponse } from '../shared/base-response';
import { Message } from '../enums/messages';
import { insertarPedidoDetalleSchema, actualizarPedidoDetalleSchema } from '../validators/pedido-detalle.schema';



export const insertarPedidoDetalle = async (req: Request, res: Response) => {

    try {
        console.log('insertarPedidoDetalle');
        const { error } = insertarPedidoDetalleSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const pedidoDetalle: Partial<PedidoDetalle> = req.body;
        const newPedidoDetalle: PedidoDetalle = await pedidoDetalleService.insertarPedidoDetalle(pedidoDetalle);
        res.json(BaseResponse.success(newPedidoDetalle, Message.INSERTADO_OK));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const listarPedidoDetalle = async (req: Request, res: Response) => {

    try {
        console.log('listarPedidoDetalle');
        const pedidosDetales: PedidoDetalle[] = await pedidoDetalleService.listarPedidoDetalle();
        res.json(BaseResponse.success(pedidosDetales));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const obtenerPedidoDetalle = async (req: Request, res: Response) => {
    try {

        const { idPedidoDetalle } = req.params;
        const pedidoDetalle: PedidoDetalle = await pedidoDetalleService.obtenerPedidoDetalle(Number(idPedidoDetalle));
        if (!pedidoDetalle) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(pedidoDetalle));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const actualizarPedidoDetalle = async (req: Request, res: Response) => {

    try {
        const { idPedidoDetalle } = req.params;
        const { error } = actualizarPedidoDetalleSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const pedidoDetalle: Partial<PedidoDetalle> = req.body;
        if (!(await pedidoDetalleService.obtenerPedidoDetalle(Number(idPedidoDetalle)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const updatePedidoDetalle: PedidoDetalle = await pedidoDetalleService.actualizarPedidoDetalle(Number(idPedidoDetalle), pedidoDetalle);
        res.json(BaseResponse.success(updatePedidoDetalle, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const darBajaPedidoDetalle = async (req: Request, res: Response) => {

    try {
        const { idPedidoDetalle } = req.params;
        if (!(await pedidoDetalleService.obtenerPedidoDetalle(Number(idPedidoDetalle)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        await pedidoDetalleService.darBajaPedidoDetalle(Number(idPedidoDetalle));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


