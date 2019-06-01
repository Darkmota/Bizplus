import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import "../css/pageheader.css";

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      imgUrl: props.imgUrl
    };
  }

  render() {
    return (
      <>
        {/* 页面顶部布局 */}
        <div
          className="g-page-header"
          style={{ backgroundImage: `url(${this.state.imgUrl})` }}
        >
          <div className="g-title-container">
            <h1 className="g-page-name caps">{this.state.title}</h1>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 165.4 16.4"
            >
              <g>
                <path
                  className="st0"
                  d="M0.7,15.1L15.1,0.7l0.5,0.5L1.1,15.6L0.7,15.1z"
                />
                <path
                  className="st0"
                  d="M14.2,15.1L28.7,0.7l0.5,0.5L14.8,15.6L14.2,15.1z"
                />
                <path
                  className="st0"
                  d="M27.8,15.1L42.2,0.7l0.5,0.5L28.3,15.6L27.8,15.1z"
                />
                <path
                  className="st0"
                  d="M41.3,15.1L55.8,0.7l0.5,0.5L41.9,15.6L41.3,15.1z"
                />
                <path
                  className="st0"
                  d="M54.9,15.1L69.3,0.7l0.5,0.5L55.4,15.6L54.9,15.1z"
                />
                <path
                  className="st0"
                  d="M68.4,15.1L82.9,0.7l0.5,0.5L69,15.6L68.4,15.1z"
                />
                <path
                  className="st0"
                  d="M82,15.1L96.4,0.7l0.5,0.5L82.5,15.6L82,15.1z"
                />
                <path
                  className="st0"
                  d="M95.5,15.1l14.4-14.4l0.5,0.5L96,15.6L95.5,15.1z"
                />
                <path
                  className="st0"
                  d="M109.1,15.1l14.4-14.4l0.5,0.5l-14.4,14.4L109.1,15.1z"
                />
                <path
                  className="st0"
                  d="M122.6,15.1L137,0.7l0.5,0.5l-14.4,14.4L122.6,15.1z"
                />
                <path
                  className="st0"
                  d="M136.2,15.1l14.4-14.4l0.5,0.5l-14.4,14.4L136.2,15.1z"
                />
                <path
                  className="st0"
                  d="M149.8,15.1l14.4-14.4l0.5,0.5l-14.4,14.4L149.8,15.1z"
                />
              </g>
            </svg>
          </div>
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
  )(PageHeader)
);
