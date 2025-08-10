import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Convert SVG to PNG
async function convertSvgToPng() {
  try {
    const svgPath = path.join(__dirname, 'public', 'icon-1024.svg');
    const pngPath = path.join(__dirname, 'public', 'icon-1024.png');
    
    console.log('Converting SVG to PNG...');
    console.log('Input:', svgPath);
    console.log('Output:', pngPath);
    
    await sharp(svgPath)
      .resize(1024, 1024)
      .png({
        quality: 100,
        compressionLevel: 6
      })
      .toFile(pngPath);
    
    console.log('✅ Successfully converted icon-1024.svg to icon-1024.png');
    
    // Get file size
    const stats = fs.statSync(pngPath);
    console.log(`📏 File size: ${(stats.size / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    console.error('❌ Error converting SVG to PNG:', error);
  }
}

convertSvgToPng();
