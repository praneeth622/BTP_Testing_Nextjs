import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts = [
	{
		id: 1,
		title: "Getting Started with Next.js",
		content:
			"Next.js is a powerful React framework that makes building modern web applications easier and more efficient. It provides features like server-side rendering, static site generation, and API routes out of the box.",
		date: "2025-06-01",
		author: "John Doe",
	},
	{
		id: 2,
		title: "Dynamic Routing in Next.js",
		content:
			"Dynamic routing allows you to create pages with dynamic parameters. This is essential for building applications like blogs, e-commerce sites, and any app that needs to handle dynamic content based on URLs.",
		date: "2025-06-05",
		author: "Jane Smith",
	},
	{
		id: 3,
		title: "API Routes and Server Actions",
		content:
			"Next.js API routes provide a simple way to build backend functionality directly in your Next.js app. You can handle form submissions, database operations, and external API calls seamlessly.",
		date: "2025-06-08",
		author: "Mike Johnson",
	},
];

interface BlogPostPageProps {
	params: Promise<{
		id: string;
	}>;
}

export async function generateStaticParams() {
	return blogPosts.map((post) => ({
		id: post.id.toString(),
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const post = blogPosts.find((p) => p.id === parseInt(id));

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: `${post.title} - Blog`,
		description: post.content.substring(0, 160),
	};
}

export default async function BlogPost({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const post = blogPosts.find((p) => p.id === parseInt(id));

	if (!post) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-4xl mx-auto">
				<Link
					href="/blog"
					className="text-blue-600 hover:underline mb-6 inline-block"
				>
					← Back to Blog
				</Link>

				<article className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
					<header className="mb-8">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{post.title}
						</h1>
						<div className="text-gray-600 dark:text-gray-300">
							<span>By {post.author}</span>
							<span className="mx-2">•</span>
							<span>{post.date}</span>
						</div>
					</header>

					<div className="prose prose-lg dark:prose-invert max-w-none">
						<p>{post.content}</p>
					</div>
				</article>
			</div>
		</div>
	);
}