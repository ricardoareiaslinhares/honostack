import { ReactNode } from "hono/jsx";

type LinkProps = {
  href: string;
  children: ReactNode;
  variant: "solid" | "ghost" | "neutral";
  className?: string;
  target?: string;
  rel?: string;
};

export const Link = ({
  href,
  children,
  className = "",
  variant = "ghost",
  target,
  rel,
}: LinkProps) => {
  const ghostVariant = `text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-hidden focus:underline opacity-90 ${className}`;
  const solidVariant = `inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition ${className}`;
  const neutralVariant = `text-gray-700 hover:underline dark:text-neutral-300 ${className}`;
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      class={
        variant === "solid" ? solidVariant : variant === "ghost" ? ghostVariant : neutralVariant
      }
    >
      {children}
    </a>
  );
};
