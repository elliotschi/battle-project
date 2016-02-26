var apiInfo = require('../landing/apiKey.js')
var request = require('request');

module.exports = {
  getPlayerStats : function(req, res, summonerId, season) {
    var riotApiKey = apiInfo.API_KEY;
    // var playerStatUrl = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/summary?api_key=" + riotApiKey;
    var rankedStats = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/ranked?season=" + season + "&api_key=" + riotApiKey;
    console.log(rankedStats)
    request(rankedStats, function(err, result, body) {
      if (err) {
        res.status(401).send();
      } else {
        var playerStats = JSON.parse(body);
        res.json(playerStats);
      }
    })
  }
};
