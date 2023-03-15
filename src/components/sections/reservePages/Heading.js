import HeroImage from "../../../assets/food/food4.webp";
export default function Heading() {
  return (
    <header className="reserve-table" style={{ paddingTop: "50px" }}>
      <img
        className="header-reserve"
        src="/BRANDING/icons_assets/restaurant.jpg"
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Reserve a table</h1>
      </div>
    </header>
  );
}
