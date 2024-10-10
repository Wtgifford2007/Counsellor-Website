// export default NavigationBar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// Define the NavigationBar component
function NavigationBar({ navigate }) {
  return (
    // Navbar component with grey background and expandable feature on large screens
    <Navbar
      expand="lg"
      style={{
        marginBottom: "50px",
        height: "80px",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Container>
        {/* Toggle button for collapsing navbar on smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Collapsible navbar content */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left-side navigation links */}
          <Nav className="me-auto">
            {/* Each Nav.Link represents a navigation item, styled with a white background */}
            <Nav.Link
              href="#home"
              onClick={() => navigate("home")}
              style={{ marginRight: "20px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutus"
              onClick={() => navigate("aboutus")}
              style={{ marginRight: "20px" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link href="#bookasession" onClick={() => navigate("report")}>
              Book a Session/Report a Bully
            </Nav.Link>
          </Nav>
          {/* Right-side navigation links */}
          <Nav className="ms-auto">
            {/* Contact link with white background on the right side of the navbar */}
            <Nav.Link
              href="#contact"
              onClick={() => navigate("contact")}
              style={{ backgroundColor: "white" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Export the NavigationBar component for use in other parts of the application
export default NavigationBar;
