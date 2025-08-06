type DropdownItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
  id?: string;
  disabled?: boolean;
  className?: string;
};

export const Dropdown = ({
  label,
  items,
  id = "dropdown-button",
  disabled = false,
  className = "",
}: DropdownProps) => {
  return (
    <div class={`relative inline-flex hs-dropdown [--trigger:hover] m-1 ${className}`}>
      <button
        id={id}
        type="button"
        class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
        disabled={disabled}
      >
        {label}
        <svg
          class="hs-dropdown-open:rotate-180 size-4 transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        class="hs-dropdown-menu hidden opacity-0 hs-dropdown-open:opacity-100 transition-[opacity,margin] duration min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby={id}
      >
        <div class="p-1 space-y-0.5">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href || "#"}
              onClick={item.onClick}
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
