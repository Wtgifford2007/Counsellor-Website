import React, { useEffect, useState } from "react";
import NavigationBar from "./components/navbar";
import Login from "./components/login";
import Container from "react-bootstrap/Container";
import TextDisplay from "./components/text";
import { Button, Col, Row } from "react-bootstrap";
import ImageDisplay from "./components/image";

function App() {
  // variables to determain logged in state and display data
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayData, setDisplayData] = useState({});

  // use effect functino to be called as soon as the page is loaded
  useEffect(() => {
    const storedLoggedInState = localStorage.getItem("loggedIn");
    if (storedLoggedInState === "true") {
      setLoggedIn(true);
    }
    // retreive content
    fetch("http://localhost:5000/get-content")
      .then((response) => response.json())
      .then((data) => {
        setDisplayData(data);
      });
  }, []);
  // see if user has been logged in previously with local storage
  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  // handlle data change function
  const handleDataChange = (id, newContent) => {
    setDisplayData((prevData) => ({
      ...prevData,
      [id]: newContent,
    }));
  };
  // handle log in function
  const handleLogin = (action) => {
    setLoggedIn(action);
  };
  // jsx code using bootstap to display the home page
  return (
    <>
      <Container className="mt-3">
        <div className="my-3">
          <TextDisplay
            loggedIn={loggedIn}
            id={1}
            text={displayData[1]}
            editable={loggedIn}
            handleDataChange={handleDataChange}
          />
          <Row>
            <Col>
              <ImageDisplay id={2} image={displayData[2]} editable={loggedIn} />
            </Col>
            <Col>
              <ImageDisplay id={3} image={displayData[3]} editable={loggedIn} />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextDisplay
                id={4}
                text={displayData[4]}
                editable={loggedIn}
                loggedIn={loggedIn}
                handleDataChange={handleDataChange}
              />
              <ImageDisplay id={5} image={displayData[5]} editable={loggedIn} />
            </Col>
            <Col>
              <TextDisplay
                loggedIn={loggedIn}
                id={6}
                text={displayData[6]}
                editable={loggedIn}
                handleDataChange={handleDataChange}
              />
            </Col>
          </Row>
          {loggedIn ? (
            <Button variant="danger" onClick={() => handleLogin(false)}>
              Logout
            </Button>
          ) : (
            <Login handleLogin={handleLogin} />
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
