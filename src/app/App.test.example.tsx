import React from "react";
import { App } from "./App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Render App component", () => {
  it("should render App component", () => {
    render(<App />);
    expect(screen.getByText("Art gallery")).toBeInTheDocument();
  });
});
