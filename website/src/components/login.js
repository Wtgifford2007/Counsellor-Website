import { Button, FormControl, FormLabel, Modal } from "react-bootstrap";
import { useState } from "react";

function Login(props) {
  const [show, setShow] = useState(false);
  // state to store password
  const [password, setPassword] = useState("");

  // login function
  const handleLogin = (action) => {
    // if password is not nothing
    if (password) {
      // post password to the Flask function
      fetch("http://localhost:5000/verify_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // if password is correct
          if (data.success === true) {
            // hanlde login function
            props.handleLogin(true);
          } else {
            // is it isnt correct, show an error message
            alert("Incorrect Password!");
          }
        });
      // close the login form
      handleClose();
    } else {
      // if users doesnt input a proper password give a message
      alert("Please provide a password to login!");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* log in button */}
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      {/* log in form  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLabel>Enter Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"primary"} onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
