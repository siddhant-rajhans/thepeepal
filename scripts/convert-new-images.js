const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/new');
const outputDir = path.join(__dirname, '../public/assets');

// Main image should be first
const imageOrder = [
  'WhatsApp Image 2026-01-27 at 22.53.04.jpeg', // Main image
  'WhatsApp Image 2026-01-27 at 22.52.38.jpeg',
  'WhatsApp Image 2026-01-27 at 22.53.29.jpeg',
  'WhatsApp Image 2026-01-27 at 22.54.17.jpeg',
  'WhatsApp Image 2026-01-27 at 22.54.33.jpeg',
  'WhatsApp Image 2026-01-27 at 22.55.13.jpeg',
];

async function convertImages() {
  console.log('Converting new images to WebP format...\n');
  
  for (let i = 0; i < imageOrder.length; i++) {
    const file = imageOrder[i];
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `gallery-${i + 1}.webp`);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${file} - file not found`);
      continue;
    }
    
    try {
      const stats = fs.statSync(inputPath);
      const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      
      console.log(`Converting ${file} (${fileSizeMB}MB) -> gallery-${i + 1}.webp...`);
      
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      const outputStats = fs.statSync(outputPath);
      const outputSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);
      const savings = ((1 - outputStats.size / stats.size) * 100).toFixed(1);
      
      console.log(`✓ Saved as gallery-${i + 1}.webp (${outputSizeMB}MB, ${savings}% reduction)\n`);
    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
    }
  }
  
  console.log('✅ Image conversion complete!');
  console.log(`\nGallery images created: gallery-1.webp through gallery-${imageOrder.length}.webp`);
  console.log('Main image is: gallery-1.webp (WhatsApp Image 2026-01-27 at 22.53.04.jpeg)');
}

convertImages().catch(console.error);
