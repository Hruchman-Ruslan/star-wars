import { IStarWars } from "@/types/star-wars";

import CardItem from "./card-item";

export interface CardListProps {
  card: IStarWars[];
}

export default function CardList({ card }: CardListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
      {card.map(({ id, name }) => (
        <CardItem id={id} name={name} key={id} />
      ))}
    </ul>
  );
}
