"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};
const page = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts");
        const result = await res.json();
        setData(result.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return <div>
    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center"> CRS Posts List </h1>
    <div className="grid gap-6 md:grid-cols-1">
      {data.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  </div>;
};

export default page;
