import { render } from "hono/jsx/dom";
import { JSX } from "hono/jsx/jsx-runtime";

// Make sure you also create an html element where the client TS will be rendered
export const renderOnElement = (htmlElementId: string, clientComponent: JSX.Element) => {
  const parentElement = document.getElementById(htmlElementId);
  console.log("parentElement =>", parentElement); // Delete

  if (parentElement) render(clientComponent, parentElement);
};
