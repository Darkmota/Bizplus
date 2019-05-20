import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import "../css/gridcard.css";

class GridCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <div className="subnav">
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
  )(GridCard)
);