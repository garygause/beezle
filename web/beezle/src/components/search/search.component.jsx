import React from "react";

import RICIBs from "react-individual-character-input-boxes";

import "./search.styles.scss";

const Search = ({ handleOutput }) => {
  return (
    <div className="search">
      <h3>Letters</h3>
      <div className="description">
        Enter the 7 letters in the NY Times Spelling Bee. Put the required
        letter in the yellow box.
      </div>
      <div className="input-box-container">
        <RICIBs
          amount={7}
          autoFocus
          handleOutputString={handleOutput}
          inputProps={[{}, {}, {}, { style: { background: "yellow" } }]}
          inputRegExp={/^[a-z]$/}
        />
      </div>
    </div>
  );
};

export default Search;
