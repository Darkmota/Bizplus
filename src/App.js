import React from "react";

import GlobalHedaer from "./components/GlobalHeader";
import HomePage from "./views/HomePage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalHedaer />
        <HomePage />
      </div>
    );
  }
}

export default App;
