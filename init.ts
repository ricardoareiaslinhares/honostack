import { ZipReader, BlobReader } from "jsr:@zip-js/zip-js";

import { ensureDir } from "https://deno.land/std@0.214.0/fs/ensure_dir.ts";
import { join, dirname } from "https://deno.land/std@0.214.0/path/mod.ts";

const target = Deno.args[0] ?? "honostack-app";
const repo = "ricardoareiaslinhares/honostack";
const branch = "main";
const zipUrl = `https://github.com/${repo}/archive/refs/heads/${branch}.zip`;

console.log(`📦 Downloading template from ${repo}@${branch}...`);
const res = await fetch(zipUrl);
const zipBlob = await res.blob();

console.log("📂 Extracting files...");
const zipReader = new ZipReader(new BlobReader(zipBlob));
const entries = await zipReader.getEntries();

for (const entry of entries) {
  if (entry.directory) continue;

  const isTemplateFile = entry.filename.startsWith(`honostack-${branch}/template/`);
  const isRootReadme = entry.filename === `honostack-${branch}/README.md`;

  if (!isTemplateFile && !isRootReadme) continue;

  const relativePath = isTemplateFile
    ? entry.filename.replace(`honostack-${branch}/template/`, "")
    : "README.md";

  const outputPath = join(target, relativePath);
  await ensureDir(dirname(outputPath));

  const file = await Deno.create(outputPath);
  await entry.getData?.(file.writable, {});
}

await zipReader.close();

console.log(`✅ Done! Project scaffolded into "${target}"`);
console.log(`cd ${target} && docker compose up`);
console.log("😎 Happy coding");
Deno.exit(0);
