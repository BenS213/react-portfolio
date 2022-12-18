import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiReact } from "react-icons/si";

export default function AboutMe() {
  return (
    <div className="aboutMe container" id="aboutMe">
      <div className="sectionLabel">
        <span>About Me</span>
      </div>
      <div className="row">
        <p className="col">
          Hi there! My name is Ben and I am a web developer with a passion for
          creating intuitive and visually appealing websites. I have a strong
          foundation in HTML, CSS, and JavaScript, and I am always looking to
          learn and improve my skills. I have experience working within a team
          to build responsive websites and web applications, as well as working
          with modern frameworks such as React and Bootstrap. When I'm not
          coding, you can find me exploring the outdoors with my wife and dog,
          or tinkering with new technologies. Thank you for considering me for
          your web development needs.
        </p>
        <div className="skills col">
          <div className="skillsTitle">SKILLS</div>

          <a
            href="https://www.w3schools.com/html/"
            target="_blank"
            className="skill"
            rel="noreferrer"
          >
            <SiHtml5 className="aboutMeIcon" />
            <p>HTML</p>
          </a>
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            className="skill"
            rel="noreferrer"
          >
            <SiCss3 className="aboutMeIcon" />
            <p>CSS</p>
          </a>
          <a
            href="https://www.w3schools.com/js/"
            target="_blank"
            className="skill"
            rel="noreferrer"
          >
            <SiJavascript className="aboutMeIcon" />
            <p>Javascript</p>
          </a>
          <a
            href="https://www.w3schools.com/sql/"
            target="_blank"
            className="skill"
            rel="noreferrer"
          >
            <SiMysql className="aboutMeIcon" />
            <p>MySQL</p>
          </a>
          <a
            href="https://www.mongodb.com/home"
            target="_blank"
            className="skill"
            rel="noreferrer"
          >
            <SiMongodb className="aboutMeIcon" />
            <p>MongoDB</p>
          </a>
          <a
            href="https://beta.reactjs.org/"
            target="_blank"
            className="skill"
            rel="noreferrer"
          >
            <SiReact className="aboutMeIcon" />
            <p>React</p>
          </a>
          <a
            href="https://www.w3schools.com/nodejs/nodejs_intro.asp"
            target="_blank"
            className="skill"
            rel="noreferrer"
          >
            <SiNodedotjs className="aboutMeIcon" />
            <p>Node JS</p>
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            className="skill"
            rel="noreferrer"
          >
            <SiExpress className="aboutMeIcon" />
            <p>Express.JS</p>
          </a>
        </div>
      </div>
    </div>
  );
}
