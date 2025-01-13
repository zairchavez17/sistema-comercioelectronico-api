import { Request, Response } from 'express';
import * as favoritoService from '../services/favorito.service';
import { Favorito } from '../entities/favorito';
import { Message } from '../enums/messages';
import { BaseResponse } from '../shared/base-response';
import { insertarFavoritoSchema, actualizarFavoritoSchema } from '../validators/favorito.schema';


export const insertarFavorito = async (req: Request, res: Response) => {
  try {
    console.log('insertarFavorito')
    const { error } = insertarFavoritoSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.message, 400));
      return;
    }
    const favorito: Partial<Favorito> = req.body;
    const newFavorito: Favorito = await favoritoService.insertarFavorito(favorito);
    res.json(BaseResponse.success(newFavorito, Message.INSERTADO_OK));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}



export const listarFavorito = async (req: Request, res: Response) => {
  try {
    console.log('listarFavorito');
    const favoritos: Favorito[] = await favoritoService.listarFavorito();
    res.json(BaseResponse.success(favoritos));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const obtenerFavorito = async (req: Request, res: Response) => {
  try {
    const { idFavorito } = req.params;
    const favorito: Favorito = await favoritoService.obtenerFavorito(Number(idFavorito));
    if (!favorito) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    res.json(BaseResponse.success(favorito));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const actualizarFavorito = async (req: Request, res: Response) => {
  try {
    const { idFavorito } = req.params;
    const { error } = actualizarFavoritoSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.message, 400));
      return;
    }
    const favorito: Partial<Favorito> = req.body;
    if (!(await favoritoService.obtenerFavorito(Number(idFavorito)))) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    const updateFavorito: Favorito = await favoritoService.actualizarFavorito(Number(idFavorito), favorito)
    res.json(BaseResponse.success(updateFavorito, Message.ACTUALIZADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const darBajaFavorito = async (req: Request, res: Response) => {
  try {
    const { idFavorito } = req.params;
    if (!(await favoritoService.obtenerFavorito(Number(idFavorito)))) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    await favoritoService.darBajaFavorito(Number(idFavorito));
    res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}