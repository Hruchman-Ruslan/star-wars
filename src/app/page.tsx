import { getStarWars } from "@/api/getStarWars";

import CardList from "@/components/card-list";

export default async function Home() {
  const allStarWars = await getStarWars();

  console.log(allStarWars);

  return <CardList card={allStarWars} />;
}
