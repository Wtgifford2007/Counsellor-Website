import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagesrc from "./Copy-of-Christ_s-College-Memorial-Dinning-Hall-1.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function Contact() {
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
          <h1 className="mb-4">Contact Counsellor</h1>
          <p className="mb-0" style={{ paddingRight: "10vw" }}>
            Counsellors - Counsellors123@christcollege.com <br></br>Feel free to
            email your counsellors if you have any suggestions, concerns or
            questions!
          </p>
          <h1 className="mb-4" style={{ paddingTop: "4rem" }}>
            Contact Us
          </h1>
          <p className="mb-0" style={{ paddingRight: "10vw" }}>
            William Gifford - wtgifford@student.christscollege.com <br></br>{" "}
            Feel free to email me if you have any concerns, suggestions or
            questions!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
