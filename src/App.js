import React from "react";
import { Route } from 'react-router-dom'
import { BackTop } from 'antd';
import GlobalHeader from "./components/GlobalHeader";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";
import "./css/normalize.css";
import RouteName from './config/RouteName'
import NewsInfo from './views/NewsInfo'

class App extends React.Component {
  render() {
    let jsxRoutes = []
    for (let route of RouteName) {
      jsxRoutes.push(<Route exact path={`/${route.name}`} key={route.name} component={route.component}/>)
      if (route.children) {
        for (let child of route.children) {
          if (child.component) {
            jsxRoutes.push(<Route exact path={`/${route.name}/${child.name}`} key={`/${route.name}/${child.name}`} component={child.component}/>)
          }
        }
      }
    }
    return (
      <div className="App">
        <GlobalHeader />
        <Route exact path="/" component={HomePage}/>
        { jsxRoutes }
        <Route path="/news/:id" component={NewsInfo}/>
        <Footer />
        {/* BackTop */}
        <div>
          <BackTop />
        </div>
      </div>
    );
  }
}

export default App;
