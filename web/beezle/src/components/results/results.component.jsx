import React from "react";

import "./results.styles.scss";

const Results = ({ results }) => {
  return (
    <div className="results">
      <h3>Results</h3>
      {results ? (
        <span>results list</span>
      ) : (
        <span className="no-results">Enter letters to see results.</span>
      )}
    </div>
  );
};

export default Results;
