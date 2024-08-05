import { render, screen } from "@testing-library/react";

import { IStarWars } from "@/types/star-wars";

import CardList from "@/components/card/card-list";

jest.mock("@/components/card/card-item", () => ({
  __esModule: true,
  default: jest.fn(({ id, name }) => (
    <li data-testid={`card-item-${id}`} key={id}>
      <a href={`/star-wars/${id}`}>{name}</a>
    </li>
  )),
}));

describe("CardList", () => {
  const props: { card: IStarWars[] } = {
    card: [
      { id: 1, name: "Luke Skywalker", films: [], starships: [] },
      { id: 2, name: "Darth Vader", films: [], starships: [] },
    ],
  };

  it("renders a list of CardItem components", () => {
    render(<CardList {...props} />);

    const cardItems = screen.getAllByTestId(/^card-item-/);
    expect(cardItems).toHaveLength(props.card.length);

    props.card.forEach(({ id, name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByRole("link", { name })).toHaveAttribute(
        "href",
        `/star-wars/${id}`
      );
    });
  });

  it("renders the list with correct styles", () => {
    render(<CardList {...props} />);

    const ulElement = screen.getByRole("list");
    expect(ulElement).toHaveClass(
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10"
    );
  });
});
