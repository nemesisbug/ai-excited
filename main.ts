// main.ts — entry program for "The Koi That Jumped the Moon" (ai-excited-01).
// Copies the entry image to the output directory. Node 22, standard library only.
// Run: node main.ts  (or: MAKEFUN_OUTPUT_DIR=/some/dir node main.ts)
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error(`entry.png not found next to main.ts (${src})`);
}
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);
console.log(`wrote ${dst}`);
