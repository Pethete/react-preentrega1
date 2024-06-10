import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <img src="/src/assets/logo_navbar.png" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/" className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Inicio
                </a>
              </Link>
              <Link to="/category/basicos" className="nav-item">
                <a className="nav-link active">Basicos</a>
              </Link>
              <Link to="/category/extras" className="nav-item">
                <a className="nav-link active">Extras</a>
              </Link>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
