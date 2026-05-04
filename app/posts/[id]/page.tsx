type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostDetails({ params }: Props) {
  const { id } = await params;
  //   console.log(id);
  const data = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!data.ok) {
    throw new Error("Failed to fetch post");
  }
  const post = await data.json();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

            <p className="text-gray-700">{post.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
