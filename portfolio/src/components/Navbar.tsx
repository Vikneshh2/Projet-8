import "../styles/Navbar.scss";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  image: string;
}

function Navbar(props: NavbarProps) {
  return (
    <header className="navbar">
      <img src={props.image} id="logo" />
      <h1>Viknesh Sadish</h1>
      <div>
        <NavLink to="/" end>
          <button id="accueil">Présentation</button>
        </NavLink>
        <NavLink to="/propos">
          <button id="propos">Compétences</button>
        </NavLink>
        <NavLink to="/propos">
          <button id="propos">A propos</button>
        </NavLink>
        <NavLink to="/propos">
          <button id="propos">Projets</button>
        </NavLink>
        <NavLink to="/propos">
          <button id="propos">Contact</button>
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
