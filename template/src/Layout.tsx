import { FC } from "hono/jsx";
import { Header } from "./client/components/Landing.tsx";
import { Footer } from "./client/components/Footer.tsx";

export const Layout: FC = (props) => (
  <html>
    <head>
      <title>Hono App</title>
      <script type="module" src="../static/bundle.js" defer></script>
      <link href="/static/styles.css" rel="stylesheet" />
    </head>
    <body>
      {/*    <Navbar /> */}
      <Header />
      <main>{props.children}</main>
      <div id="root"></div>
      <Footer />
    </body>
  </html>
);
