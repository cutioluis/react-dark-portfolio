import ReactTooltip from "react-tooltip";
import { BioDetails } from "../BioDetails/BioDetails";
import "./Bio.css";

export const Bio = () => {
  const bios = [
    {
      year: "2005",
      description: "I Work at Seplom with tech like Reactjs",
    },
    {
      year: "2007",
      description: "I use React and Redux to manage state of your application",
    },
    {
      year: "2016",
      description: "I love work with Figma and Reactjs",
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
