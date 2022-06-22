import "./BioDetails.css";
import { AiFillGithub } from "react-icons/ai";

export const BioDetails = () => {
  return (
    <div className="container-bio-details">
      <div className="details-top">
        <span className="title-details">Tech Stack</span>
        <li>reactjs</li>
        <li>nodejs</li>
        <li>tailwindcss</li>
      </div>
      <div className="details-bot">
        <span className="title-details">On the web</span>
        <div>
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
};
