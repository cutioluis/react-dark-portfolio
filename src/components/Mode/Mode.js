import "./Mode.css";
import { RiSunFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

export default function Mode() {
  return (
    <section className=" container-mode">
      <div className="mode-left">
        <ul>
          <li>Works</li>
          <li className="left-source">
            <AiFillGithub className="source-icon" />
            Source
          </li>
          <li>Me</li>
        </ul>
      </div>
      <div className="container-icon">
        <RiSunFill className="mode-icon" />
      </div>
    </section>
  );
}
