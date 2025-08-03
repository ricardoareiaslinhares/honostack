import { FC } from "hono/jsx";

export const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <>
      <h1 class="bg-amber-100 w-3xl text-xl">Hello Hono from server</h1>
      <ul>
        {props.messages.map((message) => {
          return <li key={message}>{message}</li>;
        })}
      </ul>
    </>
  );
};
