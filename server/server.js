var app = require('./server-config.js');
require('dotenv').config();

var PORT = process.env.PORT || 3030;

app.set('port', PORT);

app.listen(PORT);

console.log('server listening on ', PORT);
