import { IFilm } from "@/types/film";
import { IStarships } from "@/types/starships";

// Function takes starships and hero films, returns starships that appeared in the films where the hero appeared
export function filterHeroStarships(
  starships: IStarships[],
  heroFilms: IFilm[]
) {
  return starships.filter((starship) =>
    heroFilms.some(({ starships }) => starships.includes(starship.id))
  );
}
