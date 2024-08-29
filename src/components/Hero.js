import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <MDBContainer className="hero-section">
        <MDBRow>
          <MDBCol md="6" className="hero-text">
            <div>
              {" "}
              <h1 className="hero-title">Alina Cuznetov</h1>
              <h1 className="hero-subtitle"> Frontend Engineer</h1>
            </div>

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
              href="https://drive.google.com/file/d/1ps-7QyuIQyHoTnP2k1dj1RBBUNk5WUoZ/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              See my CV
            </a>
          </MDBCol>
          <MDBCol md="5" className="hero-container-video">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1003611463?h=b50480f6f2&autoplay=1"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frame
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Rewind and Play: My Frontend Story"
              ></iframe>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Hero;
