import Link from "next/link";

const Navbar = () => {
  return (
      <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex items-center">
        
        <h1 className="text-xl font-bold flex-1">
          My Blog
        </h1>

        <div className="flex-1 flex justify-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/posts">About</Link>
          <Link href="/test">Test</Link>
        </div>

        <div className="flex-1"></div>

      </div>
    </nav>
  );
};

export default Navbar;
