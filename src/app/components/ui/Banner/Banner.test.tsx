import React from "react";
import { Banner } from "./Banner";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Render Banner component", () => {
  it("should render Banner component", () => {
    render(<Banner />);
    const titles = screen.getAllByText("YOUR FAVORITE ART GALLERY");
    expect(titles).toHaveLength(2);
    expect(titles[0]).toBeInTheDocument();
    expect(titles[1]).toBeInTheDocument();
  });
});
