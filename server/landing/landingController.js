var apiInfo = require('./apiKey.js');
var utils = require('../config/utils.js');
var request = require('request');

module.exports = {
  getSummonerId : function (req, res, next) {
    var name = req.body.userName;
    var riotApiKey = apiInfo.API_KEY;
    var urlRiot = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + name + "?api_key=" + riotApiKey;
    var season = req.body.season;
    
    request(urlRiot, function(err, result, body) {
      if (!err && res.statusCode == 200) {
        var data = JSON.parse(body);
        var summonerId = data[name].id;
        //have to add error handling when summonerId is wrong
        utils.getPlayerStats(req, res, summonerId, season);
      }
    })
  }
};


