import React from "react";

import "./results.styles.scss";

const Results = ({ results }) => {
  return (
    <div className="results">
      <h3>Results</h3>
      <div className="description">
        The words listed below are from an online dictionary and may not match
        the words in the NY Times Spelling Bee word list.
      </div>
      <div className="results">
        {results.length > 0 ? (
          results.map((word, idx) => (
            <div key={idx} className="word">
              {word}
            </div>
          ))
        ) : (
          <span>Enter letters to see results.</span>
        )}
      </div>
    </div>
  );
};

export default Results;
