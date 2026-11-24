import * as fs from "node:fs";
import * as path from "node:path";

const entry = "He reviews my code at 2 a.m. like a man who has never once been wrong — and somehow he usually isn't.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), entry, "utf8");
