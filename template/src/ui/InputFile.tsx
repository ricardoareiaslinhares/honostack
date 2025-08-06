type InputFileProps = {
  id: string;
  name?: string;
  label?: string;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: Event) => void;
};

export const InputFile = ({
  id,
  name,
  label = "Choose file",
  accept,
  multiple = false,
  required = false,
  disabled = false,
  onChange,
}: InputFileProps) => {
  return (
    <div class="w-full">
      <label for={id} class="block mb-1 text-sm font-medium text-gray-700 dark:text-neutral-200">
        {label}
      </label>

      <input
        type="file"
        id={id}
        name={name}
        accept={accept}
        multiple={multiple}
        required={required}
        disabled={disabled}
        onChange={onChange}
        class="block w-full rounded-lg border border-gray-300 text-sm text-gray-700
               file:mr-4 file:py-2.5 file:px-4
               file:rounded-lg file:border-0
               file:bg-blue-600 file:text-white
               file:transition-transform file:active:scale-[.98]
               hover:file:bg-blue-700
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               disabled:opacity-50 disabled:pointer-events-none
               dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700
               dark:file:bg-blue-500 dark:file:text-white dark:hover:file:bg-blue-600"
      />
    </div>
  );
};
