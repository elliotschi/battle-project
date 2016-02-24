var landingController = require('./landingController.js');

module.exports = function (app) {
  app.post('/', landingController.getStats);
}