import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import "./otherservices.css";

class OtherServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "业务领域 - 其他业务",
        imgUrl: "https://picsum.photos/1920/500"
      },
      otherServices: [
        {
          title: "机器人发展项目",
          imgUrl: "https://picsum.photos/420/224",
          tag: "Device and Equipment Item",
          content: [
            { info: "人工智能机器学习解决方案研究" },
            { info: "参与主要抵押贷款机构人力运营机器人项目启动" }
          ]
        },
        {
          title: "顾问业务",
          imgUrl: "https://picsum.photos/426/224",
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
          imgUrl: "https://picsum.photos/420/223",
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
        <div className="other-serve">
          <PageHeader {...this.state.pageHeaderInfo} />
          <div className="other-serve-top">
            <h1>Other Services</h1>
          </div>
          <div className="other-serve-container">
            <div className="other-serve-inner">
              {this.state.otherServices &&
                this.state.otherServices.map(item => (
                  <div className="other-serve-item">
                    <div className="serve-item-box">
                      <div
                        className="serve-box-img"
                        style={{
                          backgroundImage: "url(" + item.imgUrl + ")"
                        }}
                      >
                        <div className="box-img-tag">{item.tag}</div>
                      </div>
                      <div className="serve-box-content">
                        <div className="box-content-title">{item.title}</div>
                        <div className="box-content-txt">
                          {item.content &&
                            item.content.map(info => <p>{info.info}</p>)}
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
  )(OtherServices)
);
