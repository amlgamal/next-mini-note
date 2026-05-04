import Link from "next/link";

// const posts = [
//   {
//     id: 1,
//     title: "First Post",
//     content: "This is the content of the first post.",
//   },
//   {
//     id: 2,
//     title: "Second Post",
//     content: "This is the content of the second post.",
//   },
//   {
//     id: 3,
//     title: "Third Post",
//     content: "This is the content of the third post.",
//   },
// ];

type Post = {
  id: number;
  title: string;
};

export default async function PostsPage() {
  const data = await fetch("https://dummyjson.com/posts");
  // console.log(data);
  const result : { posts: Post[] } = await data.json();
  // console.log(result);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Posts List
        </h1>

        <div className="grid gap-6 md:grid-cols-1">
          {result.posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2">
                {post.title}
              </h2>

              <Link
                href={`/posts/${post.id}`}
                className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
