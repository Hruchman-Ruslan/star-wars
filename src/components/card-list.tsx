import { IStarWars } from "@/types/star-wars";

export interface CardListProps {
  card: IStarWars[];
}

export default function CardList({ card }: CardListProps) {
  return (
    <section className="bg-gray-900 p-6 min-h-screen">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {card.map(({ id, name }) => (
          <li
            key={id}
            className="bg-white text-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-lg font-semibold">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
