import { notFound } from "next/navigation";

import { getStarWarsById } from "@/actions/getStarWarsById";
import { getStarWarsFilms } from "@/actions/getStarWarsFilms";
import { getStarWarsStarship } from "@/actions/getStarWarsStarship";

import FilmList from "@/components/detail-card/film-list";

export interface HeroPageProps {
  params: { id: string };
}

export default async function HeroPage({ params }: HeroPageProps) {
  const heroId = parseInt(params.id);
  const hero = await getStarWarsById(heroId);
  const films = await getStarWarsFilms();
  const starships = await getStarWarsStarship();

  if (!hero) {
    notFound();
  }

  const heroFilms = films.filter(({ characters }) =>
    characters.includes(heroId)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{hero.name}</h1>

        <div className="mb-12">
          <FilmList films={heroFilms} starships={starships} />
        </div>
      </div>
    </div>
  );
}
