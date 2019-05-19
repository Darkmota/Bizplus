import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import "./welfare.css";

class Welfare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "Welfare",
        imgUrl: "https://picsum.photos/1920/500"
      },
      pageNavCard: [
        {
          key: "01",
          title: "企业文化",
          imgUrl: "https://www.evoworx.co.jp/recruit/img/people/i_5.svg"
        },
        {
          key: "01",
          title: "企业文化",
          imgUrl: "https://www.evoworx.co.jp/recruit/img/people/i_5.svg"
        },
        {
          key: "01",
          title: "企业文化",
          imgUrl: "https://www.evoworx.co.jp/recruit/img/people/i_5.svg"
        },
        {
          key: "01",
          title: "企业文化",
          imgUrl: "https://www.evoworx.co.jp/recruit/img/people/i_5.svg"
        },
        {
          key: "01",
          title: "企业文化",
          imgUrl: "https://www.evoworx.co.jp/recruit/img/people/i_5.svg"
        },
        {
          key: "01",
          title: "企业文化",
          imgUrl: "https://www.evoworx.co.jp/recruit/img/people/i_5.svg"
        },
        {
          key: "01",
          title: "企业文化",
          imgUrl: "https://www.evoworx.co.jp/recruit/img/people/i_5.svg"
        },
        {
          key: "01",
          title: "企业文化",
          imgUrl: "https://www.evoworx.co.jp/recruit/img/people/i_5.svg"
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="welfare-container">
          {/* 页面顶部布局 */}
          <PageHeader {...this.state.pageHeaderInfo} />
          {/* 福利计划页面内导航 */}
          <div className="welfare-page-main">
            <div className="page-nav-container">
              {this.state.pageNavCard.map(info => (
                <div className="nav-grid-item">
                  <div className="grid-item-inner">
                    <div className="grid-card">
                      <div className="grid-card-header">
                        <p className="card-header-num">
                          <span>{info.key}</span>
                        </p>
                        <p className="card-header-title">
                          <span>{info.title}</span>
                        </p>
                      </div>
                      <div className="grid-card-body">
                        <div class="card-body-img">
                          <img src={info.imgUrl} alt="." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
  )(Welfare)
);
