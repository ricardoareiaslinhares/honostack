import { Link } from "../client/ui/Link.tsx";
import { CardFeature } from "../client/components/CardFeature.tsx";

export const Header = () => (
  <header class="sticky top-0 z-50 w-full py-6 px-4 md:px-12 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
    <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">🔥 HonoStack</h1>
    <nav class="space-x-6 text-sm">
      <Link href="#features" variant="neutral">
        Features
      </Link>
      <Link href="#stack" variant="neutral">
        Stack
      </Link>
      <Link href="#get-started" variant="neutral">
        Get Started
      </Link>
    </nav>
  </header>
);

export const Hero = () => (
  <section class="w-full text-center py-24 px-4 md:px-12 bg-gray-50 dark:bg-neutral-900">
    <h2 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
      Build Fast. Deploy Easy.
    </h2>
    <p class="text-lg text-gray-600 dark:text-neutral-300 max-w-xl mx-auto mb-8">
      A minimalist Deno + Hono + JSX + Tailwind starter packed in Docker. Ship faster with
      simplicity and performance.
      <br />
      <br />
      In development...
    </p>
    <Link href="#get-started" variant="solid">
      Get Started
    </Link>
  </section>
);

export const Features = () => (
  <section id="features" class="w-full py-20 px-4 md:px-12 bg-white dark:bg-neutral-950">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Why this starter?
      </h2>
      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <CardFeature
          title="Deno + Hono"
          description="Fast, secure, and modern backend framework with built-in TypeScript support."
        />
        <CardFeature
          title="JSX Everywhere"
          description="Use JSX both server-side and client-side without hydration overhead."
        />
        <CardFeature
          title="TailwindCSS"
          description="Style confidently with utility-first classes and beautiful defaults."
        />
        <CardFeature
          title="Dockerized"
          description="Fully containerized dev and production environments for fast deployment."
        />
        <CardFeature
          title="Minimal & Extensible"
          description="Just the essentials, no bloat. Easy to customize for your needs."
        />
        <CardFeature
          title="Instant Start"
          description="No config required. Just docker compose up."
        />
      </div>
    </div>
  </section>
);

export const Stack = () => (
  <section id="stack" class="w-full py-16 px-4 md:px-12 bg-gray-50 dark:bg-neutral-900">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h2>
      <p class="text-lg text-gray-600 dark:text-neutral-300 mb-8">
        Built using modern technologies that prioritize speed, simplicity, and performance.
      </p>
      <ul class="grid gap-4 md:grid-cols-3 text-gray-800 dark:text-neutral-200 text-sm">
        <li>Deno</li>
        <li>Hono</li>
        <li>JSX (Server + Client)</li>
        <li>TailwindCSS</li>
        <li>Docker</li>
        <li>Optional Supabase</li>
      </ul>
    </div>
  </section>
);
