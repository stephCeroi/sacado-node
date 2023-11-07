'use strict'
/* eslint-env node, es6 */
require('dotenv').config();
//code
const { readFile }  = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)
const { join } = require ('path')
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();



const READ_OPTIONS = { encoding : 'utf8' };
const HTML_URL = `${process.env.ROOT}`;

const lireFichierHTML = file => { return readFileAsync(join(HTML_URL,file), READ_OPTIONS)}
 
module.exports = async nomPage => {
    // récuperer les contenus du tableau HTML et des éléments de la pages.
    const [
        modeleHTML,
        titleHTML,
        bodyHTML, 
    ] = await Promise.all([
        lireFichierHTML('anonymous/templates/index.html'),
        lireFichierHTML(`anonymous/templates/${nomPage}.head.html`),  
        lireFichierHTML(`anonymous/templates/${nomPage}.body.html`) 
    ]);

    // var start = window.performance.now();
    // var end = window.performance.now();
    // console.log(`Execution time: ${end - start} ms`);


    const indexHTML = modeleHTML
    .replaceAll('{{TITLE}}',titleHTML)
    .replace('{{BODY}}',bodyHTML);


    // retourner la page HTML
    return indexHTML
}
