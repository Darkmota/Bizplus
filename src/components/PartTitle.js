import React, { Component } from "react";
import "../css/parttitle.css";

class PartTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }
  render() {
    return (
      <div className="part-title">
        <h1 className="caps">{this.state.title}</h1>
        <hr />
      </div>
    );
  }
}

export default PartTitle;
