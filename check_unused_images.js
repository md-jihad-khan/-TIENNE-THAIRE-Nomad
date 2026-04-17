const fs = require('fs');
const html = fs.readFileSync('1. Catalogue de mes films achetés.docx/1.Cataloguedemesfilmsachets.docx.html', 'utf8');
const json = JSON.parse(fs.readFileSync('frontend/src/cinema_data.json', 'utf8'));

const allImgsInHtml = [...html.matchAll(/src="images\/(image\d+\.(jpg|png))"/g)].map(m => m[1]);
const usedImgsInJson = new Set(json.map(m => m.image).filter(Boolean));

const unused = allImgsInHtml.filter(img => !usedImgsInJson.has(img));

console.log(`Total images in HTML: ${allImgsInHtml.length}`);
console.log(`Used in JSON: ${usedImgsInJson.size}`);
console.log(`Unused: ${unused.length}`);
if (unused.length > 0) {
    console.log('Unused sample:', unused.slice(0, 5));
    // Find where they are in HTML
    unused.forEach(img => {
        const index = html.indexOf(img);
        const near = html.substring(index - 500, index + 500);
        console.log(`--- Context for ${img} ---`);
        console.log(near.replace(/<[^>]+>/g, '').trim());
    });
}
