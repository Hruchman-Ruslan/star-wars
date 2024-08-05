import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders the heading with 'Star Wars'", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Star Wars");
  });

  it("renders the Youtube video iframe", () => {
    render(<Home />);

    const iframeElement = screen.getByTitle("Star Wars Video");
    expect(iframeElement).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Home />);

    const descriptionElement = screen.getByRole("paragraph");
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(
      "This project is designed for Star Wars enthusiasts."
    );
  });

  it(`renders the "Start" link with correct href`, () => {
    render(<Home />);

    const linkElement = screen.getByRole("link", { name: "Start" });
    expect(linkElement).toHaveAttribute("href", "/star-wars");
  });
});
