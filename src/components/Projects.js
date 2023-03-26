import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./projects.css";
import DCIconnect from "../assets/DCIconnect.png";
import EdMundo from "../assets/EdMundo.png";
import Meme from "../assets/meme-generator.png";
import HelloFresh from "../assets/HelloFresh.png";
import WeatherApp from "../assets/WeatherApp.png";

export default function Projects() {
  return (
    <div className="project-container" id="projects">
      <MDBContainer className="project-container-row">
        <MDBRow>
          <h1 className="project-title">My projects</h1>
        </MDBRow>
        <MDBRow>
          <MDBCol md={6}>
            <div className="project-card">
              <img src={EdMundo} alt="EdMundo project" />
            </div>

            <div>EdMundo</div>
          </MDBCol>
          <MDBCol md={6}>
            <div className="project-card">
              <img src={DCIconnect} alt="DCIConnect project" />
            </div>

            <div>DCIConnect</div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="project-container-row">
          <MDBCol md={6}>
            <div className="project-card">
              <img src={HelloFresh} alt="EdMundo project" />
            </div>

            <div>HelloFresh Clone</div>
          </MDBCol>
          <MDBCol md={6}>
            <div className="project-card">
              <img src={WeatherApp} alt="Weather app project" />
            </div>

            <div>Weather app</div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
