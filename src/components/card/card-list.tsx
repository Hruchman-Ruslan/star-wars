import { IStarWars } from "@/types/star-wars";

import CardItem from "./card-item";

export interface CardListProps {
  card: IStarWars[]; // Array of Star Wars cards to display
}

// Component for rendering a list of card items
export default function CardList({ card }: CardListProps) {
  // Filter out duplicates based on the unique 'id'
  const uniqueCards = Array.from(
    new Map(card.map((item) => [item.id, item])).values()
  );

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
      {/* Render each card item */}
      {uniqueCards.map(({ id, name }) => (
        <CardItem id={id} name={name} key={id} />
      ))}
    </ul>
  );
}
