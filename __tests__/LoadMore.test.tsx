import { render, screen, waitFor } from "@testing-library/react";
import { IStarWars } from "@/types/star-wars";
import LoadMore from "@/components/load-more";
import { getStarWars } from "@/actions/getStarWars";

jest.mock("@/actions/getStarWars", () => ({
  getStarWars: jest.fn(),
}));

describe("LoadMore", () => {
  const initialData: IStarWars[] = [
    { id: 1, name: "Luke Skywalker", films: [], starships: [] },
  ];

  it("renders initial data and shows spinner while loading more data", async () => {
    (getStarWars as jest.Mock).mockResolvedValueOnce([
      { id: 10, name: "Obi-Wan Kenobi", films: [], starships: [] },
    ]);

    render(<LoadMore initialData={initialData} />);

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByAltText("spinner")).toBeInTheDocument();
  });
});
