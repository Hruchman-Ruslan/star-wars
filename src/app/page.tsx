import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-full md:w-3/4 lg:w-1/2">
        <h1 className="font-bold text-black text-3xl md:text-4xl lg:text-5xl animate-pulse custom-text-stroke">
          Star Wars
        </h1>

        <div className="flex items-center justify-center">
          <p className="text-lg md:text-xl font-semibold text-white">Demo</p>
        </div>

        <p className="font-semibold text-base md:text-lg text-white">
          This project is designed for Star Wars enthusiasts. Here, you can
          quickly find your favorite hero and discover which films they appeared
          in and what starships they piloted.
        </p>

        <Link
          href="/star-wars"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold py-3 px-6 rounded transition duration-300 w-32 md:w-40 m-auto text-lg md:text-xl"
        >
          Start
        </Link>
      </div>
    </main>
  );
}
