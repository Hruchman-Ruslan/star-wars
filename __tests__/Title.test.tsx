import { render, screen } from "@testing-library/react";
import Title from "@/components/title";

describe("Title", () => {
  it(`renders the heading with Star Wars`, () => {
    render(<Title />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("STAR WARS");
  });

  it(`renders the 'STAR WARS' link with correct href`, () => {
    render(<Title />);

    const linkElement = screen.getByRole("link", { name: "STAR WARS" });
    expect(linkElement).toHaveAttribute("href", ".");
  });
});
