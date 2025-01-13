import Joi from 'joi';

export const insertarOpinionSchema = Joi.object({

    calificacion: Joi.number()
        .min(0)
        .max(5)
        .required(),

    comentario: Joi.string()
        .min(5)
        .max(50)
        .optional(),

    usuario: Joi.object({
        idUsuario: Joi.number()
            .integer()
            .required()
    }).required(),

    producto: Joi.object({
        idProducto: Joi.number()
            .integer()
            .required()
    }).required()


});

export const actualizarOpinionSchema = Joi.object({

    calificacion: Joi.number()
        .min(0)
        .max(5)
        .optional(),

    comentario: Joi.string()
        .min(5)
        .max(50)
        .optional(),

    usuario: Joi.object({
        idUsuario: Joi.number()
            .integer()
            .optional()
    }).optional()
});