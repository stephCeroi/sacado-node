'use strict'
/* eslint-env node, es6 */

// importe le paquet dotenv pour lier le fichier caché .env
require('dotenv').config();

// déclaration de constante
const PORT = process.env.PORT || 4000  

// importe le paquet Express
var express = require('express');
var app = express();
app.use(express.json())


const genererModele = require('../anonymous/page-get.js')

// Liste des routes 
const NOM_PAGES = {
    'demo' : 'demo',  
} 
 // Fonction qui renvoie les HTML des routes
app.get(/^\/(|demo)$/,  async(req, res)  =>  {
  const nomPage = NOM_PAGES[req.params[0]] || 'index'
  const pageHTML = await genererModele(nomPage)
  res.send(pageHTML)
});
 

// Ecoute tous les requetes du répertoire /style/xxx et associ les répertoires donnés
const STATIC_IMG = process.env.ROOT+'static/img'
const STATIC_STYLES = process.env.ROOT+'static/styles'
// Retourne les images statiques
app.use('/img',express.static(STATIC_IMG))
// Retourne les styles
app.use('/styles',express.static(STATIC_STYLES)) 

// On écoute le port 3000
app.listen(PORT,  () => {
  console.log(`Le serveur est lancé sur http://localhost:${PORT}"`);
});

