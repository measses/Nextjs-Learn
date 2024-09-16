import Link from "next/link";

const posts = [
  { title: "Next.js Nedir?", slug: "nextjs-nedir" },
  { title: "React vs Next.js", slug: "react-vs-nextjs" },
  { title: "Tailwind CSS ile Stil Vermek", slug: "tailwind-css" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Blog Yazıları
      </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
