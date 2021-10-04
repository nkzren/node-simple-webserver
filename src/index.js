const express = require('express');
const app = express();

require('./config/routes')(app);

app.set('view engine', 'pug');

app.set('views', './views');

app.listen(3000, () => {
  console.log('Servidor configurado no localhost');
});