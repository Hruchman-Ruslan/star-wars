"use server";

interface IStarWarsStarship {
  results: {
    id: number;
    name: string;
    model: string;
    films: number[];
    pilots: number[];
  }[];
}

export async function getStarWarsStarship() {
  const response = await fetch(`https://sw-api.starnavi.io/starships`);

  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }

  const data: IStarWarsStarship = await response.json();

  return data.results.map(({ id, name, model, films, pilots }) => ({
    id,
    name,
    model,
    films,
    pilots,
  }));
}
