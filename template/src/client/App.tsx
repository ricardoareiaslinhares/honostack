import { renderOnElement } from "../utils/renderOnElement.ts";
import { Counter } from "./components/Counter.tsx";
import { Quotes } from "./components/Quotes.tsx";

renderOnElement("quotes", <Quotes />);
renderOnElement("counter", <Counter />);
