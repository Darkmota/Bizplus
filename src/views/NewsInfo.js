import React, { Component } from "react";
import { connect } from "react-redux";
import { Tag } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

import "./newsinfo.css";

class NewsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsInfoHeader: {
        title: "新闻页",
        imgUrl: "./imgs/findjob.jpg"
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
          <div className="newsinfo-PageHeader">
            <PageHeader {...this.state.newsInfoHeader} />
          </div>
          {/* mainPage */}
          <div className="newsinfo-main-page">
            <div className="newsinfo-main">
              <div className="news-page-header">
                <div className="news-header-info">
                  <Tag color="geekblue">新闻</Tag>
                  <p className="news-header-date">2019.4.23</p>
                </div>
                <div className="news-header-title">
                  <h1>
                    2019年度 人工知能学会全国大会 (第33回)」出展のお知らせ
                  </h1>
                </div>
              </div>
              <div className="news-page-body">
                <p className="text">
                  Deep
                  Percept株式会社は、2019年6月4日(火)から6月7日(金)にかけて、朱鷺メッセ
                  新潟コンベンションセンターで開催される「2019年度
                  人工知能学会全国大会 (第33回)」に出展致します。
                </p>
                <p className="text">
                  会場では最新AIソリューションをご紹介するとともに、弊社が目指すAI事業の全体像をご説明いたします。
                  <br />
                  また、会期中は取締役社長の上村の他、研究/開発メンバがブースでお待ちしております。採用についてのご相談も受け付けております。是非、ブースへお立ち寄りください。(ブース番号:企業展示A会場
                  A-4)
                </p>
                <h2 className="second-title">ソリューション詳細</h2>
                <p className="text">
                  口座開設に必要な機能を網羅したeKYCソリューションです。
                  <br />
                  改正された犯収法施行規則に基づき本人確認業務のWEB完結化を実現します。
                </p>
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
  )(NewsInfo)
);
