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
import DCIconnect from "../assets/DCIconnect.png";
import EdMundo from "../assets/EdMundo.png";
import HelloFresh from "../assets/HelloFresh.png";
import WeatherApp from "../assets/WeatherApp.png";
import GitHubRepo from "../assets/github-repo.gif";
import Live from "../assets/live.gif";
import Presentation from "../assets/presentation.gif";

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
              <MDBCardImage
                position="top"
                alt="EdMundo project"
                src={EdMundo}
                className="project-img"
              />
              <MDBCardBody>
                <MDBCardTitle>EdMundo</MDBCardTitle>
                <MDBCardText>
                  A full-stack MERN platform for educational institutions
                  transitioning to online learning.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody className="project-links">
                {/* <MDBCardLink href="#" target="_blank">
                  <img src={Live} alt="deployed-website" />
                </MDBCardLink> */}
                <MDBCardLink
                  href="https://docs.google.com/presentation/d/19JyDABWLwdF_c5SIr7pT_kFGzosUpj6TIPKB8i6WWgs/edit?usp=sharing"
                  target="_blank"
                >
                  <img src={Presentation} alt="presentation" />
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
              <MDBCardImage
                position="top"
                alt="Weather App project"
                src={WeatherApp}
                className="project-img"
              />
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
              <MDBCardImage
                position="top"
                alt="Hello Fresh project"
                src={HelloFresh}
                className="project-img"
              />
              <MDBCardBody>
                <MDBCardTitle>Hello Fresh Replica</MDBCardTitle>
                <MDBCardText>
                  Partial replica of HelloFresh, a meal kit delivery website,
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
          <MDBCol md={6}>
            <MDBCard className="project-card">
              <MDBCardImage
                position="top"
                alt="DCI Connect project"
                src={DCIconnect}
                className="project-img"
              />
              <MDBCardBody>
                <MDBCardTitle>DCI Connect</MDBCardTitle>
                <MDBCardText>
                  Mentorship platform that connects current DCI students and
                  alumni built with Next.js and MongoDB.
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
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
