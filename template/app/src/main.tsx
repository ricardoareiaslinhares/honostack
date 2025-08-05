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
const port = Number(Deno.env.get("PORT") ?? "8001");
Deno.serve({ port }, app.fetch);
