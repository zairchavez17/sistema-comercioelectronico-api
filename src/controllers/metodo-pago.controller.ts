import { Request, Response } from 'express';
import * as metodoPagoService from '../services/metodo-pago.service';
import { MetodoPago } from '../entities/metodo-pago';
import { BaseResponse } from '../shared/base-response';
import { Message } from '../enums/messages';
import { insertarMetodoPagoSchema, actualizarMetodoPagoSchema } from '../validators/metodo-pago.schema';




export const insertarMetodoPago = async (req: Request, res: Response) => {
  try {
    console.log('insertarMetodoPago')
    const { error } = insertarMetodoPagoSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.message, 400));
      return;
    }
    const metodoPago: Partial<MetodoPago> = req.body;
    const newMetodoPago: MetodoPago = await metodoPagoService.insertarMetodoPago(metodoPago);
    res.json(BaseResponse.success(newMetodoPago, Message.INSERTADO_OK));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}



export const listarMetodoPago = async (req: Request, res: Response) => {
  try {
    console.log('listarMetodoPago');
    const metodosPago: MetodoPago[] = await metodoPagoService.listarMetodoPago();
    res.json(BaseResponse.success(metodosPago));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const obtenerMetodoPago = async (req: Request, res: Response) => {
  try {
    const { idMetodoPago } = req.params;
    const metodoPago: MetodoPago = await metodoPagoService.obtenerMetodoPago(Number(idMetodoPago));
    if (!metodoPago) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    res.json(BaseResponse.success(metodoPago));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const actualizarMetodoPago = async (req: Request, res: Response) => {
  try {
    const { idMetodoPago } = req.params;
    const { error } = actualizarMetodoPagoSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.message, 400));
      return;
    }
    const metodoPago: Partial<MetodoPago> = req.body;
    if (!(await metodoPagoService.obtenerMetodoPago(Number(idMetodoPago)))) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    const updateMetodoPago: MetodoPago = await metodoPagoService.actualizarMetodoPago(Number(idMetodoPago), metodoPago)
    res.json(BaseResponse.success(updateMetodoPago, Message.ACTUALIZADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const darBajaMetodoPago = async (req: Request, res: Response) => {
  try {
    const { idMetodoPago } = req.params;
    if (!(await metodoPagoService.obtenerMetodoPago(Number(idMetodoPago)))) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    await metodoPagoService.darBajaMetodoPago(Number(idMetodoPago));
    res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}