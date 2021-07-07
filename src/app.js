// Módulos
const express = require('express');
const app = express();
const path = require('path');
// Acá falta uno... 😇

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/' );

// Rutas
const mainRoute = require('./routes/mainRouter')
const detalleMenu = require('./routes/detalleMenuRouter')
// Acá falta el archivo de rutas y después las vistas de EJS
app.use('/', mainRoute);
app.use('/detalleMenu', detalleMenu);

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})