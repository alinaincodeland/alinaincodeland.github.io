import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Avatar from "../assets/avatar.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <MDBContainer className="hero-section">
        <MDBRow>
          <MDBCol lg="4" className="hero-container-image">
            <img src={Avatar} alt="Young woman sitting" />
          </MDBCol>
          <MDBCol lg="6" md="12" className="hero-text">
            <div>
              <h1 className="hero-title">Alina Cuznețov</h1>
              <h1 className="hero-subtitle"> Frontend Engineer</h1>
            </div>

            <p className="hero-description">
              Hey there! I'm a frontend engineer with a creative twist, calling
              Berlin home. With almost two years of experience, I’ve been diving
              into the dynamic world of web development. I'm enthusiastic about
              applying my current knowledge while constantly pushing myself to
              learn more. I thrive in forward-thinking environments that value
              mentorship and diversity. Let's build the future together!
            </p>

            <a
              className="hero-demo-button"
              href="https://drive.google.com/file/d/1ps-7QyuIQyHoTnP2k1dj1RBBUNk5WUoZ/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              See my CV
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Hero;
