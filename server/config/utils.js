var apiInfo = require('../landing/apiKey.js')
var request = require('request');
require('dotenv').config();

module.exports = {
  getPlayerStats : function(req, res, summonerId, season) {
    var riotApiKey = process.env.LOL_API_KEY;
    var rankedStats = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/ranked?season=" + season + "&api_key=" + riotApiKey;
    request(rankedStats, function(err, result, body) {
      if (err) {
        res.status(404).send();
      } else {
        var playerStats = JSON.parse(body);
        res.json(playerStats);
      }
    })
  }
};
