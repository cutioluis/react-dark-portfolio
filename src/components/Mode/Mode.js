import "./Mode.css";
import { RiSunFill } from "react-icons/ri";

export default function Mode() {
  return (
    <section className="container-mode">
      <p>Light Mode</p>
      <div className="container-icon">
        <RiSunFill className="mode-icon" />
      </div>
    </section>
  );
}
