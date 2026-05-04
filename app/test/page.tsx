"use client";

import Link from "next/link";

export default function TestHome() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Rendering Test Page</h1>

      <div className="flex flex-col gap-3 w-fit">
        <Link href="/test/csr">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            CSR Page
          </button>
        </Link>

        <Link href="/test/ssr">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            SSR Page
          </button>
        </Link>

        <Link href="/test/ssg">
          <button className="bg-gray-700 text-white px-4 py-2 rounded">
            SSG Page
          </button>
        </Link>

        <Link href="/test/isr">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">
            ISR Page
          </button>
        </Link>
      </div>
    </div>
  );
}
