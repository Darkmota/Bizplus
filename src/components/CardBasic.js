import React, { Component } from "react";
import "../css/cardbasic.css";

export default class CardBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      imgUrl: props.imgUrl,
      title: props.title,
      date:props.date
    };
  }
  render() {
    return (
      <div className="basic-card">
        <a href={this.state.url}>
          <p className="img">
            <img
              src={this.state.imgUrl}
              className="basic-item-image"
              alt=""
            />
          </p>
          <div className="detail_area">
            <span>{this.state.date}</span>
            <h5 className="title" data-i18n-text="work_1">
              {this.state.title}
            </h5>
          </div>
        </a>
      </div>
    );
  }
}
