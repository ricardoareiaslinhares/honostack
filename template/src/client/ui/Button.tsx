import { JSX } from "hono/jsx/jsx-runtime";

type ButtonProps = {
  children: JSX.Element | string;
  onClick?: (e: Event) => void;
  type?: "button" | "submit" | "reset";
  variant?: "ghost" | "solid";
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "solid",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const ghostVariant = `
  py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg
  bg-white text-blue-600 shadow-2xs hover:bg-gray-200 focus:outline-none active:bg-gray-100 transition-all
  disabled:opacity-50 disabled:pointer-events-none
  dark:bg-neutral-800 dark:text-blue-500 dark:hover:bg-neutral-600
`;

  const solidVariant = `
inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 active:bg-blue-500 transition"
`;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      class={`${variant === "solid" ? solidVariant : ghostVariant} ${className}`}
    >
      {children}
    </button>
  );
};
