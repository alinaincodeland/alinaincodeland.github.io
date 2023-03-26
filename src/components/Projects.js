import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./projects.css";

export default function Projects() {
  return (
    <div className="project-container" id="projects">
      <MDBContainer className="project-container-row">
        <MDBRow>
          <h1 className="project-title">My projects</h1>
        </MDBRow>
        <MDBRow>
          <MDBCol size="md">
            Project 1<video src=""></video>
          </MDBCol>
          <MDBCol size="md">
            Project 2<video src=""></video>
          </MDBCol>
        </MDBRow>
        <MDBRow className="project-container-row">
          <MDBCol size="md">
            Project 3 <video src=""></video>
          </MDBCol>
          <MDBCol size="md">
            Project 4<video src=""></video>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
