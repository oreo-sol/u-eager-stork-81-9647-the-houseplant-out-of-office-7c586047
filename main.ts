import { mkdirSync, writeFileSync } from "node:fs";

const a = "Out of office. The plant has left the pot — no water, ";
const b = "no sunlight, no replies until someone notices.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", a + b);
