import Link from "next/link";

// This is the demo page of the project
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="container-sm container-md container-lg container-xl max-w-container-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-black text-5xl md:text-4xl lg:text-5xl animate-pulse custom-text-stroke">
              Star Wars
            </h1>
          </div>

          {/* This video provides a brief tutorial on how the project works */}
          <div className="flex items-center justify-center">
            <div className="relative w-96 h-52 border-4 border-yellow-500 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/XdIL625mrjo"
                title="Star Wars Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="font-semibold text-base md:text-lg text-white">
            This project is designed for Star Wars enthusiasts. Here, you can
            quickly find your favorite hero and discover which films they
            appeared in and what starships they piloted.
          </p>

          {/* This is navigation to the main page */}
          <Link
            href="/star-wars"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold py-3 px-6 rounded transition duration-300 w-32 md:w-40 m-auto text-lg md:text-xl"
          >
            Start
          </Link>
        </div>
      </div>
    </main>
  );
}
