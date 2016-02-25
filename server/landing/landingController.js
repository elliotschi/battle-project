var apiInfo = require('./apiKey.js');
var util = require('../config/utils.js');
var request = require('request')
module.exports = {
  getSummonerId : function (req, res, next) {
    var name = req.body.userName;
    var riotApiKey = apiInfo.API_KEY;
    var urlRiot = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + name + "?api_key=" + riotApiKey;
    //need to grab summoner id in response and use that for "stats" 
    // var summonerId = res.JSON()
    request(urlRiot, function(err, res, body) {
      if (!err && res.statusCode == 200) {
        var data = JSON.parse(body);
        var summonerId = data[name].id;
      }
    })
    
    // var playerStatUrl = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/summary";
    
  }
};
