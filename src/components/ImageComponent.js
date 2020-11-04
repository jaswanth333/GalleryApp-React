import React, { useState } from "react";
import Images from "../Images";
import "./ImageComponent.css";
export default function ImageComponent() {
  const [SelectedImg, setSelectedImage] = useState(Images[0]);
  return (
    <div className="container">
      <img src={SelectedImg} alt="efe" className="selected" />
      <div className="image-container">
        {Images.map((img, index) => (
          <img
            src={img}
            style={{
              border: SelectedImg === img ? "2px solid #3A8DF3" : "none"
            }}
            key={index}
            alt="dog"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
