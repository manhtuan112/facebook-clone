import React, { useState } from "react";

const UploadAndDisplayImage = ({selectedImage, setSelectedImage}) => {

  return (
    <div>
      {/* {selectedImage && (
        <div>
          <img
            alt="not fount"
            width="100%"
            height="200px"
            style = {{objectFit: "cover"}}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )} */}
      <input
        id="selectImg"
        type="file"
        name="myImage"
        style={{display:'none'}}
        onChange={(event) => {
          console.log(URL.createObjectURL(event.target.files[0]));
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
