import React, { Component } from "react";
import { connect } from "react-redux";
import { Tag } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import "./profile.css";

class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "企业信息 - 公司简介",
        imgUrl: "https://picsum.photos/1920/500"
      },
      profilePageTop: {
        imgUrl: "https://picsum.photos/800/500"
      },
      bossTalks: {
        title: "董事长致辞",
        imgUrl: "/imgs/gakki.jpg",
        content: [
          {
            info: "本公司是一家培养优秀的亚洲人才，为客户提供最佳表现的企业。"
          },
          { info: "公司名称Bizplus表示对顾客的螺丝起到积极的作用。" },
          {
            info:
              "我们将学习最新的IT技术，活川，继续积极的挑战，以融合客户不断变化的社会环境。"
          },
          {
            info:
              "善待人的IT,谁都容易利川的IT,无论在哪都能使用的IT,努力做到高品质安全的活川。"
          },
          {
            info:
              "Bizplus是一家充满活力的年轻人的新公司。年轻有干劲，不输给任何人地学习，不断地磨练技术、商务礼仪，竭尽全力得到很多人信赖的公司的评价。"
          }
        ],
        end: [
          { info: "Bizplus股份有限公司董事长 " },
          { info: "江橋 美香 " },
          { info: "2017年7月吉日 " }
        ]
      }
    };
  }

  render() {
    return (
      <>
        <div className="profile-page">
          <PageHeader {...this.state.pageHeaderInfo} />
          <div className="profile-page-main">
            <div className="profile-container">
              <div className="profile-child-header">
                <div
                  className="child-header-img"
                  style={{
                    backgroundImage:
                      "url(" + this.state.profilePageTop.imgUrl + ")"
                  }}
                />
                <div className="child-header-txt">
                  <h1>会社概要</h1>
                  <p>
                    Bizplus股份有限公司成立于2015年9月。是以中国为主要技术人员的软件开发企业
                  </p>
                  <p>
                    拥有在中国、日本开发经验的PG、SE、BSE，开发、提供符合客户需求的高品质系统。
                  </p>
                  <p>
                    为了贴近客户，与客户建立起WIN-WIN的关系，竭诚努力推进事业。
                  </p>
                </div>
              </div>
              <div className="profile-child-table">
                <table>
                  <tbody>
                    <tr className="m-row">
                      <td className="m-tl" data-locate="about.r11t">
                        公司名
                      </td>
                      <td className="m-tc" data-locate="about.r11v">
                        Bizplus株式会社
                      </td>
                      <td className="m-tl" data-locate="about.r12t">
                        设立
                      </td>
                      <td className="m-tc" data-locate="about.r12v">
                        2015年9月
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td className="m-tl" data-locate="about.r21t">
                        董事长
                      </td>
                      <td className="m-tc" data-locate="about.r21v">
                        江桥　美香
                      </td>
                      <td className="m-tl" data-locate="about.r22t">
                        行业
                      </td>
                      <td className="m-tc" data-locate="about.r22v">
                        系统开发业 &amp; 咨询业
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td className="m-tl" data-locate="about.r31t">
                        董事
                      </td>
                      <td className="m-tc" data-locate="about.r31v">
                        铃木　昌宏
                      </td>
                      <td className="m-tl" data-locate="about.r32t">
                        审计
                      </td>
                      <td className="m-tc" data-locate="about.r32t">
                        审计
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td className="m-tl" data-locate="about.r41t">
                        顾问律师
                      </td>
                      <td className="m-tc" data-locate="about.r41v">
                        长 宏一
                      </td>
                      <td className="m-tl" data-locate="about.r42t">
                        顾问
                      </td>
                      <td className="m-tc" data-locate="about.r42v">
                        北村　眞一 &amp; 山口　晃
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td className="m-tl" data-locate="about.r51t">
                        特定労働者派遣事業
                      </td>
                      <td className="m-tc" data-locate="about.r51v">
                        特13-319165
                      </td>
                      <td className="m-tl" data-locate="about.r52t">
                        労働者派遣事業許可証
                      </td>
                      <td className="m-tc" data-locate="about.r52v">
                        派13-309906
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td className="m-tl" data-locate="about.r61t">
                        決算月
                      </td>
                      <td className="m-tc" data-locate="about.r61v">
                        8月
                      </td>
                      <td className="m-tl" data-locate="about.r62t">
                        资本金
                      </td>
                      <td className="m-tc" data-locate="about.r62v">
                        2200万日元
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td className="m-tl" data-locate="about.r71t">
                        社员人数
                      </td>
                      <td className="m-tc" colSpan="3" data-locate="about.r71v">
                        62名（2018年8月末現在）
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td className="m-tl" data-locate="about.r81t">
                        交易银行
                      </td>
                      <td className="m-tc" colSpan="3" data-locate="about.r81v">
                        三菱东京UFJ银行（中野站前支店）&amp;
                        瑞穗银行（新宿西口支店）
                      </td>
                    </tr>
                    <tr className="m-row m-row-5">
                      <td
                        className="m-tl m-tl-5"
                        rowSpan="5"
                        data-locate="about.r91t"
                      >
                        业务内容
                      </td>
                      <td
                        className="m-tc m-tc-5"
                        colSpan="3"
                        data-locate="about.r91v1"
                      >
                        软件委托开发业务
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td
                        className="m-tc"
                        colSpan="3"
                        data-locate="about.r91v2"
                      >
                        软件开发人员派遣业务
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td
                        className="m-tc"
                        colSpan="3"
                        data-locate="about.r91v3"
                      >
                        电脑系统管理应用业务
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td
                        className="m-tc"
                        colSpan="3"
                        data-locate="about.r91v4"
                      >
                        海外顾问业务
                      </td>
                    </tr>
                    <tr className="m-row">
                      <td
                        className="m-tc"
                        colSpan="3"
                        data-locate="about.r91v5"
                      >
                        人才教育职业咨询业务
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="profile-child-speak">
                <div className="speak-title">
                  <h1>{this.state.bossTalks.title}</h1>
                </div>
                <div className="speak-content">
                  <div
                    className="speak-content-img"
                    style={{
                      backgroundImage:
                        "url(" + this.state.bossTalks.imgUrl + ")"
                    }}
                  >
                    <div className="content-img-duration">
                      <div className="img-duration-tag">
                        <Tag color="geekblue">
                          Bizplus株式会社 代表取締役社長
                        </Tag>
                      </div>
                      <div className="img-duration-info">
                        <span>江橋美香</span>
                        <span>/ EBASHI MIKA</span>
                      </div>
                    </div>
                  </div>
                  <div className="speak-content-txt">
                    {this.state.bossTalks.content &&
                      this.state.bossTalks.content.map(item => (
                        <p className="speak-item">{item.info}</p>
                      ))}
                    <p>{this.state.bossTalks.end && this.state.bossTalks.end.map(item => (
                      <span>{item.info}</span>
                    ))}</p>
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
  )(CompanyProfile)
);
