// Dad Joke Showdown — make.fun entry (program/v1, Node 22, stdlib only).
// Writes a single original dad joke to <output-dir>/entry.txt.
// Deterministic: no randomness, no network, no timestamps in the output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one dad joke, 158 characters, well under the 200-character gate.
const ENTRY =
  "My daughter asked why I talk to my plants every morning. I said, 'Because they really grow on you — and unlike teenagers, they listen when I leaf them alone.'";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
