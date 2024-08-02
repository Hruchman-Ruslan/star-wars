"use server";

interface IStarWars {
  results: {
    id: string;
    name: string;
    films: number[];
    starships: number[];
  }[];
}

export async function getStarWars(page: number = 1) {
  const response = await fetch(
    `https://sw-api.starnavi.io/people/?page=${page}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      return [];
    }
    throw new Error("Failed to fetch data!");
  }

  const data: IStarWars = await response.json();

  return data.results.map(({ id, name, films, starships }) => ({
    id,
    name,
    films,
    starships,
  }));
}
