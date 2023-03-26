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
                  Full stack schooling platform for educational institutions
                  that require a sudden transition to online learning built with
                  MERN stack.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody className="project-links">
                <MDBCardLink href="#" target="_blank">
                  <img src={Live} alt="deployed-website" />
                </MDBCardLink>
                <MDBCardLink
                  target="_blank"
                  href="https://github.com/alinaincodeland/EdMundo"
                >
                  <img src={GitHubRepo} alt="github-repo" />
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
                  Full stack mentorship platform that connects current DCI
                  students and alumni built with Next.js and MongoDB.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody className="project-links">
                <MDBCardLink
                  href="https://github.com/alinaincodeland/DCI-connect"
                  target="_blank"
                >
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
                  Weather application displaying weather forecast for 5 days
                  built using Open Weather API and Geo API, React and CSS.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody className="project-links">
                <MDBCardLink
                  href="https://world-weather-app-react.netlify.app/"
                  target="_blank"
                >
                  <img src={Live} alt="deployed-website" />
                </MDBCardLink>
                <MDBCardLink
                  href="https://github.com/alinaincodeland/weather-app-react"
                  target="_blank"
                >
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
                  Partial replica of a HelloFresh meal kit delivery website
                  built using React, Node and Tailwind.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody className="project-links">
                <MDBCardLink
                  href="https://github.com/alinaincodeland/hello-fresh"
                  target="_blank"
                >
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
