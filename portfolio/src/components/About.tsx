import "../styles/About.scss";
import {
  FaAngleDoubleDown,
  FaAngleDown,
  FaBook,
  FaAward,
} from "react-icons/fa";

interface AboutProps {
  image: string;
}

function About(props: AboutProps) {
  return (
    <>
      <section id="about">
        <div className="about-header">
          <p className="about-sub">En savoir plus</p>
          <h1 className="about_title">A propos de moi</h1>
        </div>
        <div className="section-container">
          <div className="section-pic">
            <img
              src={props.image}
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="content-container">
              <div className="about-container">
                <div className="details-container">
                  <FaAward />
                  <h2>Experience</h2>
                  <p>
                    {" "}
                    Mini Entreprise <br /> Responsable du service communication
                    marketing{" "}
                  </p>
                  <p>
                    Start Up App Mobile <br /> Chargée du design UX et UI,
                    Identité visuelle, Flyers, PDF et Dessins
                  </p>
                </div>
              </div>
              <div className="about-container">
                <div className="details-container">
                  <FaBook />
                  <h2>Parcours</h2>
                  <p>Brevet Général</p>
                  <p>Baccalauréat Général</p>
                  <p>Open Classrooms</p>
                </div>
              </div>
            </div>
            <div className="text-container">
              <p>
                Passionné et autodidacte dans le domaine du développement Full
                Stack, je suis une personne dynamique qui est très motivée pour
                apprendre en permanence. J’apprécie particulièrement le travail
                en équipe, l’écoute, la transmission ou le partage de
                connaissances tout comme les défis techniques. Ma curiosité, ma
                rigueur et ma capacité d’adaptation sont autant d’atouts pour
                aborder chaque projet avec énergie et précision.
              </p>
            </div>
          </div>
        </div>
        {/* <FaAngleDown
          className="arrow"
          // onClick={() => (location.href =)}
        /> */}
      </section>
    </>
  );
}

export default About;
