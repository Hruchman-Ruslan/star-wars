export default async function getStarWars() {
  const response = await fetch("https://sw-api.starnavi.io/people");

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();

  return data.results;
}
