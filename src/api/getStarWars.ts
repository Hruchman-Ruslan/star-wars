import { IStarWars } from "@/types/star-wars";

export async function getStarWars(): Promise<IStarWars[]> {
  const response = await fetch("https://sw-api.starnavi.io/people/?page=1");

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();

  return data.results;
}
