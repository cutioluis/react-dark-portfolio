import ReactTooltip from "react-tooltip";
import { BioDetails } from "../BioDetails/BioDetails";
import "./Bio.css";

export const Bio = () => {
  const bios = [
    {
      year: "",
      description: "Trabaje en Seplom",
    },
    {
      year: "",
      description: "Uso reactjs y Redux para manejar el estado",
    },
    {
      year: "",
      description: "Me encanta trabajar diseñando interfaces con Figma",
    },
  ];

  return (
    <section className="container container-lines">
      <p className="purple-text">📚 Bio </p>
      <div className="line"></div>
      {bios.map((e) => (
        <div key={e.year} className="lines-items">
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
