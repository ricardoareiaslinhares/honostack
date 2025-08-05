import { FC } from "hono/jsx";

export const Layout: FC = (props) => (
  <html>
    <head>
      <title>Hono App</title>
      <script type="module" src="../static/bundle.js" defer></script>
      <link href="/static/styles.css" rel="stylesheet" />
    </head>
    <body>
      <header>
        <h1>🚀 Deno Hono JSX *server && client* Tailwind App</h1>
      </header>
      <main>{props.children}</main>
      <div id="root"></div>
      <footer>© 2025, crafted by Ricardo Linhares</footer>
    </body>
  </html>
);
