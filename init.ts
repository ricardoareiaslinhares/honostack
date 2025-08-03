import { copy } from "https://deno.land/std@0.214.0/fs/copy.ts";
import { ensureDir } from "https://deno.land/std@0.214.0/fs/ensure_dir.ts";

const dest = Deno.args[0] ?? "honostack-app";

console.log(`🚀 Creating ${dest}...`);
await ensureDir(dest);
await copy(new URL("./template/", import.meta.url), dest, { overwrite: true });
console.log(`✅ Done! cd ${dest} && 'docker compose up' to start developing`);
