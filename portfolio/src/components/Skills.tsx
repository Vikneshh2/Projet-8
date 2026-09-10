import { FaCheckCircle } from "react-icons/fa";
import "../styles/Skills.scss";

export const Skills = () => {
  const categories = [
    {
      title: "Développement Frontend",
      skills: [
        { name: "HTML", level: "Avancé" },
        { name: "CSS", level: "Avancé" },
        { name: "SASS", level: "Intermédiaire" },
        { name: "JavaScript", level: "Confirmé" },
        { name: "TypeScript", level: "Confirmé" },
        { name: "Material UI", level: "Intermédiaire" },
      ],
    },
    {
      title: "Développement Backend",
      skills: [
        { name: "MongoDB", level: "Confirmé" },
        { name: "Node JS", level: "Intermédiaire" },
        { name: "Express JS", level: "Intermédiaire" },
        { name: "Git", level: "Intermédiaire" },
      ],
    },
  ];

  return (
    <section id="experience" className="skills">
      <div className="skills__header">
        <p className="skills__subtitle">Mon</p>
        <h1 className="skills__title">Experience</h1>
      </div>

      <div className="skills__container">
        {categories.map((category, index) => (
          <div key={index} className="skills__card">
            <h2>{category.title}</h2>
            <div className="skills__grid">
              {category.skills.map((skill, skillIndex) => (
                <article key={skillIndex} className="skills__item">
                  <FaCheckCircle className="skills__icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
