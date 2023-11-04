'use strict'
/* eslint-env node, es6 */

//code
const { readFile }  = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)
const { join } = require ('path')

const READ_OPTIONS = { encoding : 'utf8' }
const HTML_URL = "d:/uwamp/www/sacado-node/templates"

const lireFichierHTML = file => readFileAsync(join(HTML_URL,file), READ_OPTIONS)
 
module.exports = async nomPage => {
    // récuperer les contenus du tableau HTML et des éléments de la pages.
    const [
        modeleHTML,
        titleHTML,
        bodyHTML, 
    ] = await Promise.all([
        lireFichierHTML('modele.html'),
        lireFichierHTML(`${nomPage}.head.html`),  
        lireFichierHTML(`${nomPage}.body.html`) 
    ])
    
    const indexHTML = modeleHTML
    .replace('{{TITLE}}',titleHTML)
    .replace('{{BODY}}',bodyHTML)

    // retourner la page HTML
    return indexHTML
}