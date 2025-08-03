import { Context, Hono } from "hono";
import { serveStatic } from "hono/deno";
import { Layout } from "./Layout.tsx";
import { Top } from "./components/Top.tsx";

const app = new Hono();
app.use("/static/*", serveStatic({ root: "./public" }));

app.get("/", (c: Context) => {
  const meee = ["isto", "e", "hono!", "em docker "];
  return c.html(
    <Layout>
      <Top messages={meee} />
    </Layout>,
  );
});
Deno.serve(app.fetch);
