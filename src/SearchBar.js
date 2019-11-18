import React from "react";

export default function SearchBar(props) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.submitHandle(event.target.title.value);
      }}
    >
      <input type="text" placholder="title" name="title"></input>
      <button type="submit">Search</button>
    </form>
  );
}
