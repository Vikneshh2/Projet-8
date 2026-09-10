import project1Img from "../assets/Homepage.png";
import project2Img from "../assets/D_Fiche-Logement.png";
import project3Img from "../assets/Accueil.png";
import "../styles/Projects.scss";

interface Project {
  id: number;
  title: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
}

export const Projects = () => {
  const projectsList: Project[] = [
    {
      id: 1,
      title: "Sophie Bluel",
      image: project1Img,
      githubUrl: "https://github.com/Vikneshh2/Projet-3",
      demoUrl: "https://github.com/",
    },
    {
      id: 2,
      title: "Kasa",
      image: project2Img,
      githubUrl: "https://github.com/Vikneshh2/Projet-5",
      demoUrl: "https://github.com/",
    },
    {
      id: 3,
      title: "Project Three",
      image: project3Img,
      githubUrl: "https://github.com/Vikneshh2/Projet-6",
      demoUrl: "https://github.com/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <p className="projects__subtitle">Découvrez mes derniers</p>
        <h1 className="projects__title">Projets</h1>
      </div>

      <div className="projects__container">
        {projectsList.map((project) => (
          <article key={project.id} className="projects__card">
            <div className="projects__image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="projects__img"
              />
            </div>

            <h2 className="projects__card-title">{project.title}</h2>

            <div className="projects__btn-group">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__btn"
              >
                GitHub
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__btn"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* <a href="#contact" aria-label="Aller à la section contact">
        <FaAngleDown className="projects__arrow" />
      </a> */}
    </section>
  );
};

export default Projects;
