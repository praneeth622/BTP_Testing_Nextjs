import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to build modern web applications.",
    date: "2025-06-01",
  },
  {
    id: 2,
    title: "Dynamic Routing in Next.js",
    excerpt: "Explore how to create dynamic routes and handle parameters.",
    date: "2025-06-05",
  },
  {
    id: 3,
    title: "API Routes and Server Actions",
    excerpt: "Building backend functionality with Next.js API routes.",
    date: "2025-06-08",
  },
];

export const metadata = {
  title: "Blog - Next.js App",
  description: "Read our latest blog posts about Next.js development",
};

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Blog Posts
      </h1>
      
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <article 
            key={post.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </span>
              <Link 
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}