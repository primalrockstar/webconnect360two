const fs = require('fs').promises;
const path = require('path');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

const srcDir = path.join(__dirname, '..', 'src', 'images');
const distDir = path.join(__dirname, '..', 'dist', 'images');

async function optimizeImages() {
    try {
        console.log('Starting image optimization...');
        
        // Check if source directory exists
        try {
            await fs.access(srcDir);
        } catch (error) {
            console.log('No images to optimize (src/images directory not found or empty)');
            return;
        }

        // Ensure dist/images directory exists
        await fs.mkdir(distDir, { recursive: true });

        // Get all files from src/images
        const files = await fs.readdir(srcDir);
        
        // Filter for image files (excluding SVG which doesn't need optimization)
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png'].includes(ext);
        });

        if (imageFiles.length === 0) {
            console.log('No JPG/PNG images to optimize. SVG files will be copied as-is.');
        } else {
            // Optimize JPG and PNG files
            const result = await imagemin([`${srcDir}/*.{jpg,jpeg,png}`], {
                destination: distDir,
                plugins: [
                    imageminMozjpeg({ quality: 80 }),
                    imageminPngquant({ quality: [0.6, 0.8] })
                ]
            });

            console.log(`Optimized ${result.length} image(s)`);
            result.forEach(file => {
                console.log(`  - ${path.basename(file.destinationPath)}`);
            });
        }

        // Copy SVG files as-is
        const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg');
        for (const svgFile of svgFiles) {
            const srcPath = path.join(srcDir, svgFile);
            const destPath = path.join(distDir, svgFile);
            await fs.copyFile(srcPath, destPath);
            console.log(`  - Copied ${svgFile} (SVG)`);
        }

        console.log('Image optimization complete!');
    } catch (error) {
        console.error('Error optimizing images:', error);
        process.exit(1);
    }
}

optimizeImages();
