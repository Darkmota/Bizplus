import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import './chart.css'

class OrganizationChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "企業情報 - 組織図",
        imgUrl: "https://picsum.photos/1920/500"
      }
    };
  }

  render() {
    return (
      <>
        <div className="chart-page">
          <PageHeader {...this.state.pageHeaderInfo} />
          <div className="chart-container">
            <div className="chart-img">
              <img src="http://103.44.28.14:1888/imgs/group-pc.svg" alt="." />
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
  )(OrganizationChart)
);
