'use strict'
/* eslint-env node, es6 */

// importe le paquet dotenv pour lier le fichier caché .env
require('dotenv').config();

// déclaration du port
const PORT = process.env.PORT || 3000  
const bodyParser = require('body-parser')
// importe le paquet Express
var express = require('express');

var app = express();
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Retourne les images statiques et les styles
// Ecoute tous les requetes du répertoire /style/xxx et associ les répertoires donnés
const STATIC_IMG = `${process.env.ROOT}static/img`
const STATIC_STYLES = `${process.env.ROOT}static/styles`

const genererPageAnonymous = require('./config/pageAnonymous-get.js')
// Liste des routes 
const NOM_PAGES = {
    'about'     : 'about',  
    'exercises' : 'exercises',      
} 
 // Fonction qui renvoie les HTML des routes
app.get(/^\/(|about|exercises)$/,  async(req, res)  =>  {   
  const nomPage = NOM_PAGES[req.params[0]] || 'index'
  const pageHTML = await genererPageAnonymous(nomPage)
  res.send(pageHTML)
});
 
// app.get(/.*/,  async(req,res) => {
//   console.log('Page non trouvée');
//   res.send("erreur 404")
// });

//retourne les fichiers static 
app.use('/img',express.static(STATIC_IMG))
app.use('/styles',express.static(STATIC_STYLES))



// On écoute le port 2525
app.listen(PORT,  () => {
  console.log(`Le serveur est lancé sur http://localhost:${PORT}"`);
});

