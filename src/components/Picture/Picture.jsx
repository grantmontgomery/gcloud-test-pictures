import React from "react";
import "./Picture.css";

export const Picture = ({ imageSource, imageHeight, imageWidth }) => {
  return (
    <div className="wrapper">
      <img
        style={{
          height: imageHeight > imageWidth ? "auto" : "100%",
          width: imageHeight > imageWidth ? "100%" : "auto",
        }}
        src={imageSource}
        alt=""
      />
    </div>
  );
};
