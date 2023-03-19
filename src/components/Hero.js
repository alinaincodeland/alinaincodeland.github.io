import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import Woman from "../assets/girl-meditate.gif";
import Binoculars from "../assets/binoculars-girl.png";

const Hero = () => {
  return (
    <div className="hero">
      <MDBContainer className="hero-section">
        <MDBRow>
          <MDBCol md="7" className="hero-text">
            <h1 className="hero-title">
              Alina Cuznetov <br />
              <span className="hero-title-span"> Frontend Web Developer </span>
            </h1>
            <p className="hero-subtitle">
              Creative frontend web developer focused on creating user-friendly,
              functional applications using React, JavaScript and CSS. I am
              eager to apply my current knowledge as well as learn new
              technologies in a company which values mentorship and diversity.
            </p>

            {/* <MDBBtn className="hero-demo-button">Get in touch</MDBBtn> */}
          </MDBCol>
          <MDBCol md="5" className="hero-container-image">
            <img
              src={Woman}
              alt="woman-meditating-gif"
              className="hero-image-main"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Hero;
