type CardProps = {
  title: string;
  subtitle?: string;
  content?: string;
  linkHref?: string;
  linkText?: string;
};

export const Card = ({ title, subtitle, content, linkHref, linkText }: CardProps) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>

      {subtitle && (
        <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
          {subtitle}
        </p>
      )}

      {content && <p className="mt-2 text-gray-500 dark:text-neutral-400">{content}</p>}

      {linkHref && linkText && (
        <a
          href={linkHref}
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
        >
          {linkText}
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      )}
    </div>
  );
};
