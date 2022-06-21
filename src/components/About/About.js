import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section className="container-about">
      <div className="about-left">
        <h2 className="white-text">Luis</h2>
        <p>
          Hola Mi nombre es Luis y me encanta Desarrollar productos increibles
          para el mundo, Llevo desarro llando hace mas de 2 años usando Reactjs
          and this is <span className="purple-text">Portoflio.</span>
        </p>
        <ul>
          <li>React Developer</li>
          <li>Ui/Ux Designer</li>
          <li>Backedn Developer</li>
        </ul>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
