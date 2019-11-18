import React from "react";

export default function FilterBar(props) {
  console.log(props);
  return (
    <div className="filters">
      <select
        name="ebook-type"
        onChange={event => {
          event.preventDefault();
          props.handleFilter(event.target.value);
        }}
      >
        <option value="null">type of ebook</option>
        <option value="ebooks">ebooks</option>
        <option value="free-ebooks">free-ebooks</option>
        <option value="paid-ebooks">paid-ebooks</option>
      </select>
      <select
        name="print-type"
        onSelect={event => {
          event.preventDefault();
          props.handleFilter(event.target.value);
        }}
      >
        <option value="null">length of text</option>
        <option value="full">full text</option>
        <option value="partial">partial text</option>
      </select>
    </div>
  );
}
