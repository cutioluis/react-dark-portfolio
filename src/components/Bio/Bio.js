import ReactTooltip from "react-tooltip";
import { BioDetails } from "../BioDetails/BioDetails";
import "./Bio.css";

export const Bio = () => {
  const bios = [
    {
      year: 2018,
      description: "Trabaje en @Seplom",
    },
    {
      year: 2019,
      description: "Cree @Worlo_Studio que brinda servicios de diseño",
    },
    {
      year: 2021,
      description: "Termine la carrera de platzi de Diseño UI",
    },
  ];

  return (
    <section className="container container-lines">
      <p className="purple-text">
        📚 Bio <span className="purple-smoke-text">-Asì empecè</span>{" "}
      </p>
      <div className="line"></div>
      {bios.map((e) => (
        <div key={e.year} className="lines-items">
          <span className="white-text">{e.year}: </span>
          {""}
          <span className="gray-text" data-tip="React-tooltip">
            {e.description}
          </span>
          <ReactTooltip place="top" effects="float" className="custom-theme">
            <BioDetails />
          </ReactTooltip>
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};

//Disable Spanish Spell Checker Dictionary in Workspace
