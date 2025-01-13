import { Request, Response } from 'express';
import { Promocion } from "../entities/promocion";
import { Message } from "../enums/messages";
import * as promocionService from '../services/promocion.service';
import { BaseResponse } from "../shared/base-response";
import { insertarPromocionSchema, actualizarPromocionSchema } from '../validators/promocion.schema';


export const insertarPromocion = async (req: Request, res: Response) => {

    try {
        console.log('insertarPromocion');
        const { error } = insertarPromocionSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const promocion: Partial<Promocion> = req.body;
        const newPromocion: Promocion = await promocionService.insertarPromocion(promocion);
        res.json(BaseResponse.success(newPromocion, Message.INSERTADO_OK));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const listarPromocion = async (req: Request, res: Response) => {

    try {
        console.log('listarPromocion');
        const promociones: Promocion[] = await promocionService.listarPromocion();
        res.json(BaseResponse.success(promociones));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const obtenerPromocion = async (req: Request, res: Response) => {

    try {
        const { idPromocion } = req.params;
        const promocion: Promocion = await promocionService.obtenerPromocion(Number(idPromocion));
        if (!promocion) {
            res.status(400).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(promocion));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));

    }
}


export const actualizarPromocion = async (req: Request, res: Response) => {

    try {
        const { idPromocion } = req.params;
        const { error } = actualizarPromocionSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const promocion: Partial<Promocion> = req.body;
        if (!(await promocionService.obtenerPromocion(Number(idPromocion)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const updatePromocion: Promocion = await promocionService.actualizarPromocion(Number(idPromocion), promocion);
        res.json(BaseResponse.success(updatePromocion, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const darBajaPromocion = async (req: Request, res: Response) => {

    try {
        const { idPromocion } = req.params;
        if (!(await promocionService.obtenerPromocion(Number(idPromocion)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        await promocionService.darBajaPromocion(Number(idPromocion));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}