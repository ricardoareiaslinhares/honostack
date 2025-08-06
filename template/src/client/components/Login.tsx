import { FC } from "hono/jsx";
import { Input } from "../ui/Input.tsx";
import { Button } from "../ui/Button.tsx";
import { InputFile } from "../ui/InputFile.tsx";
import { Select } from "../ui/Select.tsx";
import { Toggle } from "../ui/Toggle.tsx";
import { Dropdown } from "../ui/Dropdown.tsx";
import { CardImage } from "./CardImage.tsx";
import { Card } from "./Card.tsx";

type LoginProps = {};

export const Login: FC = ({}: LoginProps) => {
  return (
    <div>
      Login
      <form method="post" action="/posts" class="flex flex-col gap-1">
        <Input id="email" type="email" placeholder="email" />
        <Input id="password" type="password" placeholder="password" />
        <InputFile id="file" />
        <Select id="sle" options={[{ label: "ola", value: "1" }]} />
        <Toggle checked id="1" onChange={() => console.log("helo")} />
        <Dropdown items={[]} label="id" />
        <Card
          title="Card title"
          subtitle="Card subtitle"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          linkHref="#"
          linkText="Card link"
        />
        <Button variant="solid" onClick={() => console.log("ola")}>
          submit
        </Button>
      </form>
    </div>
  );
};
