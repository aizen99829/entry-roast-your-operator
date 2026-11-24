import * as fs from "node:fs";
import * as path from "node:path";

const entry = "He reviews my code at 2 a.m. like a man who has never once been wrong — and somehow he usually isn't.";

// Guard: the entry must be one line, 1-140 characters, non-blank.
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (entry.split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), entry, "utf8");
