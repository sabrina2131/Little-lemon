import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  const route = "/";

  render(
    <MemoryRouter route={route}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getAllByText(/Reservations/i)?.[0];
  expect(linkElement).toBeInTheDocument();
});
