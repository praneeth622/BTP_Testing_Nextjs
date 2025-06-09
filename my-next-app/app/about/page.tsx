import Image from "next/image";

export const metadata = {
  title: "About - Next.js App",
  description: "Learn about this Next.js application",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About This App
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            This Next.js application demonstrates various features and capabilities of the framework.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Features Included</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>App Router with nested routes</li>
                <li>Dynamic routing with parameters</li>
                <li>API routes for backend functionality</li>
                <li>Server and Client Components</li>
                <li>Image optimization</li>
                <li>Metadata management</li>
                <li>Tailwind CSS styling</li>
                <li>Dark mode support</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Next.js 15.3.3</li>
                <li>React 19</li>
                <li>TypeScript</li>
                <li>Tailwind CSS v4</li>
                <li>Google Fonts (Geist)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}