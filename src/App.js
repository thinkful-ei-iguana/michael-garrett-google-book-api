import React from "react";
import "./App.css";
import ResultsDisplay from "./ResultsDisplay";

export default class App extends React.Component {
  state = {
    response: [],
    loading: false,
    filter: null,
    searchTerm: null
  };

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
          <div>{/* <SearchBar /> */}</div>
          <div>{/* <FilterBar /> */}</div>
        </header>
        <main>
          <section className="results-display">
            <ResultsDisplay />
          </section>
        </main>
      </div>
    );
  }
}
