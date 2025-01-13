import Joi from "joi";

export const insertarMetodoEnvioSchema = Joi.object({

    nombre: Joi.string()
        .min(15)
        .max(50)
        .required(),

    costo: Joi.number()
        .min(0)
        .required,

    direccion: Joi.string()
        .min(3)
        .max(500)
        .required(),

    tiempoEstimado: Joi.number()
        .integer()
        .optional(),

    fechaEnvio: Joi.date()
        .less('now')
        .required(),


    fechaEntrega: Joi.date()
        .less('now')
        .required(),


    estado: Joi.string()
        .min(6)
        .max(20)
        .required(),

});


export const actualizarMetodoEnvioSchema = Joi.object({

    nombre: Joi.string()
        .min(15)
        .max(50)
        .optional(),

    costo: Joi.number()
        .min(0)
        .optional,

    direccion: Joi.string()
        .min(3)
        .max(500)
        .optional(),

    tiempoEstimado: Joi.number()
        .integer()
        .optional(),

    fechaEnvio: Joi.date()
        .less('now')
        .optional(),


    fechaEntrega: Joi.date()
        .less('now')
        .optional(),


    estado: Joi.string()
        .min(6)
        .max(20)
        .optional(),
});
