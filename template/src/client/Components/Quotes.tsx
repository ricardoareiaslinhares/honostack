import { useEffect, useState } from "hono/jsx";

const quotes = [
  {
    quote: "The goal isn’t to feel better, it’s to get better at feeling.",
    author: "ACT Wisdom",
  },
  {
    quote: "You are the sky. Everything else – it’s just the weather.",
    author: "Pema Chödrön",
  },
  {
    quote: "Values are not goals; they are directions we choose to keep moving toward.",
    author: "Steven C. Hayes",
  },
  {
    quote: "Don’t fight your thoughts. Let them come and go. You are not them.",
    author: "ACT Principle",
  },
  {
    quote: "Courage is not the absence of fear, but choosing to move in its presence.",
    author: "Kelly G. Wilson",
  },
  {
    quote: "Acceptance is not resignation. It’s making space to live fully.",
    author: "Russ Harris",
  },
];

export default function Quotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i: number) => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setIndex((i: number) => (i - 1 + quotes.length) % quotes.length);
  const next = () => setIndex((i: number) => (i + 1) % quotes.length);

  const { quote, author } = quotes[index];

  return (
    <section class="w-full max-w-3xl mx-auto px-4 py-12 h-[280px] flex flex-col justify-between items-center text-center">
      <div class="flex-1 flex flex-col justify-center">
        <p class="text-2xl md:text-3xl font-light text-gray-800 dark:text-white">“{quote}”</p>
        <footer class="mt-4 text-base text-gray-500 dark:text-neutral-400">
          — <strong class="text-gray-700 dark:text-white">{author}</strong>
        </footer>
      </div>

      <div class="mt-6 flex gap-4">
        <button
          type="button"
          onClick={prev}
          class="rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 py-2 px-3 text-gray-600 dark:text-white transition"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          class="rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 p-2 px-3 text-gray-600 dark:text-white transition"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  );
}
