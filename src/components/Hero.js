/* eslint-disable react/jsx-no-target-blank */
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="container hero">
      <div className="heroHello">HELLO, MY NAME IS</div>
      <h1 className="heroName ">Benjamin Schoenbachler</h1>

      <div className="heroInfo">
        <div className="subHeading">
          I'm a full stack developer interested in making creative and efficient
          projects for the web
        </div>
        <div className="icons">
          <a href="https://github.com/BenS213" className="icon" target="_blank">
            <GoMarkGithub />
          </a>
          <a href="https://www.linkedin.com/in/benjamin-schoenbachler-01b134a3/" target="_blank">
            <IoLogoLinkedin className="heroIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}
