import Joi from 'joi';

export const insertarPedidoSchema = Joi.object({

    fechaPedido: Joi.date()
        .required(),

    numeroFactura: Joi.string()
        .min(5)
        .max(20)
        .pattern(/^[A-Za-z0-9-]+$/)
        .required(),

    facturaUrl: Joi.string()
        .uri()
        .max(500)
        .optional(),

    total: Joi.number()
        .positive()
        .precision(2)
        .greater(0)
        .required(),

    estado: Joi.string()
        .min(3)
        .max(20)
        .optional(),

    usuario: Joi.object({
        idUsuario: Joi.number()
            .integer()
            .required()
    }).required(),

    metodoPago: Joi.object({
        idMetodoPago: Joi.number()
            .integer()
            .required()
    }).required(),

    metodoEnvio: Joi.object({
        idMetodoEnvio: Joi.number()
            .integer()
            .required()
    }).required()
});


export const actualizarPedidoSchema = Joi.object({

    fechaPedido: Joi.date()
        .optional(),

    numeroFactura: Joi.string()
        .min(5)
        .max(20)
        .pattern(/^[A-Za-z0-9-]+$/)
        .optional(),

    facturaUrl: Joi.string()
        .uri()
        .max(500)
        .optional(),

    total: Joi.number()
        .positive()
        .precision(2)
        .greater(0)
        .optional(),

    estado: Joi.string()
        .min(3)
        .max(20)
        .optional(),

    usuario: Joi.object({
        idUsuario: Joi.number()
            .integer()
            .required()
    }).optional(),

    metodoPago: Joi.object({
        idMetodoPago: Joi.number()
            .integer()
            .required()
    }).optional(),

    metodoEnvio: Joi.object({
        idMetodoEnvio: Joi.number()
            .integer()
            .required()
    }).optional()
});
