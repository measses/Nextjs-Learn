"use client"; 

import { useParams } from "next/navigation";
import { BackButton } from "@/app/ui/back-button";

const posts = {
  "nextjs-nedir": {
    title: "Next.js Nedir?",
    content: "Next.js, React tabanlı bir framework'tür...",
  },
  "react-vs-nextjs": {
    title: "React vs Next.js",
    content: "React ve Next.js arasındaki farklar...",
  },
  "tailwind-css": {
    title: "Tailwind CSS ile Stil Vermek",
    content: "Tailwind CSS, utility-first bir CSS framework'üdür...",
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as keyof typeof posts;

  const post = posts[slug];

  if (!post) {
    return (
      <div className="p-8 bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold text-center text-red-500">
          Yazı Bulunamadı
        </h1>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <BackButton />
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
        {post.title}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">{post.content}</p>
    </div>
  );
}
