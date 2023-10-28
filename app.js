
var express = require('express');
var app = express();

/* Création d'une route. Chaque route correspondra à un URL différent. 
   Ici cela correspond à http://mon_adresse/
   Si nous avions  app.get('/name', function (req, res) {
   La route serait http://mon_adresse/name 
*/
app.get('/', function (req, res) {
  /*
     Fonction à déclencher lorsque la route est sollicitée. 
     Le paramètre req correspond à la requête faite sur la route et res à la réponse qui lui sera faite.
     Ici on renvoie la chaîne de caractère Hello world!
  */
  res.send('Hello World!');
});

// On écoute le port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
