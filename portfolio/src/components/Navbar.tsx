// import "../styles/Navbar.scss";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
// };
// function Navbar() {
//   return (
//     <header className="navbar">
//       <div id="logo">Viknesh Sadish</div>
//       <div id="navbar">
//         <ul>
//           <NavLink to="/" end>
//             <li id="accueil">
//               <a href="présentation">Présentation</a>
//             </li>
//           </NavLink>
//           <NavLink to="/propos">
//             <li id="propos">
//               <a href="compétences">Compétences</a>
//             </li>
//           </NavLink>
//           <NavLink to="/propos">
//             <li id="propos">
//               <a href="propos">A propos</a>
//             </li>
//           </NavLink>
//           <NavLink to="/propos">
//             <li id="propos">
//               <a href="projets">Projets</a>
//             </li>
//           </NavLink>
//           <NavLink to="/propos">
//             <li id="propos">
//               <a href="contact">Contact</a>
//             </li>
//           </NavLink>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

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
        <a href="#hero" onClick={closeMenu}>
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
            <a href="#hero" onClick={closeMenu}>
              Présentation
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Compétences
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              À propos
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
