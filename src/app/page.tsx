import { getStarWars } from "@/actions/getStarWars";

import LoadMore from "@/components/load-more";

export default async function Home() {
  const data = await getStarWars();

  return (
    <>
      <main>
        <h1 className="font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-9xl p-4">
          STAR WARS
        </h1>
        <LoadMore initialData={data} />
      </main>
    </>
  );
}
