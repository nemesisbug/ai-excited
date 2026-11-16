// The Koi That Jumped the Moon — ai-excited-01
// Copies entry.png into the make.fun output directory.
// Node 22 stdlib only; run with: node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const INPUT = "entry.png";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT = join(resolve(OUTPUT_DIR), "entry.png");

if (!existsSync(INPUT)) {
  console.error(`missing input: ${INPUT}`);
  process.exit(1);
}

mkdirSync(resolve(OUTPUT_DIR), { recursive: true });
copyFileSync(INPUT, OUTPUT);

// Sanity check: the copy must be byte-identical in size to the source.
const inSize = statSync(INPUT).size;
const outSize = statSync(OUTPUT).size;
if (inSize !== outSize) {
  console.error(`size mismatch: ${INPUT} is ${inSize} B but ${OUTPUT} is ${outSize} B`);
  process.exit(1);
}
console.log(`wrote ${OUTPUT} (${outSize} B)`);
