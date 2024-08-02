import { getStarWars } from "@/actions/getStarWars";

import LoadMore from "@/components/load-more";
import Title from "@/components/title";

export default async function Home() {
  const data = await getStarWars();

  return (
    <main>
      <Title />
      <LoadMore initialData={data} />
    </main>
  );
}
