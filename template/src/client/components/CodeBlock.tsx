import { Button } from "../ui/Button.tsx";

export const CodeBlock = ({ code }: { code: string }) => {
  const copyToClipboard = () => navigator.clipboard.writeText(code);
  return (
    <div className="flex flex-1 justify-center items-center bg-gray-900 text-white rounded-xl overflow-hidden p-4 gap-8">
      <pre className=" text-sm overflow-auto">
        <code class="text-amber-200">{code}</code>
      </pre>
      <Button className="h-6" variant="ghost" onClick={copyToClipboard}>
        <p class="font-light">copy</p>
      </Button>
    </div>
  );
};
