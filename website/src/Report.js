import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagesrc from "./news-stymie1.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import imagesrc2 from "./hand-drawn-speech-therapy-illustration_23-2149211795.avif";
function Report() {
  return (
    <>
      <Container
        fluid
        style={{
          padding: 0,
          minHeight: "calc(60vh - 8px)", // Minimum height ensures it adjusts with reduced height
          overflowX: "hidden",
          overflowY: "auto", // Adds scrolling if content overflows
        }}
      >
        <Row noGutters style={{ minHeight: "60vh", alignItems: "start" }}>
          {/* Use vh for consistent height */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center p-0"
          >
            <img
              src={imagesrc2}
              alt="About Us"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center p-4"
            style={{ backgroundColor: "#fff" }}
          >
            <h1 className="mb-4">Book a Session</h1>
            <p className="mb-0" style={{ paddingRight: "10vw" }}>
              Feel ready to talk to a counsellor about how you're feeling? Click
              this link to book a session!
            </p>
            {/* Link below the text */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://wellbeingteamappointmentscheduling.as.me/schedule/6bc57216"
              className="mt-4 btn btn-primary"
              style={{
                maxWidth: "200px", // Set a max width for the button
                width: "100%", // Ensures the button stays responsive
              }}
            >
              Book Now
            </a>
          </Col>
        </Row>
      </Container>

      {/* Duplicate the section for the second container */}
      <Container
        fluid
        style={{
          padding: 0,
          overflowX: "hidden",
          minHeight: "calc(100vh - 80px)",
          overflowY: "auto",
        }}
      >
        <Row noGutters style={{ minHeight: "70vh", alignItems: "start" }}>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center p-0"
            style={{
              height: "40vh", // Ensure the column itself is tall
            }}
          >
            <img
              src={imagesrc}
              alt="About Us"
              className="img-fluid"
              style={{
                height: "100%", // Set the image to take full height of the column
                width: "auto", // Let the width adjust proportionally to the height
                objectFit: "cover",
              }}
            />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center p-4"
            style={{ backgroundColor: "#fff" }}
          >
            <h1 className="mb-4">Report a Bully</h1>
            <p className="mb-0" style={{ paddingRight: "10vw" }}>
              Being bullied? Click this link to report your bully and receive
              the support you need and deserve.
            </p>
            {/* Link below the text */}
            <a
              href="https://stymie.co.nz/
"
              rel="noopener noreferrer"
              target="_blank"
              className="mt-4 btn btn-primary"
              style={{
                maxWidth: "150px", // Set a max width for the button
                width: "70%", // Ensures the button stays responsive
              }}
            >
              Report a Bully
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Report;
