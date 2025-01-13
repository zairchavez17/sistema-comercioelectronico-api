import Joi from "joi";

export const insertarCategoriaSchema = Joi.object({

    nombre: Joi.string()
        .min(5)
        .max(100)
        .required(),

    descripcion: Joi.string()
        .min(3)
        .max(100)
        .optional()


});

export const actualizarCategoriaSchema = Joi.object({

    nombre: Joi.string()
        .min(5)
        .max(100)
        .optional(),

    descripcion: Joi.string()
        .min(3)
        .max(100)
        .optional()

});