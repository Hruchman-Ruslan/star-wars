import { IFilm } from "@/types/film";
import { IStarships } from "@/types/starships";

import StarshipsList from "./starships-list";

export interface FilmListProps {
  films: IFilm[];
  starships: IStarships[];
}

export default function FilmList({ films, starships }: FilmListProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Films</h2>
      <ul className="list-disc pl-5">
        {films.length > 0 ? (
          films.map((film: IFilm) => (
            <li key={film.id} className="mb-4 text-lg text-gray-800">
              <div className="font-bold">{film.title}</div>
              <StarshipsList
                starships={starships}
                starshipIds={film.starships}
              />
            </li>
          ))
        ) : (
          <li className="text-lg text-gray-600">No films found.</li>
        )}
      </ul>
    </div>
  );
}
