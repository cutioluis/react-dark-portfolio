import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section className="container container-about">
      <div className="about-left">
        <span className="purple-text">✋Luis Cutiopala </span>
        <p className="gray-text">
          Empecé en el mundo del desarrollo cuando tenía 14 años programando con
          c++ creando juegos en la terminal, cuando descubrí el desarrollo web
          empece con las tecnologías básicas cono, HTML, CSS y JavaScript
          actualmente trabajo con
          <span className="white-text">Reactjs y </span>
        </p>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
