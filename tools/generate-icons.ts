/**
 * Generates all PNG icons from the brand mountain mark SVG.
 *
 * Runtime icons go to /public (committed) — favicons, PWA, apple-touch-icon.
 * Social logos go to /tools/social-logos (gitignored) — for manual upload to
 * LinkedIn, Facebook, X, npm, GitHub profile pages.
 *
 * Usage: bun run icons
 * Requires: src/assets/brand/logo-mark.svg (gitignored, kept locally)
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import sharp from "sharp";

const ROOT = resolve(import.meta.dir, "..");
const SOURCE = resolve(ROOT, "src/assets/brand/logo-mark.svg");
const PUBLIC_DIR = resolve(ROOT, "public");
const SOCIAL_DIR = resolve(ROOT, "tools/social-logos");

const WHITE = { r: 255, g: 255, b: 255, alpha: 1 } as const;
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 } as const;

type IconJob = {
  out: string;
  size: number;
  padding?: number;
  background?: { r: number; g: number; b: number; alpha: number };
};

const RUNTIME_JOBS: IconJob[] = [
  { out: "favicon-16x16.png", size: 16 },
  { out: "favicon-32x32.png", size: 32 },
  { out: "favicon-96x96.png", size: 96 },
  { out: "apple-touch-icon.png", size: 180, background: WHITE },
  { out: "icon-192.png", size: 192 },
  { out: "icon-512.png", size: 512 },
  { out: "icon-maskable-512.png", size: 512, padding: 0.1, background: WHITE },
];

// Two variants per platform — transparent (default, adapts to light/dark)
// and -white (solid background, for contexts that need an opaque card).
// All with ~12% padding so the mark breathes in circle crops.
const SOCIAL_JOBS: IconJob[] = [
  // Transparent
  { out: "linkedin-400.png", size: 400, padding: 0.12 },
  { out: "facebook-400.png", size: 400, padding: 0.12 },
  { out: "x-800.png", size: 800, padding: 0.12 },
  { out: "npm-200.png", size: 200, padding: 0.12 },
  { out: "github-500.png", size: 500, padding: 0.12 },
  // White background
  { out: "linkedin-400-white.png", size: 400, padding: 0.12, background: WHITE },
  { out: "facebook-400-white.png", size: 400, padding: 0.12, background: WHITE },
  { out: "x-800-white.png", size: 800, padding: 0.12, background: WHITE },
  { out: "npm-200-white.png", size: 200, padding: 0.12, background: WHITE },
  { out: "github-500-white.png", size: 500, padding: 0.12, background: WHITE },
];

async function generatePng(svg: Buffer, job: IconJob, outDir: string) {
  const inner = job.padding ? Math.round(job.size * (1 - job.padding * 2)) : job.size;
  const offset = job.padding ? Math.round((job.size - inner) / 2) : 0;

  const resized = await sharp(svg, { density: 384 })
    .resize(inner, inner, { fit: "contain", background: TRANSPARENT })
    .png()
    .toBuffer();

  const bg = job.background ?? TRANSPARENT;

  await sharp({
    create: { width: job.size, height: job.size, channels: 4, background: bg },
  })
    .composite([{ input: resized, top: offset, left: offset }])
    .png()
    .toFile(resolve(outDir, job.out));

  console.log(`  ✓ ${job.out}  (${job.size}px${job.padding ? `, padding ${job.padding * 100}%` : ""})`);
}

async function generateFaviconSvg(svg: Buffer) {
  await writeFile(resolve(PUBLIC_DIR, "favicon.svg"), svg);
  console.log("  ✓ favicon.svg  (vector copy)");
}

async function main() {
  console.log(`Reading source: ${SOURCE}`);
  const svg = await readFile(SOURCE);

  await mkdir(PUBLIC_DIR, { recursive: true });
  await mkdir(SOCIAL_DIR, { recursive: true });

  console.log("\nRuntime icons → public/");
  for (const job of RUNTIME_JOBS) await generatePng(svg, job, PUBLIC_DIR);
  await generateFaviconSvg(svg);

  console.log("\nSocial logos → tools/social-logos/  (gitignored, upload manually)");
  for (const job of SOCIAL_JOBS) await generatePng(svg, job, SOCIAL_DIR);

  console.log(
    "\nDone. Reminder: favicon.ico (multi-size) must be generated externally (sharp does not write .ico).",
  );
  console.log("Use https://realfavicongenerator.net or `png-to-ico` if you need one.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
