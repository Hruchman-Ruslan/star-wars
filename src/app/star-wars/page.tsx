import { getStarWars } from "@/actions/getStarWars";

import LoadMore from "@/components/load-more";
import Title from "@/components/title";

// Asynchronous component to fetch all Star Wars heroes
export default async function StarWarsPage() {
  // Function to fetch all heroes and wait for completion
  const data = await getStarWars();

  return (
    <main>
      <Title />
      {/* Pass data to the LoadMore component */}
      <LoadMore initialData={data} />
    </main>
  );
}
