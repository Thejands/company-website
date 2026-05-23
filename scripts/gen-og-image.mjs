import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "../public/og-image.png");

const W = 1200;
const H = 630;

// Accent bar dimensions
const BAR_W = 4;
const BAR_H = 56;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <style>
      @font-face {
        font-family: 'system-ui';
        src: local('Inter'), local('Helvetica Neue'), local('Arial'), local('sans-serif');
      }
    </style>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#f9f9f9"/>

  <!-- Subtle grid texture (light lines) -->
  <line x1="0" y1="0" x2="${W}" y2="0" stroke="#e5e5e5" stroke-width="1"/>
  <line x1="0" y1="${H}" x2="${W}" y2="${H}" stroke="#e5e5e5" stroke-width="1"/>
  <line x1="0" y1="0" x2="0" y2="${H}" stroke="#e5e5e5" stroke-width="1"/>
  <line x1="${W}" y1="0" x2="${W}" y2="${H}" stroke="#e5e5e5" stroke-width="1"/>

  <!-- Left accent bar -->
  <rect x="72" y="200" width="${BAR_W}" height="${BAR_H}" fill="#1a1a1a" rx="2"/>

  <!-- Brand name -->
  <text
    x="96"
    y="247"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-size="64"
    font-weight="700"
    letter-spacing="-1"
    fill="#1a1a1a"
  >Thejands</text>

  <!-- Tagline -->
  <text
    x="96"
    y="310"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-size="26"
    font-weight="400"
    fill="#1a1a1a"
    letter-spacing="0"
  >Enterprise-grade delivery. Partner-level commitment.</text>

  <!-- Divider -->
  <line x1="96" y1="352" x2="520" y2="352" stroke="#d4d4d4" stroke-width="1"/>

  <!-- Sub-copy -->
  <text
    x="96"
    y="386"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-size="18"
    font-weight="400"
    fill="#737373"
    letter-spacing="0.5"
  >Software · Consulting · Digital Products · Partnerships</text>

  <!-- Bottom domain badge -->
  <text
    x="96"
    y="${H - 52}"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-size="16"
    font-weight="500"
    fill="#a3a3a3"
    letter-spacing="0.5"
  >thejands.in</text>

  <!-- Decorative corner mark (top-right) -->
  <rect x="${W - 72}" y="0" width="1" height="${H}" fill="#e5e5e5"/>
  <rect x="${W - 72}" y="200" width="1" height="${BAR_H}" fill="#1a1a1a"/>
</svg>`;

const buffer = Buffer.from(svg);

await sharp(buffer)
  .png({ compressionLevel: 9, palette: false })
  .toFile(OUTPUT);

console.log(`OG image written to ${OUTPUT}`);
