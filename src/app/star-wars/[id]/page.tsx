import { Metadata } from "next";
import { notFound } from "next/navigation";

import { filterHeroFilms } from "@/utils/filmUtils";
import { filterHeroStarships } from "@/utils/starshipUtils";

import { getStarWarsById } from "@/actions/getStarWarsById";
import { getStarWarsFilms } from "@/actions/getStarWarsFilms";
import { getStarWarsStarship } from "@/actions/getStarWarsStarship";

import FlowComponent from "@/components/detail-card/flow-component";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const hero = await getStarWarsById(parseInt(params.id)); // Await the hero data
  const films = await getStarWarsFilms(); // Await films data

  // Find the films in which the hero appears
  const heroFilms = filterHeroFilms(films, hero.id);

  return {
    title: hero.name, // Use hero name as title
    description: `This hero appears in ${heroFilms.length} films.`, // Page description
  };
}

export interface HeroPageProps {
  params: { id: string }; // Parameters containing the hero ID
}

// Component for rendering the detailed view of a Star Wars hero
export default async function HeroPage({ params }: HeroPageProps) {
  const heroId = parseInt(params.id); // Convert ID from string to number
  const [hero, films, starships] = await Promise.all([
    getStarWarsById(heroId),
    getStarWarsFilms(),
    getStarWarsStarship(),
  ]);

  // If hero data is not found, return a 404 page
  if (!hero) {
    notFound();
  }

  // Filter films where the hero appears
  const heroFilms = filterHeroFilms(films, heroId);

  // Filter starships that are in the films where the hero appears
  const heroStarships = filterHeroStarships(starships, heroFilms);

  // Create initial nodes for the flow diagram
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

  // Create initial edges for the flow diagram
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
    // Pass initialNodes and initialEdges to the FlowComponent as the starting state
    <FlowComponent initialNodes={initialNodes} initialEdges={initialEdges} />
  );
}
