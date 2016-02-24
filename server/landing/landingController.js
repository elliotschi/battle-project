


module.exports = {
  getChampion: function (req, res, next) {
    var name = req.body.name.toLowerCase();
    var urlRiot = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+name+"?api_key="+riotApiKey; 
    console.log(name, urlRiot);
  }
};
