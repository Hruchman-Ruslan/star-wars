import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Not Found</h2>
        <p className="text-lg mb-6">Could not find requested resource</p>
        <Link
          href="/"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold py-3 px-6 rounded transition duration-300 text-lg"
        >
          Go To Star Wars
        </Link>
      </div>
    </main>
  );
}
