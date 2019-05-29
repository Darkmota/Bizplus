import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Tag } from "antd";
import NewsInfo from "../views/NewsInfo";
import "../css/newscard.css";

export default class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: props.tag,
      tagColor: props.tagColor,
      date: props.date,
      title: props.title,
      url: props.url,
      query: props.query
    };
  }
  render() {
    return (
      <div className="news-card">
        <p className="topics-content">
          <Link to={`/news/${this.state.query}`}>{this.state.title}</Link>
        </p>
        <div className="topics-date">
          <Tag color={this.state.tagColor}>{this.state.tag}</Tag>
          <span className="topics-time">{this.state.date}</span>
        </div>
      </div>
    );
  }
}
