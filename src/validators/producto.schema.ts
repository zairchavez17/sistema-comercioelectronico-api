import Joi from 'joi';

export const insertarProductoSchema = Joi.object({

    nombre: Joi.string()
        .min(3)
        .max(100)
        .required(),
    descripcion: Joi.string()
        .min(5)
        .max(50)
        .optional(),
    imagenUrl: Joi.string()
        .uri()
        .max(500)
        .required(),
    precioUnitario: Joi.number()
        .positive()
        .precision(2)
        .greater(0)
        .required(),

    stock: Joi.number()
        .integer()
        .min(0)
        .required(),

    categoria: Joi.object({
        idCategoria: Joi.number()
            .integer()
            .required()
    }).required()
});



export const actualizarProductoSchema = Joi.object({

    nombre: Joi.string()
        .min(3)
        .max(100)
        .optional(),
    descripcion: Joi.string()
        .min(5)
        .max(50)
        .optional(),
    imagenUrl: Joi.string()
        .uri()
        .max(500)
        .optional(),
    precioUnitario: Joi.number()
        .positive()
        .precision(2)
        .greater(0)
        .optional(),

    stock: Joi.number()
        .integer()
        .min(0)
        .optional(),

    Categoria: Joi.object({
        idCategoria: Joi.number()
            .integer()
            .optional()
    }).optional()

});