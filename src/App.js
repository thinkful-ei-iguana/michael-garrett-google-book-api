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
      searchTerm: "",
      error: null
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

  getResults = () => {
    const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${baseURL}${this.state.searchTerm}`)
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
      .catch(error => this.setState({ error: error.message, loading: false }));
  };

  handleFilter = filterInput => {};

  render() {
    return (
      <div>
        <Header submitHandle={this.handleSearch} />
        <main>
          <section className="results-display">
            <ResultsDisplay books={this.state.response} />
          </section>
        </main>
      </div>
    );
  }
}
