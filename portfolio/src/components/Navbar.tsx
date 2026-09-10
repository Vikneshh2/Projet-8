import { useState } from "react";
import "../styles/Navbar.scss";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <a href="#" onClick={closeMenu}>
          Viknesh Sadish
        </a>
      </div>
      {/* //// Bouton pour mobile /// */}
      <button
        className={`navbar__burger ${isOpen ? "is-open" : ""}`}
        onClick={toggleMenu}
        aria-label="Ouvrir le menu"
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
      <nav className={`navbar__menu ${isOpen ? "is-open" : ""}`}>
        <ul>
          <li>
            <a href="#about" onClick={closeMenu}>
              Présentation
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
