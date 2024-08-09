/* import * as ReactQuery from "@tanstack/react-query"; */
import { render, screen } from "@testing-library/react";
import { Agents } from "./Agents";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

describe("Agents", () => {
  it("should render agents", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Agents />
      </QueryClientProvider>
    );

    expect(screen.getByText("Agents")).toBeInTheDocument();
    expect(screen.getByText("Page: 1")).toBeInTheDocument();
  });
  it("should render input search and type", async () => {
    const user = userEvent.setup();
    render(
      <QueryClientProvider client={queryClient}>
        <Agents />
      </QueryClientProvider>
    );
    expect(screen.getByLabelText("Find Agent")).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    await user.type(input, "monet");
    expect(screen.getByRole("textbox")).toHaveValue("monet");
  });
  it("should render table", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Agents />
      </QueryClientProvider>
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
    expect(screen.getByText("Is Artist")).toBeInTheDocument();
  });
});
