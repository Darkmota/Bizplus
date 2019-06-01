import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import "../css/gridcard.css";

class GridCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      title: props.title,
      imgUrl: props.imgUrl
    };
  }
  
  render() {
    return (
      <>
        <div className="page-nav-container">
          <div className="nav-grid-item">
            <div className="grid-item-inner">
              <div className="grid-card">
                <div className="grid-card-header">
                  <p className="card-header-num">
                    <span>{this.state.name}</span>
                  </p>
                  <p className="card-header-title">
                    <span>{this.state.title}</span>
                  </p>
                </div>
                <div className="grid-card-body">
                  <div class="card-body-img">
                    <img src={this.state.imgUrl} alt="." />
                  </div>
                </div>
              </div>
            </div>
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
  )(GridCard)
);
