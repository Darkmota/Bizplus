import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
// import GridCard from "../components/GridCard";
import "./welfare.css";

class Welfare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "Welfare",
        imgUrl: "https://picsum.photos/1920/500"
      },
      culturePageTop: {
        imgUrl: "http://localhost:3000/imgs/welfare.jpg",
        title: "Corporate Style",
        subTitle: "Bizplusの特徴以下の社風を目標としています。",
        content: [
          {
            info: "社員が自由に発言できる環境"
          },
          {
            info: "コミュニケーションがとれる環境"
          },
          {
            info: "社員間での信頼感がとれていること"
          },
          {
            info: "社員がやりがいを感じ仕事に取り組むこと"
          },
          {
            info: "ざっくばらんに話し合いが行われている環境"
          },
          {
            info: "職場が常に明るい雰囲気と若さのエネルギー"
          }
        ]
      },
      cultureCard: [
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
          <div className="welfare-page-main">
            {/* 企业文化 */}
            <div className="company-culture">
              <div className="culture-page-top">
                <div className="culture-top-img">
                  <img src={this.state.culturePageTop.imgUrl} alt="." />
                </div>
                <div className="culture-top-content">
                  <h1>{this.state.culturePageTop.title}</h1>
                  <h2>{this.state.culturePageTop.subTitle}</h2>
                  {this.state.culturePageTop.content.map(info => (
                    <p>{info.info}</p>
                  ))}
                </div>
              </div>
              <div className="culture-content">
                <div className="culture-grid-container">
                  {this.state.cultureCard.map(info => (
                    <div className="culture-card-item">
                      <div className="card-item-inner">
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
