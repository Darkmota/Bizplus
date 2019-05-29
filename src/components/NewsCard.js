import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import NewsInfo from '../views/NewsInfo'
import "../css/newscard.css";

export default class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: props.tag,
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
          <Link to={`/news/${this.state.query}`} >
              {this.state.title}01
          </Link>
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
