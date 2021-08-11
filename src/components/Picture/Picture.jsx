import React from "react";
import "./Picture.css";

const Picture = ({ imageSource, imageHeight, imageWidth }) => {
  console.log("rerender");
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

export default React.memo(Picture);
