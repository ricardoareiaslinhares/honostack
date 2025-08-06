import { useState } from "hono/jsx";
import { render } from "hono/jsx/dom";
import Quotes from "./Components/Quotes.tsx";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: "2rem" }} className="bg-red-200">
      <p style={{ fontSize: "2rem" }}>Client-side count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Aumentar
      </button>
    </div>
  );
};

const root = document.getElementById("quotes");
console.log("root =>", root); // Delete

if (root) {
  render(
    <>
      <Quotes />
    </>,
    root,
  );
}
