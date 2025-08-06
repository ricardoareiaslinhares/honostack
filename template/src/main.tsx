import { Context, Hono } from "hono";
import { serveStatic } from "hono/deno";
import { Layout } from "./Layout.tsx";
import { Top } from "./components/Top.tsx";
import { Features, Hero, Stack } from "./components/Landing.tsx";
import { Button } from "./ui/Button.tsx";

const app = new Hono();
app.use("/static/*", serveStatic({ root: "./public" }));

app.get("/", (c: Context) => {
  const meee = ["isto", "e", "hono!", "em docker "];
  return c.html(
    <Layout>
      <Hero />
      <Features />
      <div id="quotes" class="h-[260px]" />
      <Stack />
    </Layout>,
  );
});
Deno.serve(app.fetch);
