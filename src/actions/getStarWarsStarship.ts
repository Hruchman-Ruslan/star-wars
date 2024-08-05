"use server";

// Interface for Star Wars starship data
interface IStarWarsStarship {
  results: {
    id: number;
    name: string;
    model: string;
    films: number[];
    pilots: number[];
  }[];
}

// Function to get Star Wars starships
export async function getStarWarsStarship() {
  const response = await fetch(`https://sw-api.starnavi.io/starships`);

  // If the response is not OK, throw an error
  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }

  const data: IStarWarsStarship = await response.json();

  // Return only the values we need
  return data.results.map(({ id, name, model, films, pilots }) => ({
    id,
    name,
    model,
    films,
    pilots,
  }));
}
