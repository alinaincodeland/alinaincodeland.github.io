import React from "react";
import { MDBFooter, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <MDBFooter className="footer">
        <div className="footer-section">
          <MDBRow>
            <MDBCol md={2}>
              <div>
                <p>Let's connect</p>
              </div>
            </MDBCol>
            <MDBCol md={4}>
              <a
                href="https://www.linkedin.com/in/alina-cuznetov-733071138"
                className="me-4 text-reset"
                target="_blank"
                rel="noreferrer"
              >
                <MDBIcon fab icon="linkedin" />
              </a>
              <a
                href="https://github.com/alinaincodeland"
                className="me-4 text-reset"
                target="_blank"
                rel="noreferrer"
              >
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>

            <MDBCol md={6}>
              <p className="footer-name">
                © {new Date().getFullYear()} Alina Cuznetov
              </p>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBFooter>
    </div>
  );
}
