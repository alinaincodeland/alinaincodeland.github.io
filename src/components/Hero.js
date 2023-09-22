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
             As a creative frontend developer, I specialize in crafting user-friendly and robust applications using React, Angular, and CSS. I am enthusiastic about applying my current knowledge while remaining committed to learning new technologies. My aspiration is to join a forward-thinking company that places a strong emphasis on mentorship and diversity.
            </p>

            <a
              className="hero-demo-button"
              href="https://drive.google.com/file/d/1YL6XBPqxHgsW1it3Bssy8Fs2ZxoWGfiX/view?usp=sharing"
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
