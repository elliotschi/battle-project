var app = require('./server-config.js');
// var landingController = require('./landing/landingController.js');

var PORT = process.env.PORT || 3030;

app.set('port', PORT);

app.listen(PORT);

console.log('server listening on ', PORT);

// app.post('/', function (req, res) {
//   // console.log(req.body, "req.body")
//   var name = req.body.userName.toLowerCase();
//   // body...var urlRiot = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+name+"?api_key="+riotApiKey; 
//   // console.log(name, "this is the name in server.js");
//   res.send('server.js')
// })

// app.post('/', landingController.getStats)