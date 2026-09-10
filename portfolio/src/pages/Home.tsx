import Navbar from "../components/Navbar";
import FooterApp from "../components/FooterApp";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "../App.scss";
import "../styles/Home.scss";
import ProfilePic from "../assets/Profilepic(2).png";
import CV from "../assets/Sadish Viknesh CV Développeur Web.pdf";
import LinkedinLogo from "../assets/linkedin-logo-black-transparent.png";
import GitHubLogo from "../assets/logo-github.png";

function Home() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <main className="main-content">
        <section id="profile">
          <div className="profile-pic">
            <img src={ProfilePic} alt="ProfilePic" />
          </div>
          <div className="profile-details">
            <div className="profile-text">
              <p className="text-p">Bonjour, je suis</p>
              <h1 className="name">Viknesh Sadish</h1>
              <p className="text-p">Dévloppeur Frontend</p>
            </div>

            <div className="btn-container">
              <button className="btn-color1" onClick={() => window.open(CV)}>
                Télécharger CV
              </button>
              <button className="btn-color2" onClick={() => window.open(CV)}>
                Contact
              </button>
            </div>
            <div id="social-container">
              <img
                src={LinkedinLogo}
                alt="Logo de Linkedin"
                className="icons"
                onClick={() => (location.href = "https://linkedin.com")}
              />
              <img
                src={GitHubLogo}
                alt="Logo de Github"
                className="icons"
                onClick={() => (location.href = "https://github.com/Vikneshh2")}
              />
            </div>
          </div>
        </section>
        <About image={ProfilePic}></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <FooterApp></FooterApp>
    </div>
  );
}
export default Home;
