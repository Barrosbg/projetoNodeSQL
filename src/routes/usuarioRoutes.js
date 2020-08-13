module.exports = function (app) {
    const usuarios = require('../controllers/usuariosControllers.js')
    app.route('/usuarios')
    .get(usuarios.ListAll)
    .post(usuarios.createOne)
}