var landingController = require('./landingController.js');

module.exports = function (router) {

  router.post('/', landingController.getStats);
};