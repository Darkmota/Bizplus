import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import "./OutsourcingSolutions.css";

class OutsourcingSolutions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "业务领域 - 委托方案",
        imgUrl: "https://picsum.photos/1921/500"
      },
      outsourcingSolutionsTop: {
        title: "Outsourcing Solutions",
        desc: [
          { p: "Bizplus是利用经验丰富的PM和开发团队来满足客户的多样化需求" },
          {
            p:
              "提出最佳解决方案，并提供高质量（高质量，高技术）的业务理解，上流设计，验收测试等服务。"
          }
        ]
      },
      outsourcingSolutions: [
        {
          title: "開発リレーションシップ",
          imgUrl: "http://103.44.28.14:1888/imgs/apply.svg",
          tag: "Device and Equipment Item",
          content: [
            { info: "人工智能机器学习解决方案研究" },
            { info: "参与主要抵押贷款机构人力运营机器人项目启动" }
          ]
        },
        {
          title: "顾问业务",
          imgUrl: "https://picsum.photos/800/244",
          tag: "Industry",
          content: [
            { info: "日本企业的亚洲市场销售渠道扩张" },
            { info: "企业并购支持" },
            { info: "进入日本的亚洲公司和销售战略合作伙伴" },
            { info: "支持教育，医疗和大型商业设施管理" },
            {
              info: "日本作为亚洲和亚洲之间的桥梁，我们为公司提供战略咨询服务。"
            }
          ]
        },
        {
          title: "人才教育事业",
          imgUrl: "https://picsum.photos/801/244",
          tag: "Human resources education business",
          content: [
            { info: "日本商务礼仪，沟通技巧，其他教育业务" },
            {
              info:
                "我们作为员工教育的一部分，但我们公司以外的客户被客户要求接受并商业化。"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="outsourcing-solutions">
          <PageHeader {...this.state.pageHeaderInfo} />
          <div className="outsourcing-solutions-top">
            <h1>{this.state.outsourcingSolutionsTop.title}</h1>
            <div className="outsourcing-solutions-desc">
              <div className="outsourcing-solutions-txt">
                {this.state.outsourcingSolutionsTop.desc &&
                  this.state.outsourcingSolutionsTop.desc.map(p => (
                    <p>{p.p}</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="outsourcing-solutions-container">
            {this.state.outsourcingSolutions &&
              this.state.outsourcingSolutions.map(item => (
                <div className="outsourcing-solutions-item">
                  <div className="outsourcing-solutions-box">
                    <div className="solutions-img">
                      <div
                        className="solutions-box-img"
                        style={{
                          backgroundImage: "url(" + item.imgUrl + ")"
                        }}
                      />
                      <div className="solutions-img-tag">{item.tag}</div>
                    </div>
                    <div className="solutions-box-content">
                      <div className="solutions-content-title">
                        {item.title}
                      </div>
                      <div className="solutions-content-txt">
                        {item.content &&
                          item.content.map(info => <p>{info.info}</p>)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
  )(OutsourcingSolutions)
);
