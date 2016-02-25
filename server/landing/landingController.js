module.exports = {
  getStats: function (req, res, next) {
    var name = req.body.userName;
    // var urlRiot = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+name+"?api_key="+riotApiKey; 
    console.log(name, ":name in landingController.js");
    res.send("I'm in landingController.js")
  }
};
