import React, { Component } from "react";
import "../css/cardmask.css";

class CardMask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      url: props.url,
      imgUrl: props.imgUrl,
      content: props.content,
      more: props.more
    };
  }
  render() {
    return (
      <div>
        <div className="item-content">
          <div className="item-img">
            <img src={this.state.imgUrl} alt="" />
            <div className="mask">
              <a
                href={this.state.url}
                className="btn-mask"
                data-i18n-text="learn_more"
              >
                {this.state.more}
              </a>
            </div>
          </div>
          <div className="item-txt">
            <h3 className="caps">
              <a href={this.state.url}>{this.state.name}</a>
            </h3>
            <p>{this.state.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardMask;
