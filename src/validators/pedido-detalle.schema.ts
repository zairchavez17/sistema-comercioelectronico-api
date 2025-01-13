import Joi from 'joi';

export const insertarPedidoDetalleSchema = Joi.object({


    precioUnitario: Joi.number()
        .positive()
        .precision(2)
        .required(),

    cantidad: Joi.number()
        .integer()
        .positive()
        .required(),

    subtotal: Joi.number()
        .positive()
        .precision(2)
        .required(),

    igv: Joi.number()
        .positive()
        .precision(2)
        .required(),

    pedido: Joi.object({
        idPedido: Joi.number()
            .integer()
            .required(),
    }).required(),

    producto: Joi.object({
        idProducto: Joi.number()
            .integer()
            .required(),
    }).required(),

});


export const actualizarPedidoDetalleSchema = Joi.object({

    precioUnitario: Joi.number()
        .positive()
        .precision(2)
        .optional(),

    cantidad: Joi.number()
        .integer()
        .positive()
        .optional(),

    subtotal: Joi.number()
        .positive()
        .precision(2)
        .optional(),

    igv: Joi.number()
        .positive()
        .precision(2)
        .optional(),

    pedido: Joi.object({
        idPedido: Joi.number()
            .integer()
            .required(),
    }).optional(),

    producto: Joi.object({
        idProducto: Joi.number()
            .integer()
            .required(),
    }).optional(),

});
