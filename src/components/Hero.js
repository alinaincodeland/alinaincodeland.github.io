import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Avatar from "../assets/avatar.png";
import Arrow from "../assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <MDBContainer className="hero-section">
        <MDBRow>
          <MDBCol md="5" className="hero-container-image">
            <img src={Avatar} alt="woman-avatar" className="hero-image-main" />
          </MDBCol>
          <MDBCol md="7" className="hero-text">
            <h1 className="hero-title">Alina Cuznetov</h1>
            <h1 className="hero-subtitle"> Frontend Engineer</h1>
            <p className="hero-description">
              Hey there! I'm a frontend engineer with a creative twist, calling
              Berlin home. With almost two years of experience, I’ve been diving
              into the dynamic world of web development. I'm am enthusiastic
              about applying my current knowledge while constantly pushing
              myself to learn more. I thrive in forward-thinking environments
              that value mentorship and diversity. Let's build the future
              together!
            </p>

            <a
              className="hero-demo-button"
              href="https://drive.google.com/file/d/1RuUHUb37Z4KIvD4TGnU6juMmiOKNerW7/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              See my CV
            </a>
          </MDBCol>
        </MDBRow>
        <img src={Arrow} alt="woman-avatar" className="arrow" />
      </MDBContainer>
    </div>
  );
};

export default Hero;
