"use server";

interface IStarWarsFilms {
  results: {
    id: string;
    title: string;
    characters: number[];
    starships: number[];
  }[];
}

export async function getStarWarsFilms() {
  const response = await fetch(`https://sw-api.starnavi.io/films`);

  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }

  const data: IStarWarsFilms = await response.json();

  return data.results.map(({ id, title, characters, starships }) => ({
    id,
    title,
    characters,
    starships,
  }));
}
