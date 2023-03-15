import { Link } from "react-router-dom";
export default function SpecialCard(props) {
  return (
    <article className="menu-card">
      <img src={props.image} alt="Special Menu"></img>
      <section className="menu-card-content">
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <div className="special-button-container">
          <Link className="special-button" to="/order">
            Order for Delivery
          </Link>
        </div>
      </section>
    </article>
  );
}
