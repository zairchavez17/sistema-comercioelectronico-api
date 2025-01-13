import { Request, Response } from 'express';
import { Pedido } from "../entities/pedido";
import * as pedidoService from '../services/pedido.service';
import { BaseResponse } from "../shared/base-response";
import { Message } from "../enums/messages";
import { insertarPedidoSchema, actualizarPedidoSchema } from '../validators/pedido.schema';




export const insertarPedido = async (req: Request, res: Response) => {
    try {
        console.log('insertarPedido')
        const { error } = insertarPedidoSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const pedido: Partial<Pedido> = req.body;
        const newPedido: Pedido = await pedidoService.insertarPedido(pedido);
        res.json(BaseResponse.success(newPedido, Message.INSERTADO_OK));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}



export const listarPedido = async (req: Request, res: Response) => {
    try {
        console.log('listarPedido');
        const pedidos: Pedido[] = await pedidoService.listarPedido();
        res.json(BaseResponse.success(pedidos));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const obtenerPedido = async (req: Request, res: Response) => {
    try {
        const { idPedido } = req.params;
        const pedido: Pedido = await pedidoService.obtenerPedido(Number(idPedido));
        if (!pedido) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(pedido));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const actualizarPedido = async (req: Request, res: Response) => {
    try {
        const { idPedido } = req.params;
        const { error } = actualizarPedidoSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const pedido: Partial<Pedido> = req.body;
        if (!(await pedidoService.obtenerPedido(Number(idPedido)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const updatePedido: Pedido = await pedidoService.actualizarPedido(Number(idPedido), pedido)
        res.json(BaseResponse.success(updatePedido, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaPedido = async (req: Request, res: Response) => {
    try {
        const { idPedido } = req.params;
        if (!(await pedidoService.obtenerPedido(Number(idPedido)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        await pedidoService.darBajaPedido(Number(idPedido));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}