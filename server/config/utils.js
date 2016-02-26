var apiInfo = require('../landing/apiKey.js')
var request = require('request');

module.exports = {
  getPlayerStats : function(req, res, summonerId) {
    var riotApiKey = apiInfo.API_KEY;
    var playerStatUrl = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/summary?api_key=" + riotApiKey;

    request(playerStatUrl, function(err, result, body) {
      if (err) {
        res.status(401).send();
      } else {
        var playerStats = JSON.parse(body);
        res.json(playerStats);
      }
    })
  }
};