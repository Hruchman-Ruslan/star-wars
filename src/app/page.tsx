import { getStarWars } from "@/actions/getStarWars";

import CardList from "@/components/card-list";
import LoadMode from "@/components/load-more";

export default async function Home() {
  const allStarWars = await getStarWars(4);

  console.log(allStarWars);

  return (
    <>
      <main>
        <h1 className="font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-9xl p-4">
          STAR WARS
        </h1>
        <CardList card={allStarWars} />
        <LoadMode />
      </main>
    </>
  );
}
