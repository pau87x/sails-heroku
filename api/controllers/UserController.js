/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function(req, res) {
          res.send('te has logueado');
    },
    logout: function(req, res) {
          res.send('te has salido de la sesion');
    },
};

