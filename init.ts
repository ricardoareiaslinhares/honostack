// init.ts
import { unzip } from "https://deno.land/x/zip@v1.2.5/mod.ts";
import { ensureDir } from "https://deno.land/std@0.214.0/fs/ensure_dir.ts";

const dest = Deno.args[0] ?? "honostack-app";
const repo = "ricardoareiaslinhares/honostack"; // ← replace with your GitHub user/repo if different
const branch = "main";
const zipUrl = `https://github.com/${repo}/archive/refs/heads/${branch}.zip`;

console.log(`🚀 Downloading honostack template from ${repo}...`);
const zipBytes = new Uint8Array(await (await fetch(zipUrl)).arrayBuffer());

await ensureDir(dest);
await Deno.writeFile("honostack.zip", zipBytes);

console.log(`📦 Extracting template...`);
await unzip("honostack.zip", ".");

await Deno.rename(`honostack-${branch}/template`, dest);
await Deno.remove("honostack.zip");
await Deno.remove(`honostack-${branch}`, { recursive: true });

console.log(`✅ Done! Project created at ${dest}`);
console.log(`👉 cd ${dest} && deno task start`);
