// https://preline.co/docs/input.html
type InputProps = {
  id: string;
  type?: InputType;
  placeholder?: string;
  value?: string;
  onInput?: (e: Event) => void;
  disabled?: boolean;
};

export const Input = ({
  id,
  type = "text",
  placeholder = "",
  value = "",
  onInput,
  disabled = false,
}: InputProps) => {
  const renderIcon = () => {
    if (type === "email") {
      return (
        <svg
          class="size-4 text-gray-500 dark:text-neutral-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    }

    if (type === "password") {
      return (
        <svg
          class="size-4 text-gray-500 dark:text-neutral-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
          <circle cx="16.5" cy="7.5" r=".5" />
        </svg>
      );
    }

    return null;
  };

  const hasIcon = type === "email" || type === "password";

  return (
    <div class="relative w-full">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onInput={onInput}
        disabled={disabled}
        class={`peer w-full ${hasIcon ? "ps-11" : "px-4"} py-2.5 rounded-lg text-sm
                bg-gray-100 text-gray-900 placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                disabled:opacity-50 disabled:pointer-events-none
                dark:bg-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
      />
      {hasIcon && (
        <div class="absolute inset-y-0 left-0 flex items-center ps-4 pointer-events-none">
          {renderIcon()}
        </div>
      )}
    </div>
  );
};
type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
