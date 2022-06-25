import { AiFillGithub } from "react-icons/ai";
import "./BioDetails.css";

export const BioDetails = () => {
  return (
    <div className="container-bio-details">
      <div className="details-top">
        <span className="title-details">Tech Stack</span>
        <li>- reactjs</li>
        <li>- nodejs</li>
        <li>- tailwindcss</li>
      </div>
      <div className="details-bot">
        <span className="title-details">On the web</span>
        <br />
        <AiFillGithub className="bot-icon" />
      </div>
    </div>
  );
};
