import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <MDBContainer className="skills-container-row">
        <MDBRow>
          <h1 className="skills-title"> My skills</h1>
        </MDBRow>
        <MDBRow>
          <h2>Tech stack</h2>
        </MDBRow>
        <MDBRow>
          <h2>Others</h2>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
