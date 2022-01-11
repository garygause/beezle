import React from "react";

import Header from "./components/header/header.component";
import Search from "./components/search/search.component";
import Results from "./components/results/results.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      letters: ["a", "b", "c", "d", "e", "f", "g"],
      requiredLetter: "",
      results: [],
    };
  }

  render() {
    const { letters, requiredLetter, results } = this.state;
    return (
      <div>
        <Header title="Beezle" />
        <div className="info">
          <span>
            What is Beezle? *expandable*
            <br />
            Ever wonder what that 10 letter word in the NY Times Spelling Bee
            mini game was that you failed to figure out? That drove me nuts.
            Beezle allows you to see potential solutions to the mini game. You
            should not use this until after you have used up your tries in the
            game for the day. It is a great game, but this is a major spoiler.
          </span>
          <div className="download-link">Download NY Times App</div>
        </div>
        <Search letters={letters} requiredLetter={requiredLetter} />
        <Results results={results} />
      </div>
    );
  }
}

export default App;
