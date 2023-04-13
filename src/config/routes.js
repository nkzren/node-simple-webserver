import { urlencoded } from 'express';
import homeController from '../controllers/homeController.js';
import { test } from '../controllers/redisController.js';

export default function (app) {
  app.use(urlencoded({ extended: true }));

  app.get('/', homeController.renderHome);

  app.get('/test', test);

  app.use((err, req, res, next) => {
    console.error(err, 'Erro inesperado');
    next();
  });
}
