export const CardFeature = ({ title, description }: { title: string; description: string }) => (
  <div
    class="
      p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-700
      transform transition-transform duration-300 ease-in-out
      hover:scale-105
    "
  >
    <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
    <p class="text-gray-600 dark:text-neutral-300 text-sm">{description}</p>
  </div>
);
