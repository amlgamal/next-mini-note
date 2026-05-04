"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border border-gray-100 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Something went wrong!
        </h1>

        <p className="text-gray-600 mb-6">{error.message}</p>

        <button
          onClick={() => reset()}
          className="bg-green-600 hover:bg-green-700 transition duration-300 text-white px-6 py-3 rounded-lg font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
