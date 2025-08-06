// https://www.hyperui.dev/components/application/selects
type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  id: string;
  name?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  onChange?: (e: Event) => void;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  className?: string;
};

export const Select = ({
  id,
  name = id,
  label,
  options,
  value,
  placeholder = "Please select",
  onChange,
  required = false,
  disabled = false,
  error = false,
  helperText,
  className = "",
}: SelectProps) => {
  return (
    <div class={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label for={id} class={`text-sm font-medium ${error ? "text-red-600" : "text-gray-700"}`}>
          {label}
          {required && <span class="ml-0.5 text-red-500">*</span>}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        class={`w-full px-4 py-2.5 rounded-lg text-sm
  bg-gray-100 text-gray-900 placeholder-gray-500
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
  disabled:opacity-50 disabled:pointer-events-none
  ${error ? "border border-red-500 ring-red-500" : "border border-transparent"}
  dark:bg-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
      {helperText && (
        <p class={`text-xs ${error ? "text-red-600" : "text-gray-500"}`}>{helperText}</p>
      )}
    </div>
  );
};
