import React from "react";
import "./App.css";
import Header from "./Header";
import ResultsDisplay from "./ResultsDisplay";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      loading: false,
      filter: null,
      searchTerm: ""
    };
  }

  handleSearch = inputSearchTerm => {
    this.setState({
      searchTerm: inputSearchTerm
    });
  };

  handleFilter(filterInput) {}

  render() {
    return (
      <div>
        <Header submitHandle={this.handleSearch} />
        <main>
          <section className="results-display">
            <ResultsDisplay />
          </section>
        </main>
      </div>
    );
  }
}
