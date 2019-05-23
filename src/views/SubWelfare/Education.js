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
        subTitle: "从合规对策，提高营业力，变成有魅力的公司，使之提高业绩，生产性提高等，「职员的动机提高和能力提高」作为人才培养的目的进行着教育研修。",
        content: [
          {
            info: "在日本收购商业礼仪"
          },
          {
            info: "提高沟通技巧"
          },
          {
            info: "日本的日本风俗习惯"
          },
          {
            info: "提高日语和英语"
          }
        ]
      },
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
                <div className="education-top-img" style={{backgroundImage: 'url('+this.state.educationPageTop.imgUrl+')'}}/>
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
                  <div className="education-top-img" style={{backgroundImage: 'url('+this.state.educationPageTop.imgUrl+')'}}/>
                  <ul>
                    {this.state.educationPageTop.content.map(info => (
                      <li>{info.info}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="education-main-content">
                <div className="main-content-inner">
                  <div className="education-container">
                    <div className="education-item">
                      <div className="education-item-header">
                        <div className="item-header-img" style={{backgroundImage: 'url('+this.state.educationPageTop.imgUrl+')'}}/>
                        <div className="item-header-title">
                          礼仪习俗
                        </div>
                      </div>
                      <div className="education-item-body">
                        <p>info</p>
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
