import React from "react";
import { LoadingBar } from "../LoadingBar/LoadingBar";
import { Picture } from "../Picture/Picture";

const Results = ({ results }) => {
  console.log("results rerender");
  return (
    <section className="results" style={{ backdropFilter: "blur(20px)" }}>
      {results.loading ? (
        <LoadingBar></LoadingBar>
      ) : results.error ? (
        "error"
      ) : (
        results.data.map((result) => (
          <Picture
            key={result.id}
            imageHeight={result.height}
            imageWidth={result.width}
            imageSource={result.urls.regular}
          ></Picture>
        ))
      )}
    </section>
  );
};

export default React.memo(Results);
