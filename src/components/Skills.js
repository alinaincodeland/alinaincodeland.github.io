import React, { useState } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./skills.css";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/js.png";
import ReactIcon from "../assets/react.png";
import Canva from "../assets/canva.png";
import Confluence from "../assets/confluence.png";
import Express from "../assets/express.png";
import Github from "../assets/github.png";
import MongoDB from "../assets/mongodb.png";
import Next from "../assets/next.png";
import Node from "../assets/node.png";
import Notion from "../assets/notion.png";
import Saas from "../assets/saas.png";
import Vsc from "../assets/vsc.png";
import Tailwind from "../assets/tailwind.png";
import Slack from "../assets/slack.png";

export default function Skills() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="skills-container" id="skills">
      <div className="skills-section">
        <MDBRow>
          <h1 className="skills-title"> My skills</h1>
        </MDBRow>
        <MDBRow>
          <h2 className="skills-subtitle">Tech stack</h2>
        </MDBRow>
        <MDBContainer className="skills-container-row">
          <MDBRow>
            <MDBCol md={2} className="icon-column">
              <div>
                <img src={JS} alt="JS-icon" className="icon" />
              </div>
              <div>
                <p className="icon-name">JavaScript</p>
              </div>
            </MDBCol>

            <MDBCol md={2} className="icon-column">
              <div>
                {/* rome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
                <img
                  src={HTML}
                  alt="HTML-icon"
                  className="icon"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                />
                {/* {isHovering && ( */}
                <div>
                  <p className="icon-name">HTML5</p>
                </div>
                {/* )} */}
              </div>
            </MDBCol>
            <MDBCol md={2} className="icon-column">
              {" "}
              <div>
                <img src={CSS} alt="CSS-icon" className="icon" />
              </div>
              <div>
                <p className="icon-name">CSS3</p>
              </div>
            </MDBCol>

            <MDBCol md={2} className="icon-column">
              <div>
                <img src={ReactIcon} alt="React-icon" className="icon" />
              </div>
              <div>
                <p className="icon-name">React</p>
              </div>
            </MDBCol>
            <MDBCol md={2} className="icon-column">
              <div>
                <img src={Node} alt="Node-icon" className="icon" />
              </div>
              <div>
                <p className="icon-name">Node JS</p>
              </div>
            </MDBCol>
            <MDBCol md={2} className="icon-column">
              <div>
                <img src={Express} alt="Express-icon" className="icon" />
              </div>
              <div>
                <p className="icon-name">Express JS</p>
              </div>
            </MDBCol>
            <MDBCol md={2} className="icon-column">
              <div>
                <img src={MongoDB} alt="MongoDB-icon" className="icon" />
              </div>
              <div>
                <p className="icon-name">MongoDB</p>
              </div>
            </MDBCol>
            <MDBCol md={2} className="icon-column">
              <div>
                <img src={Saas} alt="Saas-icon" className="icon" />
              </div>
              <div>
                <p className="icon-name">Sass</p>
              </div>
            </MDBCol>
            <MDBCol md={2} className="icon-column">
              <div>
                <img src={Next} alt="Next-icon" className="icon" />
              </div>
              <div>
                <p className="icon-name">Next JS</p>
              </div>
            </MDBCol>

            <MDBCol md={2} className="icon-column">
              <div>
                <img src={Tailwind} alt="Tailwind-icon" className="icon" />
              </div>
              <div>
                <p className="icon-name">Tailwind CSS</p>
              </div>
            </MDBCol>

            <MDBCol md={2} className="icon-column">
              <div>
                <img src={Github} alt="Github-icon" className="icon" />
              </div>
              <div>
                <p className="icon-name"> Git / GitHub</p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBRow className="skills-subtitle">
          <h2 className="mt-2">Others</h2>
        </MDBRow>
        <MDBContainer className="skills-container-row">
          <MDBCol md={2} className="icon-column">
            <div>
              <img src={Vsc} alt="VSC-icon" className="icon" />
            </div>
            <div>
              <p className="icon-name"> Visual Studio Code</p>
            </div>
          </MDBCol>
          <MDBCol md={2} className="icon-column">
            <div>
              <img src={Confluence} alt="Confluence-icon" className="icon" />
            </div>
            <div>
              <p className="icon-name"> Confluence</p>
            </div>
          </MDBCol>
          <MDBCol md={2} className="icon-column">
            <div>
              <img src={Canva} alt="Canva-icon" className="icon" />
            </div>
            <div>
              <p className="icon-name">Canva</p>
            </div>
          </MDBCol>
          <MDBCol md={2} className="icon-column">
            <div>
              <img src={Notion} alt="Notion-icon" className="icon" />
            </div>
            <div>
              <p className="icon-name">Notion</p>
            </div>
          </MDBCol>
          <MDBCol md={2} className="icon-column">
            <div>
              <img src={Slack} alt="Slack-icon" className="icon" />
            </div>
            <div>
              <p className="icon-name">Slack</p>
            </div>
          </MDBCol>
        </MDBContainer>
      </div>
    </div>
  );
}
