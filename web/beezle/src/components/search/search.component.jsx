import React from "react";

import InputBox from "../input-box/input-box.component";

import "./search.styles.scss";

const Search = ({ letters }) => {
  return (
    <div className="search">
      <h3>Letters</h3>
      <span className="description">
        Enter the 7 letters in the NY Times Spelling Bee. Click the bee icon
        below the letter that is required.
      </span>
      <div className="input-box-container">
        {letters.map((letter) => (
          <InputBox letter={letter} />
        ))}
      </div>
    </div>
  );
};

export default Search;
