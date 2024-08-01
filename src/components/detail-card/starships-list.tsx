import { IStarships } from "@/types/starships";

export interface StarshipsListProps {
  starships: IStarships[];
  starshipIds: number[];
}

export default function StarshipsList({
  starships,
  starshipIds,
}: StarshipsListProps) {
  const findStarshipsForFilm = (starshipIds: number[]) =>
    starships.filter((starship) => starshipIds.includes(starship.id));

  const starshipsForFilm = findStarshipsForFilm(starshipIds);

  return (
    <div>
      {starshipsForFilm.length > 0 ? (
        <ul>
          {starshipsForFilm.map((starship) => (
            <li key={starship.id}>
              <p>{starship.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-600">No starships found.</div>
      )}
    </div>
  );
}
