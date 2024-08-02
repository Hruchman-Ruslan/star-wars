import { notFound } from "next/navigation";

import { getStarWarsById } from "@/actions/getStarWarsById";
import { getStarWarsFilms } from "@/actions/getStarWarsFilms";
import { getStarWarsStarship } from "@/actions/getStarWarsStarship";

import FlowComponent from "@/components/detail-card/flow-component";

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

  const heroStarships = starships.filter((starship) =>
    heroFilms.some(({ starships }) => starships.includes(starship.id))
  );

  const initialNodes = [
    {
      id: `hero-${heroId}`,
      data: { type: "hero", label: hero.name },
      position: { x: 0, y: 0 },
      type: "custom",
    },
    ...heroFilms.map((film, index) => ({
      id: `film-${film.id}`,
      data: { type: "film", label: film.title },
      position: { x: 100 * (index + 1), y: 100 },
      type: "custom",
    })),
    ...heroStarships.map((starship, index) => ({
      id: `starship-${starship.id}`,
      data: { type: "starship", label: starship.name },
      position: { x: 100 * (index + 1), y: 200 },
      type: "custom",
    })),
  ];

  const initialEdges = [
    ...heroFilms.flatMap((film) =>
      film.starships.map((starshipId) => ({
        id: `edge-${film.id}-${starshipId}`,
        source: `film-${film.id}`,
        target: `starship-${starshipId}`,
        animated: true,
      }))
    ),
    ...heroFilms.map((film) => ({
      id: `edge-hero-${heroId}-${film.id}`,
      source: `hero-${heroId}`,
      target: `film-${film.id}`,
      animated: true,
    })),
  ];

  return (
    <FlowComponent initialNodes={initialNodes} initialEdges={initialEdges} />
  );
}
