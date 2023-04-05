import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import WorkingHome from "../assets/working-at-home.gif";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <MDBContainer className="hero-section">
        <MDBRow>
          <MDBCol md="7" className="hero-text">
            <h1 className="hero-title">Alina Cuznetov</h1>
            <h1 className="hero-title-span"> Frontend Web Developer</h1>
            <p className="hero-subtitle">
              Creative frontend web developer focused on creating user-friendly,
              functional applications using React, JavaScript and CSS. I am
              eager to apply my current knowledge as well as learn new
              technologies in a company which values mentorship and diversity.
            </p>

            <a
              className="hero-demo-button"
              href="https://drive.google.com/file/d/1q7GNCbbYitPu5PSQD8YhS7fon3Pwa7zt/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              See my CV
            </a>
          </MDBCol>
          <MDBCol md="5" className="hero-container-image">
            <img
              src={WorkingHome}
              alt="woman-binoculars"
              className="hero-image-main"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Hero;
