import React from "react";
import FetchUsers from "./FetchUsers";

const App = () => {
  return (
    <div className="l-container">
      <h1 className="c-page-title">Top GitHuber from Bangladesh</h1>
      <FetchUsers />
    </div>
  );
};

export default App;
