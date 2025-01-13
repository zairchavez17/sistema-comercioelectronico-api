import { Request, Response } from 'express';
import * as metodoEnvioService from '../services/metodo-envio.service';
import { MetodoEnvio } from '../entities/metodo-envio';
import { BaseResponse } from '../shared/base-response';
import { Message } from '../enums/messages';
import { insertarMetodoEnvioSchema, actualizarMetodoEnvioSchema } from '../validators/metodo-envio.schema';


export const insertarMetodoEnvio = async (req: Request, res: Response) => {
  try {
    console.log('insertarMetodoEnvio')
    const { error } = insertarMetodoEnvioSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.message, 400));
      return;
    }
    const metodoEnvio: Partial<MetodoEnvio> = req.body;
    const newMetodoEnvio: MetodoEnvio = await metodoEnvioService.insertarMetodoEnvio(metodoEnvio);
    res.json(BaseResponse.success(newMetodoEnvio, Message.INSERTADO_OK));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}



export const listarMetodoEnvio = async (req: Request, res: Response) => {
  try {
    console.log('listarMetodoEnvio');
    const metodosEnvio: MetodoEnvio[] = await metodoEnvioService.listarMetodoEnvio();
    res.json(BaseResponse.success(metodosEnvio));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const obtenerMetodoEnvio = async (req: Request, res: Response) => {
  try {
    const { idMetodoEnvio } = req.params;
    const metodoEnvio: MetodoEnvio = await metodoEnvioService.obtenerMetodoEnvio(Number(idMetodoEnvio));
    if (!metodoEnvio) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    res.json(BaseResponse.success(metodoEnvio));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const actualizarMetodoEnvio = async (req: Request, res: Response) => {
  try {
    const { idMetodoEnvio } = req.params;
    const { error } = actualizarMetodoEnvioSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.message, 400));
      return;
    }
    const metodoEnvio: Partial<MetodoEnvio> = req.body;
    if (!(await metodoEnvioService.obtenerMetodoEnvio(Number(idMetodoEnvio)))) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    const updateMetodoEnvio: MetodoEnvio = await metodoEnvioService.actualizarMetodoEnvio(Number(idMetodoEnvio), metodoEnvio)
    res.json(BaseResponse.success(updateMetodoEnvio, Message.ACTUALIZADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const darBajaMetodoEnvio = async (req: Request, res: Response) => {
  try {
    const { idMetodoEnvio } = req.params;
    if (!(await metodoEnvioService.obtenerMetodoEnvio(Number(idMetodoEnvio)))) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    await metodoEnvioService.darBajaMetodoEnvio(Number(idMetodoEnvio));
    res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}