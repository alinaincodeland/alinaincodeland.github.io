import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Avatar from "../assets/avatar.png";
import "./hero.css";

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
              I'm a creative frontend engineer based in Berlin with over two
              years of experience. Currently at sofatutor, I excel in developing
              and deploying A/B tests, maintaining unit and integration tests. I
              am enthusiastic about applying my current knowledge while
              remaining committed to learning new technologies. I am passionate
              by forward-thinking companies that values mentorship and
              diversity.
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
      </MDBContainer>
    </div>
  );
};

export default Hero;
