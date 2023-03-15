import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
import ReservationForm from "../sections/reservePages/BookingForm";
import Heading from "../sections/reservePages/Heading";

// Define the reducer function
export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.payload);
    default:
      return state;
  }
}

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(reducer, fetchAPI(new Date()));

  function updateTimes(date) {
    dispatch({ type: "UPDATE_TIMES", payload: date });
  }
  return (
    <>
      <Heading />
      <ReservationForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </>
  );
}
