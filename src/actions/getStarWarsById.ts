"use server";

export interface IStarWarsById {
  id: number;
  name: string;
  films: number[];
  starships: number[];
}

export async function getStarWarsById(id: number) {
  const response = await fetch(`https://sw-api.starnavi.io/people/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }

  const data: IStarWarsById = await response.json();

  const { name, films, starships } = data;

  return {
    id,
    name,
    films,
    starships,
  };
}
