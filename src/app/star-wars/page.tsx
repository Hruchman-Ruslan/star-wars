import { getStarWars } from "@/actions/getStarWars";

import LoadMore from "@/components/load-more";
import Title from "@/components/title";

export interface StarWarsPageProps {}

export default async function StarWarsPage({}: StarWarsPageProps) {
  const data = await getStarWars();
  return (
    <main>
      <Title />
      <LoadMore initialData={data} />
    </main>
  );
}
