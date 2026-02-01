const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/assets');
const outputDir = path.join(__dirname, '../public/assets-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convertImages() {
  const files = fs.readdirSync(inputDir);
  
  console.log(`Found ${files.length} files in ${inputDir}`);
  
  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
      
      try {
        const stats = fs.statSync(inputPath);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        
        console.log(`Converting ${file} (${fileSizeMB}MB)...`);
        
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);
        
        const outputStats = fs.statSync(outputPath);
        const outputSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);
        const savings = ((1 - outputStats.size / stats.size) * 100).toFixed(1);
        
        console.log(`✓ Converted to ${outputPath.split('/').pop()} (${outputSizeMB}MB, ${savings}% reduction)`);
      } catch (error) {
        console.error(`✗ Error converting ${file}:`, error.message);
      }
    }
  }
  
  console.log('\n✅ Image conversion complete!');
}

convertImages().catch(console.error);
