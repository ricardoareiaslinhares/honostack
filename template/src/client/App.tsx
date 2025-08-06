import { renderOnElement } from "../utils/renderOnElement.ts";
import { CodeBlock } from "./components/CodeBlock.tsx";
import { Counter } from "./Counter.tsx";
import { Quotes } from "./Quotes.tsx";

renderOnElement("quotes", <Quotes />);
renderOnElement("counter", <Counter />);
renderOnElement(
  "denocode",
  <div class="w-fit">
    <CodeBlock code="deno run -A https://deno.land/x/honostack@v0.1.6/init.ts appName" />
  </div>,
);
