var express = require('express');
var app = express();

const PORT = 3000 ; 

/* Version de github
   Création d'une route. Chaque route correspondra à un URL différent. 
   Ici cela correspond à http://mon_adresse/
   Si nous avions  app.get('/name', function (req, res) {
   La route serait http://mon_adresse/name 
*/
app.get('/', function (req, res) {
  res.send('Hello World, le retour');
});

app.get('/toto', function(req,res) {
    res.send("deuxieme page");
});

// On écoute le port 3000
app.listen(PORT, function () {
  console.log('Example application listening on port ${PORT} !');
});
