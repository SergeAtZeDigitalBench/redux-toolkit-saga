import React from "react";

import "./App.css";
import CatsList from "./components/CatsList";

function App() {
  return (
    <div className="App">
      <h1>RTK Saga</h1>
      <h2>CATS species gallery</h2>
      <p>
        Images of different specaies - crazy stuff, mate, I should tell you 😜{" "}
      </p>
      <CatsList />
    </div>
  );
}

export default App;
