import getStarWars from "@/api/getStarWars";

interface IStarWars {
  id: string;
  name: string;
}

export default async function Home() {
  const results = (await getStarWars()) as IStarWars[];

  console.log("results", results);

  return (
    <ul>
      {results.map(({ id, name }) => (
        <li key={id}>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
}
