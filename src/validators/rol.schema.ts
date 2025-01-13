import Joi from 'joi';

export const insertarRolSchema = Joi.object({

    nombre: Joi.string()
        .min(5)
        .max(20)
        .required(),
    descripcion: Joi.string()
        .min(5)
        .max(50)
        .optional()
});

export const actualizarRolSchema = Joi.object({
    nombre: Joi.string()
        .min(5)
        .max(20)
        .optional(),
    descripcion: Joi.string()
        .min(5)
        .max(50)
        .optional()
});