import app, { startServer } from "./app";

const PORT:number = 3000;

const main = async () => {
    await startServer();
    app.listen(PORT,()=>{console.log(`La app esta escuchando en el puerto ${PORT}`)});
}

main();



/**
 *-producto

{
    "categoria":{
        "idCategoria": 1
},
    "nombre": "Apple iPhone 15 Pro Max",
    "descripcion": "256 GB - Titanio Natural",
    "imagenUrl": "https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp",
    "precioUnitario": "5186",
    "stock": "5"
}



{
    "categoria":{
        "idCategoria": 2
},
    "nombre": "Apple Macbook Pro 14",
    "descripcion": "Chip M3 (2023) 8gb Ram / Ssd 512gb",
    "imagenUrl": "https://http2.mlstatic.com/D_NQ_NP_899613-MPE72905101750_112023-O.webp",
    "precioUnitario": "5968",
    "stock": "10"
}




-usuario

{
   "rol":{
       "idRol": 1
},
    "nombres": "La",
    "apellidoPaterno": "Le",
    "apellidoMaterno": "Li",
    "fechaNacimiento": "2005-12-17",
    "dni": "78965430",
    "telefono": "999444320",
    "direccion": "Av. la luna",
    "correo": "la@gmail.com",
    "clave": "778"
}



 */