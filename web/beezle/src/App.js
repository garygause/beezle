import React from "react";

import About from "./components/about/about.component";
import Header from "./components/header/header.component";
import Search from "./components/search/search.component";
import Results from "./components/results/results.component";
import Footer from "./components/footer/footer.componenet";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  fetchResults = (letters) => {
    const results = ["ball", "balloon"];
    this.setState({ results: results });
  };

  handleOutput = (output) => {
    console.log([...output]);
    if (output.length === 7) {
      console.log("got 7 letters");
      this.fetchResults([...output]);
    } else {
      this.setState({ results: [] });
    }
  };

  showHideContent = () => {
    if (this.state.showContent) {
    }
  };

  render() {
    const { results } = this.state;
    return (
      <div>
        <Header title="Beezle" />
        <About />
        <Search handleOutput={this.handleOutput} />
        <Results results={results} />
        <Footer />
      </div>
    );
  }
}

export default App;
