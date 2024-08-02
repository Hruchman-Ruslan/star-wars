import Link from "next/link";

export interface CardItemProps {
  id: string;
  name: string;
}

export default function CardItem({ id, name }: CardItemProps) {
  return (
    <li
      key={id}
      className="w-full max-w-sm mx-auto bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700 p-4 transition-transform transform hover:scale-105"
    >
      <Link
        href={`/star-wars/${id}`}
        className="block cursor-pointer rounded-lg p-3 transition-all hover:bg-yellow-600"
      >
        <p className="font-bold text-xl text-yellow-400 hover:text-gray-900 transition-colors duration-300 shadow-md">
          {name}
        </p>
      </Link>
    </li>
  );
}
