import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dirs = ["public", "public/photos", "src/app"];

for (const dir of dirs) {
  if (!existsSync(dir)) continue;
  for (const name of readdirSync(dir)) {
    if (!name.endsWith(".b64")) continue;
    const input = join(dir, name);
    const output = join(dir, name.slice(0, -4));
    writeFileSync(output, Buffer.from(readFileSync(input, "utf8"), "base64"));
  }
}
