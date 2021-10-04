const renderHome = (req, res, next) => {
  res.render('index', { title: 'Titulo', message: 'Olá Mundo'});
}

module.exports = {
  renderHome,
}