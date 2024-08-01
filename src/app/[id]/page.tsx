import { notFound } from "next/navigation";

import { IFilm } from "@/types/film";
// import { IStarships } from "@/types/starships";

import { getStarWarsById, IStarWarsById } from "@/actions/getStarWarsById";
import { getStarWarsFilms } from "@/actions/getStarWarsFilms";
// import { getStarWarsStarship } from "@/actions/getStarWarsStarship";

// interface IFindFilm {
//   id: string;
//   title: string;
//   characters: number[];
// }

const findFilm = (films: IFilm[], hero: IStarWarsById) =>
  films.filter(({ characters }) => characters.includes(hero.id));

// const findStarships = (heroFilms: IFindFilm) => {};

export interface HeroPageProps {
  params: { id: string };
}

export default async function HeroPage({ params }: HeroPageProps) {
  const heroId = parseInt(params.id);
  const hero = await getStarWarsById(heroId);
  const films = await getStarWarsFilms();
  // const starships = await getStarWarsStarship();

  // console.log(
  //   "hero!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  //   hero
  // );
  // console.log(
  //   "films!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  //   films
  // );
  // console.log(
  //   "starships!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  //   starships
  // );

  if (!hero) {
    notFound();
  }

  const heroFilms = findFilm(films, hero);

  console.log(
    "heroFilms!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    heroFilms
  );

  return (
    <div>
      <h1>{hero.name}</h1>
      <h2>Films</h2>
      <ul>
        {heroFilms.map((film: IFilm) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
}
