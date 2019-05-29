import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import "./education.css";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "Internal Education",
        imgUrl: "https://picsum.photos/1920/500"
      },
      educationPageTop: {
        imgUrl: "https://picsum.photos/800/500",
        title: "Internal Education",
        subTitle:
          "从合规对策，提高营业力，变成有魅力的公司，使之提高业绩，生产性提高等，「职员的动机提高和能力提高」作为人才培养的目的进行着教育研修。",
        content: [
          { info: "在日本收购商业礼仪" },
          { info: "提高沟通技巧" },
          { info: "日本的日本风俗习惯" },
          { info: "提高日语和英语" }
        ]
      },
      educationContent: [
        {
          title: "日本的风俗习惯・日本的礼仪",
          imgUrl: "https://picsum.photos/id/55/500/350",
          content: [
            {
              info:
                "关于日本文化，日本有独特的规则和习惯，传统文化中还存在非常严格的礼节规则。包括和同事、店员和客人、政治家等其他社会中的场景。"
            },
            {
              info:
                "从每天生活中遇到问题开始，设定主题，比较各个国家的礼仪来进行会话。"
            },
            {
              info:
                "了解日本的风俗习惯，能更好的加深对日本的生活工作的理解，使生活工作顺利进行。"
            }
          ]
        },
        {
          title: "商务礼仪",
          imgUrl: "https://picsum.photos/id/935/500/350",
          content: [
            {
              info:
                "学习商业礼仪的感觉不仅会让对方感到不舒服，而且也是使你的工作更有利的武器。"
            },
            {
              info:
                "有各种各样的基础知识，如问候和弓，以及如何通过业务所需的名片。"
            },
            { info: "商业礼仪就像是交流润滑剂，是连接人的第一步。" },
            {
              info:
                "在商业方式教育中，我们将以易于理解的方式研究与在实际商业环境中有用的礼仪相关的常识和要点。"
            }
          ]
        },
        {
          title: "沟通技巧",
          imgUrl: "https://picsum.photos/id/933/500/350",
          content: [
            {
              info:
                "「不善于与人交流」的人越来越多、沟通技巧已经成为必要的需求。"
            },
            { info: "1.语言" },
            {
              info:
                "对于沟通交流、比起「说什么」，「怎样向对方传达」才是非常重要的。因此，【传达】【聆听】【询问】是不可缺少的。"
            },
            { info: "2.语言之外的交流技巧" },
            {
              info:
                "表情，声音的音调，举止等等。在说话时，给人带来影响的比例是，语言是1，非语言部分是9。辅助语言、构筑信赖关系、理解对方状况、对此有非常重要的作用。在职场、现场中也会和很多人进行交流，因此，语言之外的交流技巧也是需要学习的。表情，声音的音调，举止等等。在说话时，给人带来影响的比例是，语言是1，非语言部分是9。辅助语言、构筑信赖关系、理解对方状况、对此有非常重要的作用。在职场、现场中也会和很多人进行交流，因此，语言之外的交流技巧也是需要学习的。"
            }
          ]
        },
        {
          title: "商务礼仪",
          imgUrl: "https://picsum.photos/id/932/500/350",
          content: [
            {
              info:
                "学习商业礼仪的感觉不仅会让对方感到不舒服，而且也是使你的工作更有利的武器。"
            },
            {
              info:
                "有各种各样的基础知识，如问候和弓，以及如何通过业务所需的名片。"
            },
            { info: "商业礼仪就像是交流润滑剂，是连接人的第一步。" },
            {
              info:
                "在商业方式教育中，我们将以易于理解的方式研究与在实际商业环境中有用的礼仪相关的常识和要点。"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="education-container">
          {/* 页面顶部布局 */}
          <PageHeader {...this.state.pageHeaderInfo} />
          <div className="education-page-main">
            <div className="company-education">
              {/* PC端页面内头部 */}
              <div className="education-page-top">
                <div
                  className="education-top-img"
                  style={{
                    backgroundImage:
                      "url(" + this.state.educationPageTop.imgUrl + ")"
                  }}
                />
                <div className="education-top-content">
                  <div className="top-content-inner">
                    <h2>{this.state.educationPageTop.title}</h2>
                    <h4>{this.state.educationPageTop.subTitle}</h4>
                    <ul>
                      {this.state.educationPageTop.content.map(info => (
                        <li>{info.info}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* 移动端页面内头部 */}
              <div className="education-page-top-mobile">
                <div className="education-top-content">
                  <h1>{this.state.educationPageTop.title}</h1>
                  <h3>{this.state.educationPageTop.subTitle}</h3>
                  <div
                    className="education-top-img"
                    style={{
                      backgroundImage:
                        "url(" + this.state.educationPageTop.imgUrl + ")"
                    }}
                  />
                  <ul>
                    {this.state.educationPageTop.content.map(info => (
                      <li>{info.info}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="education-main-content">
                {/* PC端页面主要内容 */}
                <div className="main-content-inner">
                  <div className="education-container">
                    {this.state.educationContent.map(item => (
                      <div className="education-item">
                        <div
                          className="item-header-img"
                          style={{
                            backgroundImage: "url(" + item.imgUrl + ")"
                          }}
                        />
                        <div className="education-item-body">
                          <div className="item-body-title">
                            <h2>{item.title}</h2>
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
                          {item.content &&
                            item.content.map(info => <p>{info.info}</p>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="education-teach">
                  <div className="education-teach-inner">
                    <div className="education-teach-header">
                      <h2>プログラム</h2>
                    </div>
                    <div className="education-teach-body">
                      <div className="teach-body-info">
                        <div className="body-info-avater">
                          <img src="https://picsum.photos/200/200" alt="x" />
                        </div>
                        <div className="body-info-centent">
                          <h2>高橋 徹</h2>
                          <p>
                            原银行职员。95年上海分店副分店长,杂志「上海」的编辑。从02年开始在IT业界人才培养等中国现场参画。北京软件，江苏省无锡基地等，从事向日本派遣技术人员。
                          </p>
                        </div>
                      </div>
                      <div className="teach-body-scheduel">
                        <div className="scheduel-row">
                          <span>预定一个月</span>
                          <span>星期二</span>
                          <span>星期三</span>
                          <span>星期五</span>
                          <span>星期日</span>
                        </div>
                        <div className="scheduel-row">
                          <span>第一周</span>
                          <span />
                          <span>日语2级</span>
                          <span />
                          <span>自由讨论</span>
                        </div>
                        <div className="scheduel-row">
                          <span>第二周</span>
                          <span />
                          <span>商务礼仪</span>
                          <span />
                          <span>自由讨论</span>
                        </div>
                        <div className="scheduel-row">
                          <span>第三周</span>
                          <span />
                          <span>日语1级</span>
                          <span />
                          <span>自由讨论</span>
                        </div>
                        <div className="scheduel-row">
                          <span>第四周</span>
                          <span />
                          <span>交流技巧</span>
                          <span />
                          <span>自由讨论</span>
                        </div>
                      </div>
                    </div>
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
  )(Education)
);
