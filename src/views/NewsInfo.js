import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

import "./newsinfo.css";

class NewsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsInfoHeader: {
        title: "新闻页",
        imgUrl: "http://localhost:3000/imgs/findjob.jpg"
      }
    };
  }

  componentDidMount() {
    console.log(this.props.match);
  }
  render() {
    return (
      <>
        <div className="newsinfo-container">
          {/* PageHeader */}
          <PageHeader {...this.state.newsInfoHeader} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapStateToDispatch = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapStateToDispatch
  )(NewsInfo)
);
