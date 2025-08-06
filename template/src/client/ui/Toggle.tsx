type ToggleProps = {
  id: string;
  checked: boolean;
  onChange: (event: Event) => void;
  labelLeft?: string;
  labelRight?: string;
  disabled?: boolean;
  className?: string;
};

export const Toggle = ({
  id,
  checked,
  onChange,
  labelLeft = "Off",
  labelRight = "On",
  disabled = false,
  className = "",
}: ToggleProps) => {
  return (
    <div class={`flex items-center gap-x-3 ${className}`}>
      {labelLeft && (
        <label for={id} class="text-sm text-gray-500 dark:text-neutral-400">
          {labelLeft}
        </label>
      )}

      <label for={id} class="relative inline-block w-11 h-6 cursor-pointer">
        <input
          type="checkbox"
          id={id}
          class="peer sr-only"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span
          class="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out 
          peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 
          peer-disabled:opacity-50 peer-disabled:pointer-events-none"
        ></span>
        <span
          class="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs 
          transition-transform duration-200 ease-in-out peer-checked:translate-x-full 
          dark:bg-neutral-400 dark:peer-checked:bg-white"
        ></span>
      </label>

      {labelRight && (
        <label for={id} class="text-sm text-gray-500 dark:text-neutral-400">
          {labelRight}
        </label>
      )}
    </div>
  );
};
