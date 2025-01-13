import Joi from 'joi';

export const insertarFavoritoSchema = Joi.object({
    
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

export const actualizarFavoritoSchema = Joi.object({

    usuario: Joi.object({
        idUsuario: Joi.number()
            .integer()
            .optional() 
    }).optional(), 

    producto: Joi.object({
        idProducto: Joi.number()
            .integer()
            .optional() 
    }).optional() 
});
