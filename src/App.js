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
      filter: "null",
      searchTerm: "",
      error: null,
      baseURL: "https://www.googleapis.com/books/v1/volumes?q="
    };
  }

  handleSearch = inputSearchTerm => {
    this.setState(
      {
        searchTerm: inputSearchTerm
      },
      this.getResults
    );
  };

  handleFilter = filterInput => {
    this.setState(
      {
        filter: filterInput
      },
      this.getResults
    );
  };

  getResults = () => {
    if (this.state.filter === "null") {
      let newURL = `${this.state.baseURL}${this.state.searchTerm}`;
      fetch(`${newURL}`)
        .then(res => {
          if (!res.ok) {
            throw new Error("Something went wrong!");
          } else {
            return res.json();
          }
        })
        .then(data =>
          this.setState({
            response: data.items
          })
        )
        .catch(error =>
          this.setState({ error: error.message, loading: false })
        );
    } else {
      let newURL = `${this.state.baseURL}${this.state.searchTerm}&filter=${this.state.filter}`;
      fetch(newURL)
        .then(res => {
          if (!res.ok) {
            throw new Error("Something went wrong!");
          } else {
            return res.json();
          }
        })
        .then(data =>
          this.setState({
            response: data.items
          })
        )
        .catch(error =>
          this.setState({ error: error.message, loading: false })
        );
    }
  };

  render() {
    return (
      <div>
        <Header
          submitHandle={this.handleSearch}
          handleFilter={this.handleFilter}
        />
        <main>
          <section className="results-display">
            <ResultsDisplay books={this.state.response} />
          </section>
        </main>
      </div>
    );
  }
}
