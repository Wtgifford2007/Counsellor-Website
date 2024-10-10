import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagesrc from "./f2abc89d4bf542b89e1930efcaaeb3cb_35030-pc.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function AboutUs() {
  return (
    <Container fluid style={{ padding: 0, height: "calc(100vh - 80px)" }}>
      <Row noGutters style={{ height: "70%" }}>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center p-0"
        >
          <img
            src={imagesrc}
            alt="About Us"
            className="img-fluid"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover", // Ensures the image covers the container without stretching
            }}
          />
        </Col>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center p-4"
          style={{ backgroundColor: "#fff" }}
        >
          <h1 className="mb-4">About Us</h1>
          <p
            className="mb-0"
            style={{ paddingRight: "10vw", fontFamily: "Arial, sans-serif" }}
          >
            We are committed to providing students at Christ's College with the
            help they need. Our website gives counsellors a simple way of
            providing students with the information they need to improve their
            own mental health. We also want to ensure that students are able to
            receive the support they need if they are dealing with bullying and
            give students easy access towards booking an in-person counselling
            session.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
