const fs = require('fs').promises;
const path = require('path');

async function processHtml() {
    try {
        console.log('Processing HTML files for production...');
        
        const distHtmlPath = path.join(__dirname, '..', 'dist', 'index.html');
        
        // Read the HTML file
        let html = await fs.readFile(distHtmlPath, 'utf8');
        
        // Replace CSS and JS references with minified versions
        html = html.replace('css/styles.css', 'css/styles.min.css');
        html = html.replace('js/main.js', 'js/main.min.js');
        
        // Write back the modified HTML
        await fs.writeFile(distHtmlPath, html, 'utf8');
        
        console.log('HTML processing complete!');
        console.log('  - Updated CSS reference to styles.min.css');
        console.log('  - Updated JS reference to main.min.js');
    } catch (error) {
        console.error('Error processing HTML:', error);
        process.exit(1);
    }
}

processHtml();
