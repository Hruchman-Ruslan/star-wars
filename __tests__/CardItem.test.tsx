import { render, screen } from "@testing-library/react";
import CardItem from "@/components/card/card-item";

describe("CardItem", () => {
  const props = {
    id: 1,
    name: "Luke Skywalker",
  };

  it("renders the card with the correct name", () => {
    render(<CardItem {...props} />);

    const nameElement = screen.getByText("Luke Skywalker");
    expect(nameElement).toBeInTheDocument();
  });

  it("renders the card with the correct link", () => {
    render(<CardItem {...props} />);

    const linkElement = screen.getByRole("link", { name: "Luke Skywalker" });
    expect(linkElement).toHaveAttribute("href", "/star-wars/1");
  });

  it("renders the card with correct styles", () => {
    render(<CardItem {...props} />);

    const cardElement = screen.getByText("Luke Skywalker").closest("li");
    expect(cardElement).toHaveClass(
      "w-full max-w-sm mx-auto bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700 p-4 transition-transform transform hover:scale-105"
    );
  });
});
