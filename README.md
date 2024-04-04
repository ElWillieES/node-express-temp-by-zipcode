# Node Express Temp By Zipcode

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=ffffff)&nbsp;
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)&nbsp;

Más ejemplos de Badges en [markdown-badges](https://ileriayo.github.io/markdown-badges/), [Badges 4 README.md Profile](https://github.com/alexandresanlim/Badges4-README.md-Profile) y [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

## Introducción

**Node Express Temp By Zipcode** es una aplicación Web de ejemplo, desarrollada con Node.js y Express.js, que incluye lo siguiente:

* Una **API /api/zip/** que espera como parámetro de ruta un ZIP Code (ej: /api/zip/12345), y devuelve un JSON con el ZIP Code y la temperutara del mismo (ej: {"zipcode":"12345","temperature":24}). El valor de temperatura se genera de manera aleatoria (random), ya que tiene un fin didáctico. Para esta API se utiliza una **ruta basada en una expresión regular**.
* Una **página HTML (home)** renderizada en el servidor, mediante **EJS** (Embedded JavaScript), con un formulario que pregunta al usuario por un ZIP Code. Al hacer click en el botón, se llama a la anterior API (mediante **jQuery**), y se muestra el resultado.

Hay otros detalles, como por ejemplo la entrega de contenidos estáticos (ej: CSS y JavaScript) así como otros contenidos HTML dinámicos mediante EJS (ej: header, footer, y una página para los 404).

## Estructura de ficheros del repo

El código del repo está organizado de la siguiente manera:

- **app/**: Contiene el código fuente de la aplicación.
  - **node_modules/**: Almacena las dependencias del proyecto (ej: al instalarlas con npm install), incluido en el .gitignore para no subirlo al repo.
  - **public/**: Contiene los ficheros estáticos de la aplicación Web, como podrían ser ficheros CSS, JavaScript, HTML, imágenes, etc.
    - **main.css**: Hoja de estilos CSS.
    - **main.js**: JavaScript de cliente, para su ejecución en el navegador.
  - **views/**: Contiene las vistas EJS (Embedded JavaScript), es decir, las páginas (o fragmentos como podría ser un footer o un header) de la aplicación Web.
    - **404.ejs**: Página de error 404, cuando se intenta acceder a una página que no existe
    - **footer.ejs**: Pié de página.
    - **header.ejs**: Encabezado de página.
    - **index.ejs**: Página principal
  - **index.js**: Archivo principal que configura y arranca la aplicación.
  - **package-lock.json**: Archivo de metadatos para fijar de manera precisa las versiones exactas de todas las dependencias y sus subdependencias.
  - **package.json**: Archivo de configuración de npm con las dependencias y scripts del proyecto.

- **.dockerignore**: Archivo que especifica los archivos y carpetas que deben ser excluidos durante el proceso de construcción de la imagen Docker (similar al archivo .gitignore).
- **.gitignore**: Archivo que especifica los archivos y carpetas que deben ser ignorados por Git.
- **Dockerfile**: Archivo Dockerfile para ejecutar la aplicación dockerizada.
- **README.md**: Documentación principal del proyecto.

## Módulos de Node.js utilizados (dependencias)

Revisar el fichero **package.json** para mayor detalle.

### Dependencias de Desarrollo

| Dependencia               | Motivo
|---------------------------|-------
| nodemon                   | Permite reiniciar automáticamente la aplicación al detectar una cambio en un fichero (útil durante el desarrollo y pruebas en local)

### Dependencias de Producción

| Dependencia         | Motivo
|---------------------|-------
| cross-env           | Permite establecer y utilizar variables de entorno de manera uniforme en diferentes plataformas, como Windows, Linux y macOS
| ejs                 | Motor de plantillas EJS (Embedded JavaScript) para generar HTML de forma dinámica
| express             | Es un servidor Web para Node.js (Web Application Framework)
| express-request-id  | Añade a la petición entrante (request) un campo id con un valor único, y lo añade en la respuesta (response) al encabezado X-Request-Id, para tener trazabilidad 
| morgan              | Es un Logger para el registro de peticiones HTTP


## Cómo ejecutar en local el proyecto, de forma dockerizada

A continuación se muestra:

* Cómo crear una imagen en local con docker build.
* Cómo listar las imágenes que tenemos disponibles en local. Deberá aparecer la que acabamos de crear.
* Cómo ejecutar un contenedor con nuestra imagen.
* Cómo comprobar los contenedores que se están ejecutando (estará el nuestro).
* Cómo ver los Logs de nuestro contenedor.
* Cómo parar el contenedor.

```shell
docker build -t node-express-temp-by-zipcode .
docker images
docker run -it --rm -d -p 3000:3000 --name node-express-temp-by-zipcode node-express-temp-by-zipcode
docker ps
docker logs node-express-temp-by-zipcode
docker stop node-express-temp-by-zipcode
```

## Cómo ejecutar en local el proyecto, de forma nativa

Nos posicionamos en el directorio de la aplicación (app).

```shell
cd app
```

Instalamos las dependencias, si no lo hemos hecho anteriormente.

```shell
npm install
```

Podemos ejecutar la aplicación, en modo DEV, así.

```shell
npm run dev
```

O ejecutarla, en modo Prod, así.

```shell
npm start
```
