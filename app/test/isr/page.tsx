import React from "react";

type Post = {
  id: number;
  title: string;
};

const page = async () => {
  const data = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 10 },
  });

  const res : { posts: Post[] } = await data.json();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        ISR Posts List
      </h1>

      <div className="grid gap-6 md:grid-cols-1 max-w-4xl mx-auto">
        {res.posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2">
              {post.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;