"use server";

// Interface for Star Wars films data
interface IStarWarsFilms {
  results: {
    id: string;
    title: string;
    characters: number[];
    starships: number[];
  }[];
}

// Function to get Star Wars films
export async function getStarWarsFilms() {
  const response = await fetch(`https://sw-api.starnavi.io/films`);

  // If the response is not OK, throw an error
  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }

  const data: IStarWarsFilms = await response.json();

  // Return only the values we need
  return data.results.map(({ id, title, characters, starships }) => ({
    id,
    title,
    characters,
    starships,
  }));
}
