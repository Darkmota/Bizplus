import React from "react";

import GlobalHedaer from "./components/GlobalHeader";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";
import "./css/normalize.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalHedaer />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
