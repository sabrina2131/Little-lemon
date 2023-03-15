import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src="/BRANDING/icons_assets/Logo.svg"
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h3>Home</h3>
      </Link>
      <Link className="hover-effect" to="">
        <h3>About</h3>
      </Link>
      <Link className="hover-effect" to="">
        <h3>Menu</h3>
      </Link>
      <Link className="hover-effect" to="/reservations">
        <h3>Reservations</h3>
      </Link>
      <Link className="hover-effect" to="">
        <h3>Order online</h3>
      </Link>
      <Link className="hover-effect" to="">
        <h3>Login</h3>
      </Link>
    </menu>
  );
}
