import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Next.js Full Features App
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Exploring all Next.js capabilities in one place
        </p>
        <Image
          className="mx-auto dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={200}
          height={50}
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Dynamic Routing</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore dynamic routes with parameters and catch-all routes.
          </p>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Visit Blog →
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">API Routes</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Server-side API endpoints built into your app.
          </p>
          <Link href="/products" className="text-blue-600 hover:underline">
            View Products →
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Server Components</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Server-side rendering with React Server Components.
          </p>
          <Link href="/about" className="text-blue-600 hover:underline">
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}
