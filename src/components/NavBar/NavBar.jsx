import CartWidget from "./CartWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div>
        <img src="/src/assets/logo_navbar.png" alt="" />
      </div>
      <ul className="list-store">
        <li>Basicos</li>
        <li>Extras</li>
        <li>Contactanos</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
