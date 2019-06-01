import React, { Component } from "react";
import { connect } from "react-redux";
import { Tag } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import "./businessIntro.css";

class BusinessIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "事業分野 - 业务概况",
        imgUrl: "https://picsum.photos/1920/400"
      },
      Introduction: [
        {
          title: "软件开发业务",
          imgUrl: "https://vc-corp.net/wp/wp-content/themes/xeory_base_child/lib/common/img/top_contImg06.jpg",
          desc: [
            {
              name: "主要特征",
              txt: [
                { item: "拥有大量具备5年以上日企系统开发经验的技术者" },
                { item: "通过与关联企业合作，有规模扩大的可能" },
                {
                  item:
                    "拥有具备多国语言能力的技术者，据有无国境障碍交流实现开发的可能"
                },
                { item: "具备大量海外开发技术" },
                {
                  item:
                    "拥有从系统咨询到要件定义，设计，制造，测试，运用维护等全程进行提案的能力"
                }
              ]
            }
          ]
        },
        {
          title: "咨询业务",
          imgUrl: "https://vc-corp.net/wp/wp-content/themes/xeory_base_child/lib/common/img/top_contImg05.jpg",
          desc: [
            {
              name: "主要特征",
              txt: [
                {
                  item: "作为日本和亚洲各国的桥梁，面向企业提供战略咨询服务。"
                },
                { item: "扩大日本企业的亚洲市场销路" },
                {
                  item: "企业的M & A支援"
                },
                { item: "为亚洲企业提供进入日本・营业战略伙伴" },
                {
                  item: "教育、医疗、大型商业设施等的运营"
                }
              ]
            }
          ]
        },
        {
          title: "外国人才派遣事业",
          imgUrl: "https://vc-corp.net/wp/wp-content/themes/xeory_base_child/lib/common/img/top_contImg01.jpg",
          desc: [
            {
              name: "主要特征",
              txt: [
                {
                  item:
                    "Bizplus拥有众多外国技术人员，专门为客户的业务推进及支持提供服务。"
                },
                {
                  item:
                    "2015年，取得了特定劳动者派遣事业许可，现在在日本的IT领域开展着外国技术人员的派遣业务。"
                },
                {
                  item: "派遣内容: SE,PG,BSE"
                },
                { item: "派遣领域: 制造 金融 证券 物流 通信" },
                {
                  item: "派遣地点: 东京 大阪 名古屋 神户 长野 滨松"
                }
              ]
            }
          ]
        },
        {
          title: "人才教育事业",
          imgUrl: "https://vc-corp.net/wp/wp-content/themes/xeory_base_child/lib/common/img/top_contImg03.jpg",
          desc: [
            {
              name: "主要特征",
              txt: [
                {
                  item:
                    "日本语教育（礼仪教育）事业对员工进行日本语教育（礼仪教育）是公司职员教育的一贯做法，根据客户的要求，形成了本公司以外的客人也可以参加的事业化教育活动。"
                },
                {
                  item:
                    "日语教师根据实务进行实践教学，最终以日语N1级和N2级合格作为目标。"
                }
              ]
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="business-intro-page">
          <PageHeader {...this.state.pageHeaderInfo} />
          <div className="business-page-top">
            <div className="">
              <h1>Business Introduction</h1>
            </div>
          </div>
          <div className="business-page-container">
            <div className="business-page-inner">
              {this.state.Introduction &&
                this.state.Introduction.map(item => (
                  <div className="business-item">
                    <div className="business-item-box">
                      <div
                        className="business-item-top"
                        style={{
                          backgroundImage:
                            "url(" + item.imgUrl + ")"
                        }}
                      >
                        <div className="item-top-title">{item.title}</div>
                      </div>
                      <div className="business-item-body">
                        {item.desc &&
                          item.desc.map(desc => (
                            <div className="item-body-content">
                              <div className="item-body-tag tag-geekblue">
                                {desc.name}
                              </div>
                              {desc.txt &&
                                desc.txt.map(info => (
                                  <p className="item-body-txt">{info.item}</p>
                                ))}
                            </div>
                          ))}
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
  )(BusinessIntro)
);
