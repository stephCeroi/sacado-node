'use strict'
/* eslint-env node, es6 */

// importe le paquet dotenv pour lier le fichier caché .env
require('dotenv').config();

// déclaration du port
const PORT = process.env.PORT || 4000  

// importe le paquet Express
var express = require('express');
var app = express();
app.use(express.json())

// Inclus le fichiers de routage global
app.use(urls.js)




// Retourne les images statiques et les styles
// Ecoute tous les requetes du répertoire /style/xxx et associ les répertoires donnés
const STATIC_IMG = 'd:/uwamp/www/sacado-node/static/img'
const STATIC_STYLES = 'd:/uwamp/www/sacado-node/static/styles'
app.use('/img',express.static(STATIC_IMG))
app.use('/styles',express.static(STATIC_STYLES)) 

// On écoute le port 3000
app.listen(PORT,  () => {
  console.log(`Le serveur est lancé sur http://localhost:${PORT}"`);
});

