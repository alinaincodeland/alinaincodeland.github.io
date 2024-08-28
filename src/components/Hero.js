import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <MDBContainer className="hero-section">
        <MDBRow>
          <MDBCol md="7" className="hero-text">
            <h1 className="hero-title">Alina Cuznețov</h1>
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
            <div class="container-button">
              <a
                href="https://drive.google.com/file/d/1ps-7QyuIQyHoTnP2k1dj1RBBUNk5WUoZ/view?usp=drive_link"
                class="button type--A hero-demo-button"
                target="_blank"
                rel="noreferrer"
              >
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">CHECK MY CV</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
              </a>
            </div>
          </MDBCol>
          <MDBCol md="5" className="hero-container-image">
            <img src={Profile} alt="woman-avatar" className="hero-image-main" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Hero;
