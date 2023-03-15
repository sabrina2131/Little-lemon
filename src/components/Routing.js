import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import Confirmation from "./pages/Confirmation";
import Homepage from "./pages/HomePage";
import Order from "./pages/Order";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
