import Joi from "joi";

export const insertarPromocionSchema = Joi.object({

    valorDescuento: Joi.number()
        .positive()
        .precision(2)
        .greater(0)
        .required(),

    codigo: Joi.string()
        .pattern(/^[A-Za-z0-9_-]+$/)
        .optional(),

    fechaInicio: Joi.date()
        .required(),

    fechaFin: Joi.date()
        .required(),

    estado: Joi.string()
        .valid('activo', 'inactivo')
        .required(),

    producto: Joi.object({
        idProducto: Joi.number()
            .integer()
            .required()
    }).required()
});

export const actualizarPromocionSchema = Joi.object({

    valorDescuento: Joi.number()
        .positive()
        .precision(2)
        .greater(0)
        .optional(),

    codigo: Joi.string()
        .pattern(/^[A-Za-z0-9_-]+$/)
        .optional(),

    fechaInicio: Joi.date()
        .optional(),

    fechaFin: Joi.date()
        .optional(),

    estado: Joi.string()
        .valid('activo', 'inactivo')
        .optional(),

    producto: Joi.object({
        idProducto: Joi.number()
            .integer()
            .optional()
    }).optional()
});
