# Sistema de Comercio Electrónico API

## Descripción del Proyecto

Este proyecto es una plataforma para la compra y venta de productos en línea. Los objetivos son gestionar productos, usuarios, pedidos y pagos de manera eficiente mediante una base de datos bien diseñada.

## Tecnologías Utilizadas

- Node.js
- TypeScript
- Express.js
- MySQL
- TypeORM
- dotenv
- dbdiagram.io (para diseño de la base de datos)

## Entorno de Desarrollo

### Instrucciones para Configurar y Ejecutar el Proyecto

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu_usuario/sistema-comercioelectronico-api.git
   cd sistema-comercioelectronico-api

## Instalar las dependencias:

npm install


## Ejecutar las migraciones:
npm run migrate
## iNICIAR EL SERVIDOR 
npm start
Estructura del Proyecto
/src: Código fuente principal

/config: Configuración del proyecto

db.config.ts

/controllers: Controladores de la aplicación

categoria.controller.ts, producto.controller.ts, usuario.controller.ts

/entities: Modelos de datos

categoria.ts, producto.ts, rol.ts, usuario.ts

/enums: Enumeraciones utilizadas en la aplicación

estado-auditoria.ts, message.ts

/mappers: Mappeadores de datos

/routes: Rutas de la API

categoria.route.ts, producto.route.ts, usuario.route.ts

/services: Servicios de la aplicación

categoria.service.ts, producto.service.ts, usuario.service.ts

/shared: Constantes y utilidades compartidas

base-response.ts, constants.ts

app.ts: Configuración de la aplicación principal

server.ts: Configuración del servidor

.env: Archivo de configuración de variables de entorno

package.json: Archivo de configuración de npm

tsconfig.json: Archivo de configuración de TypeScript

README.md: Documento de descripción del proyecto


## Integrantes del Equipo

. Zair Alexis Chavez Peña


.Angie Nicole Olivera Contreras


. Aldair Hairo Soriano Patricio