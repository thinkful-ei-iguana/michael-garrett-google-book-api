import React from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

export default function Header(props) {
  return (
    <header>
      <h1>Google Book Search</h1>
      <SearchBar submitHandle={props.submitHandle} />
      <FilterBar handleFilter={props.handleFilter} />
    </header>
  );
}
