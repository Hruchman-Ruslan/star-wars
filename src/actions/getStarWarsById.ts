"use server";

// Interface for Star Wars data by ID
export interface IStarWarsById {
  id: number;
  name: string;
  films: number[];
  starships: number[];
}

// Function to get Star Wars hero by ID
export async function getStarWarsById(id: number) {
  const response = await fetch(`https://sw-api.starnavi.io/people/${id}`);

  // If the response is not OK, throw an error
  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }

  const data: IStarWarsById = await response.json();

  // Return only the values we need
  const { name, films, starships } = data;

  return {
    id,
    name,
    films,
    starships,
  };
}
