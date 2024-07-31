"use server";

import { IStarWars } from "@/types/star-wars";

export async function getStarWars(page: number = 1): Promise<IStarWars[]> {
  const response = await fetch(
    `https://sw-api.starnavi.io/people/?page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }

  const data = await response.json();

  return data.results;
}
