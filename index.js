'use strict'
/* eslint-env node, es6 */

// importe le paquet dotenv pour lier le fichier caché .env
require('dotenv').config();

// déclaration de constante
const PORT = process.env.PORT || 3000  

// importe le paquet Express
var express = require('express');
var app = express();
app.use(express.json())


/*
var urls = require('./group');
app.use('/group', urls);
*/

const genererPageAccueil = require('./views/index-get.js')


// Liste des routes  
app.get('/',  async (req, res)  =>  {
  const indexHTML = await genererPageAccueil()
  res.send(indexHTML)
});

// Ecoute tous les requetes du répertoire /style/xxx et associ les répertoires donnés
const STATIC_IMG = 'd:/uwamp/www/sacado-node/static/img'
const STATIC_CSS = 'd:/uwamp/www/sacado-node/static/css'
// Retourne les images statiques
app.use('/static/img',express.static(STATIC_IMG))
// Retourne les styles
app.use('/static/styles',express.static(STATIC_CSS)) 

// On écoute le port 3000
app.listen(PORT,  () => {
  console.log(`Le serveur est lancé sur http://localhost:${PORT}"`);
});

