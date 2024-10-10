import { useEffect, useState } from "react";

function ImageDisplay(props) {
  // state to store image
  const [imageSrc, setImageSrc] = useState(props.image);

  useEffect(() => {
    setImageSrc(props.image);
  }, [props.image]);

  const handleImageUpload = (event) => {
    // create a constant file variable
    const file = event.target.files[0];

    // create form data
    const formData = new FormData();
    formData.append("image", file);
    formData.append("id", props.id);

    // request to post the form
    fetch("http://localhost:5000/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // if success then add image to the screen
        if (data.success) {
          // Assuming the server returns the new image URL
          setImageSrc(data.imageUrl);
          props.handleDataChange(props.id, data.imageUrl); // Update parent state if necessary
        } else {
          console.error("Image upload failed:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div>
      <img width="100%" src={imageSrc} alt="Uploaded content" />
      {props.editable && (
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      )}
    </div>
  );
}

export default ImageDisplay;
