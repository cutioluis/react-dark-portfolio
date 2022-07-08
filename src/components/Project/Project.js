import React from "react";
import "./Project.css";
import Line from "../../images/line-purple.svg";
import ImageTemp from "../../images/prev-project-temp.png";
import FigmaIcon from "../../images/figma-icon.svg";

function Project() {
  return (
    <section className="container container-project">
      <p className="purple-text">
        ‍💻 Open Source -
        <span className="purple-smoke-text">Visita mis ultimos proyectos </span>{" "}
      </p>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text">react-dark-portfolio</span>
          <p className="gray-text text-box">
            Templete para que muestres tus proyectos como un portafolio usando
            reactjs
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>
      <div className="project-details">
        <img src={ImageTemp} alt="Project React Simple Portfolio" />
        <div className="details-left">
          <p className="gray-text">
            Mira el diseño de este proyecto en
            <span className="text-figma">
              <img className="icon-figma" src={FigmaIcon} alt="" />
              Figma
            </span>
          </p>
          <div className="details-stack">
            <span className="white-text">Tecnologias</span>
            <ul className="gray-text">
              <li>Reactjs</li>
              <li>CMS (Contenful)</li>
              <li>Nodejs</li>
            </ul>
          </div>
          <p className="gray-text">Una estrellita en <span className="white-text">Github</span> y mira en vivo la <span className="white-text">Web</span> </p>

        </div>
      </div>
    </section>
  );
}

export default Project;
