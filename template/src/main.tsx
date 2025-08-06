import { Context, Hono } from "hono";
import { serveStatic } from "hono/deno";
import { Layout } from "./Layout.tsx";
import { Features, Hero, Stack } from "./client/components/Landing.tsx";

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
Deno.serve(app.fetch);
