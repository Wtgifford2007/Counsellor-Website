import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";

function TextDisplay(props) {
  const [text, setText] = useState(props.text);

  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Function to post data when counsellor clicks out of form
  const handleBlur = () => {
    // Post data to Flask function
    fetch("http://localhost:5000/set-content", {
      // Method of post
      method: "POST",
      // header
      headers: {
        "Content-Type": "application/json",
      },
      // making sure to turn the id and text to JSON
      body: JSON.stringify({
        id: props.id,
        content: text,
      }),
    })
      .then((response) => response.json()) // getting the response
      .then((data) => {
        // logging the result
        console.log(data);
      });

    props.handleDataChange(props.id, text);
  };

  return (
    <div className={"my-3"}>
      {props.loggedIn ? (
        <FormControl
          as="textarea"
          value={text}
          onChange={handleTextChange}
          onBlur={handleBlur}
        />
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
}

export default TextDisplay;

// import React, { useEffect, useState } from "react";
// import { FormControl } from "react-bootstrap";

// function TextDisplay(props) {
//   const [text, setText] = useState(props.text);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     setText(props.text);
//   }, [props.text]);

//   const handleTextChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleDoubleClick = () => {
//     if (props.editable) {
//       setIsEditing(true);
//     }
//   };

//   const handleBlur = () => {
//     fetch("http://localhost:5000/set-content", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         id: props.id,
//         content: text,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });

//     props.handleDataChange(props.id, text);

//     setIsEditing(false);
//   };

//   return (
//     <div className={"my-3"}>
//       {isEditing ? (
//         <FormControl
//           as="textarea"
//           value={text}
//           onChange={handleTextChange}
//           onBlur={handleBlur}
//           autoFocus
//         />
//       ) : (
//         <p onClick={handleDoubleClick}>{text}</p>
//       )}
//     </div>
//   );
// }

// export default TextDisplay;
