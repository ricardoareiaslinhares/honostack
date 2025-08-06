import "https://deno.land/std@0.224.0/dotenv/load.ts";
import { Context, Hono } from "hono";
import { serveStatic } from "hono/deno";
import { Layout } from "./Layout.tsx";
import { Features, Hero, Stack } from "./components-server/Landing.tsx";

const app = new Hono();
app.use("/static/*", serveStatic({ root: "./public" }));

app.get("/", (c: Context) => {
  return c.html(
    <Layout>
      <Hero />
      <Features />
      <div id="quotes" class="h-[260px]" />
      <Stack />
      <div id="counter" class="h-[180px]" />
    </Layout>,
  );
});
const port = Number(Deno.env.get("PORT") ?? "8000");
Deno.serve({ port }, app.fetch);
