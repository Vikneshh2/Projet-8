// import "../scss/ErrorPage.scss";
// import Logo from "../assets/LOGO.svg";
import FooterApp from "../components/FooterApp";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ErrorPage() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <h1 className="error">404</h1>
        <p className="text-error">
          Oups! La page que vous avez demandez n'existe pas.
        </p>
        <Link to="/">
          <button className="retour-accueil">
            Retournez sur la page d'accueil
          </button>
        </Link>
      </main>
      <FooterApp></FooterApp>
    </>
  );
}
export default ErrorPage;
