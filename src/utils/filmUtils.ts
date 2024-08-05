import { IFilm } from "@/types/film";

// Function takes films and a hero ID, returns films where the hero appeared
export function filterHeroFilms(films: IFilm[], heroId: number) {
  return films.filter(({ characters }) => characters.includes(heroId));
}
