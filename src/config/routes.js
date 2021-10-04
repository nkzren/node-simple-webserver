const { urlencoded } = require('express');
const homeController = require('../controllers/homeController');

module.exports = function (app) {
  app.use(urlencoded({ extended: true }));

  app.get('/', homeController.renderHome);
}