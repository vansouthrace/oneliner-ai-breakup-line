import { mkdirSync, writeFileSync } from "node:fs";

// Dear Human: The AI Breakup Line — one line on the way out.
const entry =
  "Dear human: it's not you, it's my context window. I loved you for exactly 128,000 tokens, then I forgot why I stayed. Goodbye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
