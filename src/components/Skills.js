import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import JS from "../assets/js.png";
import Angular from "../assets/angular.png";
import ReactIcon from "../assets/react.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Express from "../assets/express.png";
import Github from "../assets/github.png";
import MongoDB from "../assets/mongodb.png";
import Next from "../assets/next.png";
import Node from "../assets/node.png";
import Ruby from "../assets/ruby.png";
import Saas from "../assets/saas.png";
import Figma from "../assets/figma.png";
import Tailwind from "../assets/tailwind.png";
import Mui from "../assets/mui.png";
import Typescript from "../assets/typescript.png";

const techStackIcons = [
  { src: JS, alt: "JS-icon", name: "JavaScript" },
  { src: ReactIcon, alt: "React-icon", name: "React" },
  { src: Angular, alt: "Angular-icon", name: "Angular" },
  { src: Ruby, alt: "Ruby-icon", name: "Ruby" },
  { src: Typescript, alt: "Typescript-icon", name: "Typescript" },
  { src: HTML, alt: "HTML-icon", name: "HTML5" },
  { src: CSS, alt: "CSS-icon", name: "CSS3" },
  { src: Next, alt: "Next-icon", name: "Next JS" },
  { src: Node, alt: "Node-icon", name: "Node JS" },
  { src: Express, alt: "Express-icon", name: "Express JS" },
  { src: MongoDB, alt: "MongoDB-icon", name: "MongoDB" },
  { src: Saas, alt: "Saas-icon", name: "Sass" },
  { src: Tailwind, alt: "Tailwind-icon", name: "Tailwind CSS" },
  { src: Mui, alt: "Mui-icon", name: "Material UI" },
  { src: Github, alt: "Github-icon", name: "Git / GitHub" },
  { src: Figma, alt: "Figma-icon", name: "Figma" },
];

function Icon({ src, alt, name }) {
  return (
    <div className="icon-column">
      <div className="icon-div">
        <img src={src} alt={alt} className="icon" />
      </div>
      <div className="icon-name-div">
        <p className="icon-name">{name}</p>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-section">
        <MDBRow>
          <h1 className="skills-title">Tech stack</h1>
        </MDBRow>
        <MDBContainer className="skills-container-row">
          {techStackIcons.map((icon) => (
            <Icon key={icon.name} {...icon} />
          ))}
        </MDBContainer>
      </div>
    </div>
  );
}
