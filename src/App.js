import React from "react";
import { Route } from 'react-router-dom'
import GlobalHedaer from "./components/GlobalHeader";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";
import "./css/normalize.css";
import RouteName from './config/RouteName'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalHedaer />
        <Route exact path="/" component={HomePage}></Route>
        {
          RouteName.map(route => (
            <Route path={`/${route.name}`} key={route.name} component={route.component}></Route>
          ))
        }
        
        {/* <Route parh='/contact_us' component={ContactUs}></Route> */}
        <Footer />
      </div>
    );
  }
}

export default App;
