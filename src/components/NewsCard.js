import React, { Component } from "react";
import "../css/newscard.css";

export default class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: props.tag,
      date: props.date,
      title: props.title,
      url: props.url
    };
  }
  render() {
    return (
      <div className="news-card">
        <p className="topics-content">
          <a href={this.state.url} data-i18n-text="news_1_title">
            {this.state.title}
          </a>
        </p>
        <div className="topics-date">
          <span className="topics-tag">
            <span data-i18n-text="news_1_label">{this.state.tag}</span>
          </span>
          <span className="topics-time">{this.state.date}</span>
        </div>
      </div>
    );
  }
}
