import { useState } from "hono/jsx";
import { Button } from "../ui/Button.tsx";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div class="flex flex-col  items-center justify-center gap-4 p-6 my-6 rounded-xl dark:bg-neutral-800 shadow border border-gray-200 dark:border-neutral-700 w-fit mx-auto">
      <p class="text-sm text-gray-500 dark:text-neutral-400">People love counters</p>
      <p class="text-2xl font-semibold text-gray-900 dark:text-white">{count}</p>
      <Button variant="ghost" onClick={() => setCount((c) => c + 1)}>
        Aumentar
      </Button>
    </div>
  );
};
