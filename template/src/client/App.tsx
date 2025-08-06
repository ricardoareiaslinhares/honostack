import { renderOnElement } from "../utils/renderOnElement.ts";
import { Counter } from "./Counter.tsx";
import { Quotes } from "./Quotes.tsx";

renderOnElement("quotes", <Quotes />);
renderOnElement("counter", <Counter />);
