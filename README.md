# silvana_farias-trabajo_practico_1-backend
Trabajo Práctico N°1 - (parte 1)

Fecha límite de entrega: Lunes 28/08/2023 a las 17:00 hs

Consigas:

● Crear un servidor http que el cual permita hacer las 5 operaciones básicas
sobre una entidad en particular de las que van a estar disponibles más adelante.

● Además, el servidor deberá tener la capacidad de registrar usuarios. La
entidad seleccionada debe tener una relación de uno a muchos con la entidad de
usuarios, lo que significa que un usuario podrá tener varios registros de la
entidad seleccionada. Por lo tanto, si no hay un usuario previamente registrado,
no se podrán crear registros de la entidad seleccionada.

● Los campos de entrada del servidor deben estar validados previamente antes
de llegar a los controladores.

● Aplicar la división de carpetas y archivos correspondiente a cada módulo con
la modularización correspondiente aplicando el patrón de diseño MVC.

● Presentar un documento técnico en el que se detalle la elección de la temática
elegida, el porqué de dicha elección y donde también se grafique con un
formato de red conceptual la lógica que se emplea en dicha temática.

● El documento deberá contener además un diagrama con las tablas y relaciones
se utilizarán en la base de datos.

● El trabajo (código) deberá coincidir concretamente en la lógica y aplicación
de los pasos con lo que se haya graficado en el punto anterior.

● El trabajo (código) deberá obligatoriamente utilizar un sistema ORM (como
Sequelize) para crear las consultas de la base de datos, la cuál, deberá ser
MySQL o PostgreSQL de forma obligatoria sin excepciones.



Instalaciones necesarias:

Dentro del directorio del proyecto ejecutar:
```bash
npm install
```

>> ## Requiere de una base de datos MySQL.

Variables de entorno:
```bash
PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_DIALECT=
```

Configurar en el package.json
```bash
 "scripts": {
    "dev" : "nodemon app.js"
  }
```

Y para ejecutar el proyecto en modo desarrollo:
```bash
npm run dev
```