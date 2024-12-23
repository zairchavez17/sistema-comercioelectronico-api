import { Request, Response } from 'express';
import * as productoService from '../services/producto.service';
import { Producto } from '../entities/producto';
import { BaseResponse } from '../shared/base-response';
import { Message } from '../enums/messages';



export const insertarProducto = async (req: Request, res: Response) => {
    try {
        console.log('insertarProducto')
        const producto: Partial<Producto> = req.body;
        const newProducto: Producto = await productoService.insertarProducto(producto);
        res.json(BaseResponse.success(newProducto,Message.INSERTADO_OK));
    } catch (error) {
        console.log(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}



export const listarProducto = async (req: Request, res: Response) => {
   try {
    console.log('listarProducto');
    const productos: Producto[] = await productoService.listarProducto();
    res.json(BaseResponse.success(productos));
   } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error(error.message));
   }
}

export const obtenerProducto = async (req: Request, res: Response) => {
  try {
    const { idProducto } = req.params;
    const producto: Producto = await productoService.obtenerProducto(Number(idProducto));
    if(!producto){
        res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
        return;
    }
    res.json(BaseResponse.success(producto));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const actualizarProducto = async (req: Request, res: Response) => {
  try {
    const { idProducto } = req.params;
    const producto: Partial<Producto> = req.body;
    if(!(await productoService.obtenerProducto(Number(idProducto)))){
        res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
        return;
    }
    const updateProducto: Producto = await productoService.actualizarProducto(Number(idProducto),producto)
    res.json(BaseResponse.success(updateProducto, Message.ACTUALIZADO_OK));
  } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
  }
}

export const darBajaProducto = async (req: Request, res: Response) => {
   try {
    const { idProducto } = req.params;
    if(!(await productoService.obtenerProducto(Number(idProducto)))){
        res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
        return;
    }
    await productoService.darBajaProducto(Number(idProducto));
    res.json(BaseResponse.success(null,Message.ELIMINADO_OK));
   } catch (error) {
    console.error(error);
    res.status(500).json(BaseResponse.error(error.message));
   }
}