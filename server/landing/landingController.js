module.exports = {
  getStats: function (req, res, next) {
    var name = req.body;
    // var urlRiot = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+name+"?api_key="+riotApiKey; 
    console.log(name, "this is the name in landingController.js");
  }
};
