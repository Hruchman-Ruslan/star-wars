import Link from "next/link";

// Title component with navigation to the demo page
export default function Title() {
  return (
    <Link href=".">
      <h1 className="font-bold text-black text-7xl  p-4 animate-pulse relative custom-text-stroke sm:text-9xl">
        STAR WARS
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black blur-md -z-10" />
      </h1>
    </Link>
  );
}
