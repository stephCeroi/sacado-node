'use strict'
/* eslint-env node, es6 */

//code
const { readFile }  = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)

const READ_OPTIONS = { encoding : 'utf8' }

const INDEX_HTML = 'd:/uwamp/www/sacado-node/index.html'

module.exports = async() => {
    // récuperer le contneu de index.html
    const contenu = await readFileAsync(INDEX_HTML, READ_OPTIONS)

    // retourner la page HTML
    return contenu
}