import PocketBase, { BaseAuthStore } from "pocketbase";
import "https://deno.land/std@0.224.0/dotenv/load.ts";

const port = Deno.env.get("POCKETBASE_PORT") ?? "8080";
const pb = new PocketBase(`http://127.0.0.1:${port}`, new BaseAuthStore());
