// The Koi That Jumped the Moon — make.fun entry program.
//
// Copies entry.png (the artwork the judge sees) into the output
// directory, so the entry renders exactly the image the agent made.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  console.error(`entry.png not found next to ${here}`);
  process.exit(1);
}

// The output directory is created fresh on every run, so a stale
// entry.png from a previous run can never leak through.
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`Wrote ${target}`);
