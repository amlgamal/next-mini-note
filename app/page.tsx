import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
      <p className="mt-4 text-lg">
        This is the home page 
      </p>
    </div>
  );
}
