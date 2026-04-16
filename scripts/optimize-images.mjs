import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');
const outputDir = path.join(projectRoot, 'public/images/optimized');

const widths = [480, 768, 1200];

const sourceImages = [
  '/PHOTO-2026-01-14-21-10-59.jpg',
  '/images/gallery-1.webp',
  '/images/gallery-3.webp',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
  '/images/gallery-7.jpg',
  '/images/gallery-8.jpg',
  '/images/gallery-9.jpg',
  '/images/gallery-10.jpg',
  '/images/gallery-11.jpg',
  '/images/gallery-12.jpg',
  '/images/mud-dormitory.jpeg',
  '/images/founder.png',
  '/images/1000236050_convert_2.webp',
  '/images/1000236050_convert_3.webp',
  '/images/1000236050_convert_6.webp',
  '/images/1000236050_convert_7.webp',
  '/images/1000236050_convert_8.webp',
  '/images/1000236050_convert_9.webp',
  '/images/1000236050_convert_10.webp',
  '/assets-png-backup/1000236050_convert_10.png',
];

function baseNameFor(filePath) {
  return path.basename(filePath).replace(/\.[^.]+$/, '');
}

async function ensureOutputDir() {
  await fs.mkdir(outputDir, { recursive: true });
}

async function optimizeOne(sourcePath) {
  const absoluteInput = path.join(projectRoot, 'public', sourcePath.replace(/^\//, ''));
  const name = baseNameFor(sourcePath);

  try {
    await fs.access(absoluteInput);
  } catch {
    console.warn(`Skipping missing file: ${sourcePath}`);
    return;
  }

  const input = sharp(absoluteInput, { failOn: 'none' });

  for (const width of widths) {
    const avifOut = path.join(outputDir, `${name}-${width}.avif`);
    const webpOut = path.join(outputDir, `${name}-${width}.webp`);

    await input
      .clone()
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 50, effort: 7 })
      .toFile(avifOut);

    await input
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toFile(webpOut);
  }

  console.log(`Optimized: ${sourcePath}`);
}

async function run() {
  await ensureOutputDir();

  for (const sourcePath of sourceImages) {
    await optimizeOne(sourcePath);
  }

  console.log(`Done. Optimized images written to ${outputDir}`);
}

run().catch((error) => {
  console.error('Image optimization failed:', error);
  process.exitCode = 1;
});
