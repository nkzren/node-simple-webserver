import express from 'express';
import routes from './config/routes.js';
const app = express();

routes(app);

app.set('view engine', 'pug');

app.set('views', './views');

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Servidor configurado no localhost');
});
