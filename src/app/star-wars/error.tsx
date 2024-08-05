"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-lg mb-6">
          We encountered an error while processing your request.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => reset()}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold py-3 px-6 rounded transition duration-300 text-lg"
          >
            Try again
          </button>
          <Link href="." className="inline-block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-extrabold py-3 px-6 rounded transition duration-300 text-lg">
              Go To Star Wars
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
