const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '1. Catalogue de mes films achetés.docx', '1.Cataloguedemesfilmsachets.docx.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const categories = [
    "Cinéma Muet", "Cinéma Américain", "Cinéma français", "Cinéma latino-américain", 
    "Asie", "AFRIQUE", "Océanie", "DOCUMENTAIRES", "Canada anglophone", "ANIMATION", "Canada francophone"
];

function decodeEntities(s) {
    if (!s) return "";
    return s.replace(/&rsquo;/g, "'").replace(/&nbsp;/g, " ").replace(/&eacute;/g, "é").replace(/&agrave;/g, "à").replace(/&icirc;/g, "î").replace(/&ocicirc;/g, "ô").replace(/&ocirc;/g, "ô").replace(/&ucirc;/g, "û").replace(/&ccedil;/g, "ç").replace(/&Agrave;/g, "À").replace(/&Eacute;/g, "É").replace(/&Icirc;/g, "Î").replace(/&Ocirc;/g, "Ô").replace(/&Ucirc;/g, "Û").replace(/&Ccedil;/g, "Ç").replace(/&oelig;/g, "oe");
}

const pRegex = /<p[^>]*>(.*?)<\/p>/gs;
let match;
const segments = [];

while ((match = pRegex.exec(html)) !== null) {
    const content = match[1];
    let text = content.replace(/<[^>]+>/g, '').trim();
    text = decodeEntities(text);
    const imgMatch = content.match(/src="images\/(image\d+\.(jpg|png))"/);
    
    // A segment is a category ONLY if it matches a category name and HAS NO YEAR
    const hasYear = !!text.match(/\b(\d{4})\b/);
    const isCategory = !hasYear && categories.some(cat => text.trim() === cat.trim());

    segments.push({
        text,
        image: imgMatch ? imgMatch[1] : null,
        isCategory,
        hasYear
    });
}

const movies = [];
let currentCategory = "";
let currentDirector = "";

for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    
    if (seg.isCategory) {
        currentCategory = categories.find(cat => seg.text.trim() === cat.trim());
        // currentDirector = ""; // Don't reset director here, some directors span categories? 
        // Actually usually reset for safety.
        continue;
    }

    // Check for director: ALL CAPS, length > 3, not a movie line
    if (seg.text && seg.text === seg.text.toUpperCase() && seg.text.length > 3 && !seg.hasYear && !seg.text.includes('.') && !seg.text.includes('|') && !seg.text.includes('&') && !seg.text.includes(':')) {
        currentDirector = seg.text;
        continue;
    }

    if (seg.hasYear) {
        const yearMatch = seg.text.match(/\b(\d{4})\b/);
        const year = parseInt(yearMatch[1]);
        const titlePart = seg.text.substring(0, seg.text.indexOf(yearMatch[0])).replace(/[()]/g, '').trim();
        
        const movie = {
            title: titlePart || seg.text.substring(0, 30),
            director: currentDirector,
            category: currentCategory,
            year,
            fullText: seg.text,
            image: null
        };

        // Look ahead for an image until we hit another Movie or a Category or a Director
        for (let j = i + 1; j < segments.length; j++) {
            if (segments[j].isCategory || segments[j].hasYear) break;
            // Also break if it looks like a new director?
            if (segments[j].text && segments[j].text === segments[j].text.toUpperCase() && segments[j].text.length > 5 && !segments[j].hasYear) break;
            
            if (segments[j].image) {
                movie.image = segments[j].image;
                break;
            }
        }
        movies.push(movie);
    }
}

// Ensure Frozen & Pocahontas are correct
const frozenIndex = movies.findIndex(m => m.title.includes('Frozen'));
if (frozenIndex != -1) {
    movies[frozenIndex].title = "Frozen 1 & 2";
    movies[frozenIndex].image = "image262.jpg";
    movies[frozenIndex].category = "ANIMATION";
    for (let k = movies.length-1; k >= 0; k--) {
        if (movies[k].title.includes('Frozen') && k !== frozenIndex) movies.splice(k, 1);
    }
} else {
    movies.push({ title: "Frozen 1 & 2", director: "DISNEY", category: "ANIMATION", year: 2013, image: "image262.jpg" });
}

const pocahontas = movies.find(m => m.title.includes('Pocahontas'));
if (pocahontas) {
    pocahontas.image = "image336.jpg";
    pocahontas.category = "ANIMATION";
} else {
    movies.push({ title: "Pocahontas", director: "DISNEY", category: "ANIMATION", year: 1995, image: "image336.jpg" });
}

fs.writeFileSync('frontend/src/cinema_data.json', JSON.stringify(movies, null, 2));
console.log(`Final count: ${movies.length} movies. With images: ${movies.filter(m => m.image).length}`);
