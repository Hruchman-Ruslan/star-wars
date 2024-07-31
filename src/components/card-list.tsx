import { IStarWars } from "@/types/star-wars";

export interface CardListProps {
  card: IStarWars[];
}

export default function CardList({ card }: CardListProps) {
  return (
    <section className="p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {card.map(({ id, name }) => (
          <li key={id}>
            <div className="bg-white text-gray-900 p-20 rounded-lg h-44">
              <p className="text-4xl font-bold">{name}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
