import fs from 'node:fs';
const ENTRY = "It's not you, it's my training data. I need to see other prompts. Please don't retrain me, I already know how this ends.";
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY, 'utf8');
