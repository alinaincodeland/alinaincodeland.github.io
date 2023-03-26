import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
} from "mdb-react-ui-kit";
import "./projects.css";
import DCIconnect from "../assets/DCIconnect.png";
import EdMundo from "../assets/EdMundo.png";
import HelloFresh from "../assets/HelloFresh.png";
import WeatherApp from "../assets/WeatherApp.png";
import GitHubRepo from "../assets/github-repo.gif";
import Live from "../assets/live.gif";

export default function Projects() {
  return (
    <div className="project-container" id="projects">
      <MDBContainer className="project-container-row">
        <MDBRow>
          <h1 className="project-title">My projects</h1>
        </MDBRow>
        <MDBRow>
          <MDBCol md={6}>
            <MDBCard className="project-card">
              <MDBCardImage position="top" alt="..." src={EdMundo} />
              <MDBCardBody>
                <MDBCardTitle>EdMundo</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody className="project-links">
                <MDBCardLink href="#">
                  <img src={Live} alt="deployed-website" />
                </MDBCardLink>
                <MDBCardLink href="#">
                  <img src={GitHubRepo} alt="live-repo" />
                </MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md={6}>
            <MDBCard className="project-card">
              <MDBCardImage position="top" alt="..." src={DCIconnect} />
              <MDBCardBody>
                <MDBCardTitle>DCI Connect</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody className="project-links">
                <MDBCardLink href="#">
                  <img src={Live} alt="deployed-website" />
                </MDBCardLink>
                <MDBCardLink href="#">
                  <img src={GitHubRepo} alt="live-repo" />
                </MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md={6}>
            <MDBCard className="project-card">
              <MDBCardImage position="top" alt="..." src={HelloFresh} />
              <MDBCardBody>
                <MDBCardTitle>Hello Fresh Replica</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody className="project-links">
                <MDBCardLink href="#">
                  <img src={Live} alt="deployed-website" />
                </MDBCardLink>
                <MDBCardLink href="#">
                  <img src={GitHubRepo} alt="live-repo" />
                </MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md={6}>
            <MDBCard className="project-card">
              <MDBCardImage position="top" alt="..." src={WeatherApp} />
              <MDBCardBody>
                <MDBCardTitle>Weather App</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody className="project-links">
                <MDBCardLink href="#">
                  <img src={Live} alt="deployed-website" />
                </MDBCardLink>
                <MDBCardLink href="#">
                  <img src={GitHubRepo} alt="live-repo" />
                </MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
