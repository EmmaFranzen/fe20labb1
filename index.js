// Enkel Node.js Express webbserver med API-endpoints
// @emmafranzen
// Källa: https://awik.io/setup-nodejs-express-web-server/

const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, './public')

// Visa statiska HTML-filer för filer i /public
app.use(express.static(publicDirPath, { extensions: ['html'] }))

// Metoden tar emot ett maxnummer (max) och returnerar ett json-objekt med ett slumpvalt
// nummer mellan 0 och max.
// Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNumber(max) {
    // Skapa ett objekt med ett slumpvalt nummer mellan 0 och max.
    let randObj = {
        "number": Math.floor(Math.random() * max)
    }
    // Returnerar objektet från ovan.
    return randObj
}

// Metoden tar emot ett ord (word) och returnerar ett json-objekt med ordet (word) och antalet
// vokaler i order (vowels)
// Källa: https://www.programiz.com/javascript/examples/count-vowels
function amountOfVowels(word) {
    // Skapa ett objekt med ett det inskickade ordet samt antalet vokaler i ordet.
    let amountOfVowels = {
        "word": word,
        "vowels": count = word.match(/[aeiouåäö]/gi).length
    }
    // Returnerar objektet från ovan.
    return amountOfVowels;
}

// Skapa en endpoint för urlen /api/random som anropar metoden randomNumber med max-värdet 1024.
// Returnerar objektet som returneras från metodanropet.
app.get('/api/random', (req, res) => {
    return res.send(randomNumber(1024));
});

// Skapa en endpoint för urlen /api/custom_random/:num som anropar metoden randomNumber med värdet av :num.
// Returnerar objektet som returneras från metodanropet.
app.get('/api/custom_random/:num', (req, res) => {
    return res.send(randomNumber(req.params.num));
});

// Skapa en endpoint för urlen /api/count_vowels/:word som anropar metoden amountOfVowels med order :word.
// Returnerar objektet som returneras från metodanropet.
app.get('/api/count_vowels/:word', (req, res) => {
    return res.send(amountOfVowels(req.params.word));
});

// Kör webbservern på port 3000
app.listen(3000, () => {
    console.log('Server is up and running on PORT 3000.')
})