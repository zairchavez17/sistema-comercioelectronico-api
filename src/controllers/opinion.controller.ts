import { Request, Response } from 'express';
import * as opinionService from '../services/opinion.service';
import { Opinion } from '../entities/opinion';
import { Message } from '../enums/messages';
import { BaseResponse } from '../shared/base-response';
import { insertarOpinionSchema, actualizarOpinionSchema } from '../validators/opinion.schema';


export const insertarOpinion = async (req: Request, res: Response) => {
  try {
    console.log('insertarOpinion')
    const { error } = insertarOpinionSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.message, 400));
      return;
    }
    const opinion: Partial<Opinion> = req.body;
    const newOpinion: Opinion = await opinionService.insertarOpinion(opinion);
    res.json(BaseResponse.success(newOpinion, Message.INSERTADO_OK));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}



export const listarOpinion = async (req: Request, res: Response) => {
  try {
    console.log('listarOpinion');
    const opiniones: Opinion[] = await opinionService.listarOpinion();
    res.json(BaseResponse.success(opiniones));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const obtenerOpinion = async (req: Request, res: Response) => {
  try {
    const { idOpinion } = req.params;
    const opinion: Opinion = await opinionService.obtenerOpinion(Number(idOpinion));
    if (!opinion) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    res.json(BaseResponse.success(opinion));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const actualizarOpinion = async (req: Request, res: Response) => {
  try {
    const { idOpinion } = req.params;
    const { error } = actualizarOpinionSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.message, 400));
      return;
    }
    const opinion: Partial<Opinion> = req.body;
    if (!(await opinionService.obtenerOpinion(Number(idOpinion)))) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    const updateOpinion: Opinion = await opinionService.actualizarOpinion(Number(idOpinion), opinion)
    res.json(BaseResponse.success(updateOpinion, Message.ACTUALIZADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const darBajaOpinion = async (req: Request, res: Response) => {
  try {
    const { idOpinion } = req.params;
    if (!(await opinionService.obtenerOpinion(Number(idOpinion)))) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    await opinionService.darBajaOpinion(Number(idOpinion));
    res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}