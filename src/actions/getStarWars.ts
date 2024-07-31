import { IStarWars } from "@/types/star-wars";

export async function getStarWars(page: number = 1): Promise<IStarWars[]> {
  const response = await fetch(
    `https://sw-api.starnavi.io/people/?page=${page}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();

  return data.results;
}
