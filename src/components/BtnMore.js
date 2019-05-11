import React, { Component } from "react";
import "../css/btnmore.css";

class BtnMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      url: props.url
    };
    this.handleClickBtn = this.handleClickBtn.bind(this);
  }
  handleClickBtn() {
    let url = this.state.url;
    console.log(url);
    console.log(this.props)
  }
  render() {
    return (
      <div className="btn-more">
        <button className="btn-dark-blue" onClick={this.handleClickBtn}>
          {this.state.name}
        </button>
      </div>
    );
  }
}

export default BtnMore;
