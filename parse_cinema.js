const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '1. Catalogue de mes films achetés.docx', '1.Cataloguedemesfilmsachets.docx.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Categories we expect
const categories = [
    "Cinéma Muet",
    "Cinéma Américain",
    "Cinéma français",
    "Cinéma latino-américain",
    "Asie",
    "AFRIQUE",
    "Océanie",
    "DOCUMENTAIRES",
    "Canada anglophone"
];

// Clean HTML entities
function decodeEntities(encodedString) {
    var translate_re = /&(nbsp|amp|quot|lt|gt|eacute|agrave|icirc|ocirc|ucirc|ccedil|Agrave|Eacute|Icirc|Ocirc|Ucirc|Ccedil);/g;
    var translate = {
        "nbsp": " ",
        "amp": "&",
        "quot": "\"",
        "lt": "<",
        "gt": ">",
        "eacute": "é",
        "agrave": "à",
        "icirc": "î",
        "ocirc": "ô",
        "ucirc": "û",
        "ccedil": "ç",
        "Agrave": "À",
        "Eacute": "É",
        "Icirc": "Î",
        "Ocirc": "Ô",
        "Ucirc": "Û",
        "Ccedil": "Ç"
    };
    return encodedString.replace(translate_re, function(match, entity) {
        return translate[entity];
    }).replace(/&#(\d+);/gi, function(match, numStr) {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}

const movieData = [];
let currentCategory = "";
let currentDirector = "";

// Regex to find all <p> contents
const pRegex = /<p[^>]*>(.*?)<\/p>/gs;
let match;

while ((match = pRegex.exec(html)) !== null) {
    let content = match[1];
    let plainText = decodeEntities(content.replace(/<[^>]+>/g, '').trim());
    
    // Check if it's a category
    const foundCategory = categories.find(cat => plainText.toLowerCase() === cat.toLowerCase());
    if (foundCategory) {
        currentCategory = foundCategory;
        currentDirector = "";
        continue;
    }

    // Check if it's a director (all uppercase, more than 3 chars)
    if (plainText === plainText.toUpperCase() && plainText.length > 3 && !plainText.includes('(') && !plainText.includes('.')) {
        currentDirector = plainText;
        continue;
    }

    // Check if it's a movie (contains year in brackets)
    const yearMatch = plainText.match(/\((\d{4})/);
    if (yearMatch) {
        const year = parseInt(yearMatch[1]);
        const titleEndIndex = plainText.indexOf('(');
        const title = plainText.substring(0, titleEndIndex).trim();
        
        const movie = {
            title: title,
            director: currentDirector,
            category: currentCategory,
            year: year,
            fullText: plainText,
            image: null
        };

        // Look for image in the next segments
        let nextIndex = pRegex.lastIndex;
        let imgMatch = html.substring(nextIndex, nextIndex + 1000).match(/src="images\/(image\d+\.(jpg|png))"/);
        if (imgMatch) {
            movie.image = imgMatch[1];
        }

        movieData.push(movie);
    }
}

fs.writeFileSync(path.join(__dirname, 'frontend/src/cinema_data.json'), JSON.stringify(movieData, null, 2));
console.log(`Successfully parsed ${movieData.length} movies.`);
