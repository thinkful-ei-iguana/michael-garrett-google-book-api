import React from "react";

export default function ResultsDisplay() {
  return (
    <div className="Result">
      <h3>title</h3>
      <div className="content-box">
        <div className="content-left">
          <img alt="cover art"></img>
        </div>
        <div className="content-right">
          <p>Author: </p>
          <p>Price: </p>
          <p>Description: </p>
        </div>
      </div>
    </div>
  );
}
