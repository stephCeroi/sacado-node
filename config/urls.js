'use strict'
/* eslint-env node, es6 */

// importe le paquet dotenv pour lier le fichier caché .env

const genererModele = require('../anonymous/page-get.js')

/* // Liste des routes 
const NOM_PAGES = {
    'demo' : 'demo',  
} 
 // Fonction qui renvoie les HTML des routes
app.get(/^\/(|demo)$/,  async(req, res)  =>  {
  const nomPage = NOM_PAGES[req.params[0]] || 'index'
  const pageHTML = await genererModele(nomPage)
  res.send(pageHTML)
}); */
 

const matiereRoute = require("./routes/matiereRoutes");
app.use("/matiere", matiereRoute);
