import Joi from "joi";

export const insertarMetodoPagoSchema = Joi.object({

    metodo: Joi.string()
        .min(3)
        .max(50)
        .required(),


    estado: Joi.string()
        .min(3)
        .max(20)
        .required(),

});

export const actualizarMetodoPagoSchema = Joi.object({

    metodo: Joi.string()
        .min(3)
        .max(50)
        .optional(),


    estado: Joi.string()
        .min(3)
        .max(20)
        .optional(),
});
