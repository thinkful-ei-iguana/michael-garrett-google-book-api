import React from "react";
import Result from "./Result";

export default function ResultsDisplay(props) {
  return (
    <ul className="Results">
      {props.books.map((book, index) => {
        return (
          <Result
            key={index}
            title={props.books[index].volumeInfo.title}
            author={props.books[index].volumeInfo.authors[0]}
            price={props.price}
            coverArt={props.books[index].volumeInfo.imageLinks.thumbnail}
            description={props.books[index].volumeInfo.description}
          />
        );
      })}
    </ul>
  );
}
