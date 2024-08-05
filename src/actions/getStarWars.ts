"use server";

// Interface for Star Wars data
interface IStarWars {
  results: {
    id: number;
    name: string;
    films: number[];
    starships: number[];
  }[];
}

// Function to get Star Wars heroes
export async function getStarWars(page: number = 1) {
  const response = await fetch(
    `https://sw-api.starnavi.io/people/?page=${page}`
  );

  // If no more requests, return an empty array
  if (!response.ok) {
    if (response.status === 404) {
      return [];
    }
    throw new Error("Failed to fetch data!");
  }

  const data: IStarWars = await response.json();

  // Return only the values we need
  return data.results.map(({ id, name, films, starships }) => ({
    id,
    name,
    films,
    starships,
  }));
}
