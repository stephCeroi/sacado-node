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
 


// Retourne les images statiques et les styles
// Ecoute tous les requetes du répertoire /style/xxx et associ les répertoires donnés
const STATIC_IMG = `${process.env.ROOT}static/img`
const STATIC_STYLES = `${process.env.ROOT}static/styles`


const genererModele = require('./views/page-get.js')
// Liste des routes 
const NOM_PAGES = {
    'demo' : 'demo',  
} 
 // Fonction qui renvoie les HTML des routes
app.get(/^\/(|demo)$/,  async(req, res)  =>  {   // '' ou 'demo'
  console.log(`appel de la page ${req.params[0]}`)
  const nomPage = NOM_PAGES[req.params[0]] || 'index'
  const pageHTML = await genererModele(nomPage)
  res.send(pageHTML)
});
 
// app.get(/.*/,  async(req,res) => {
//   console.log('Page non trouvée');
//   res.send("erreur 404")
// });



// On écoute le port 3000
app.listen(PORT,  () => {
  console.log(`Le serveur est lancé sur http://localhost:${PORT}"`);
});

