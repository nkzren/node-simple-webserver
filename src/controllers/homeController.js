const renderHome = (req, res, next) => {
  res.render('index', { title: 'Titulo', message: 'Olá Mundo'});
}

export default {
  renderHome,
}
