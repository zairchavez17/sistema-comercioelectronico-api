import { Request, Response } from 'express';
import * as rolService from '../services/rol.service';
import { Rol } from '../entities/rol';
import { BaseResponse } from '../shared/base-response';
import { Message } from '../enums/messages';
import { insertarRolSchema, actualizarRolSchema } from '../validators/rol.schema';



export const insertarRol = async (req: Request, res: Response) => {
  try {
    console.log('insertarRol')
    const { error } = insertarRolSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.message, 400));
      return;
    }
    const rol: Partial<Rol> = req.body;
    const newRol: Rol = await rolService.insertarRol(rol);
    res.json(BaseResponse.success(newRol, Message.INSERTADO_OK));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const listarRol = async (req: Request, res: Response) => {
  try {
    console.log('listarRol');
    const roles: Rol[] = await rolService.listarRol();
    res.json(BaseResponse.success(roles));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const obtenerRol = async (req: Request, res: Response) => {
  try {
    const { idRol } = req.params;
    const rol: Rol = await rolService.obtenerRol(Number(idRol));
    if (!rol) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    res.json(BaseResponse.success(rol));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}


export const actualizarRol = async (req: Request, res: Response) => {
  try {
    const { idRol } = req.params;
    const { error } = actualizarRolSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.message, 400));
      return;
    }
    const rol: Partial<Rol> = req.body;
    if (!(await rolService.obtenerRol(Number(idRol)))) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    const updateRol: Rol = await rolService.actualizarRol(Number(idRol), rol)
    res.json(BaseResponse.success(updateRol, Message.ACTUALIZADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
};


export const darBajaRol = async (req: Request, res: Response) => {
  try {
    const { idRol } = req.params;
    if (!(await rolService.obtenerRol(Number(idRol)))) {
      res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
      return;
    }
    await rolService.darBajaRol(Number(idRol));
    res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}
