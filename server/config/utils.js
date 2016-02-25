// var request = require('request');

module.exports = {
  getPlayerStats : function(summonerId) {
    var playerStatUrl = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/summary";
  }
};