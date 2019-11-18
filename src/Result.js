import React from "react";

export default function Result(props) {
  return (
    <div className="result">
      <h3>{props.title}</h3>
      <div className="content-box">
        <div className="content-left">
          <img src={props.coverArt} alt={`${props.title} cover art`}></img>
        </div>
        <div className="content-right">
          <p>Author: {props.author}</p>
          <p>Price: {props.price}</p>
          <p>Description: {props.description}</p>
        </div>
      </div>
    </div>
  );
}
