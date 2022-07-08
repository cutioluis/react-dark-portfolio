import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          ✋Luis Cutiopala{" "}
          <span className="purple-smoke-text">- Introducciòn</span>{" "}
        </span>
        <p className="gray-text">
          Hola mi nombre es Luis y me encanta desarrollar productos increibles
          para el mundo. Llevo desarro llando hace mas de 2 años usando React y
          Nodejs puedes ver mi{" "}
        </p>
        <span className="white-text">
          <a href="">Portfolio</a>
        </span>
        <ul className="tech-stack">
          <li>Web Developer</li>
          <li>Ui/Ux Designer</li>
          <li>Backed Developer</li>
        </ul>
        <a className="about-see" href="#">Ver màs {"->"} </a>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
