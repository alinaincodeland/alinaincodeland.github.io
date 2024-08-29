import React from "react";
import { MDBFooter, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div className="footer-container">
      <MDBFooter className="footer">
        <div className="footer-section">
          <MDBRow>
            <MDBCol md={2} className="connect-text">
              <p>Let's connect</p>
            </MDBCol>
            <MDBCol md={4}>
              <a
                href="https://www.linkedin.com/in/a-cuznetov/"
                className="text-reset connect-icon"
                target="_blank"
                rel="noreferrer"
              >
                <MDBIcon fab icon="linkedin" />
              </a>
              <a
                href="https://github.com/alinaincodeland"
                className="text-reset connect-icon"
                target="_blank"
                rel="noreferrer"
              >
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>

            <MDBCol md={6}>
              <p className="footer-name">
                © {new Date().getFullYear()} Alina Cuznețov
              </p>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBFooter>
    </div>
  );
}
