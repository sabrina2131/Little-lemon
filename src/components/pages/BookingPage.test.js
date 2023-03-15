import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { fetchAPI } from "../../bookingsAPI";
import BookingPage, { reducer } from "./BookingPage";

test("renders booking page component", () => {
  const route = "/reservations";

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[route]}>
      <BookingPage />
    </MemoryRouter>
  );
  const text = screen.getByText("Reserve a table");
  expect(text).toBeInTheDocument();
});

test("reducer", () => {
  const initialState = fetchAPI(new Date());
  const action = { type: "UNKNOWN" };
  const newState = reducer(initialState, action);
  expect(newState).toEqual(initialState);
});

test("should update the state using the reducer", () => {
  const initialState = [];
  const fetchedData = new Date(1, 1, 2023);
  const action = { type: "UPDATE_TIMES", payload: fetchedData };
  const newState = reducer(initialState, action);
  expect(newState).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "22:00",
    "22:30",
    "23:30",
  ]);
});
