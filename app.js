const express = require('express');
const app = express();
const path = require('path');

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Arranque del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto 3000`);
});
