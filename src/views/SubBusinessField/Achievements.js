import React, { Component } from "react";
import { connect } from "react-redux";
import { Tag } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import "./achievements.css";

class Achievements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "事業分野 - 开发实绩",
        imgUrl: "https://picsum.photos/1920/500"
      },
      achievementsData: [
        {
          title: "N公司的贩卖系统",
          list: [
            { fix: "系统概要", content: "订货、交易、出货" },
            {
              fix: "开发规模",
              tag: [
                { item: "二次开发", style: "geekblue" },
                { item: "20画面", style: "geekblue" },
                { item: "15人月", style: "geekblue" }
              ]
            },
            {
              fix: "作业内容",
              content: "详细设计、制造、单体测试、综合测试、性能改善"
            },
            {
              fix: "开发环境",
              tag: [
                { item: "win10", style: "#f50" },
                { item: "Oracle 11g", style: "#2db7f5" },
                { item: "VB.net", style: "#87d068" }
              ]
            }
          ]
        },
        {
          title: "X公司的购物结算系统",
          list: [
            { fix: "系统概要", content: "主系统管理，批量数据采集" },
            {
              fix: "开发规模",
              tag: [
                { item: "３画面", style: "geekblue" },
                { item: "４バッチ", style: "geekblue" },
                { item: "２人月", style: "geekblue" }
              ]
            },
            {
              fix: "作业内容",
              content: "DB设计，制造，单体测试"
            },
            {
              fix: "开发环境",
              tag: [
                { item: "win7", style: "#f50" },
                { item: "Oracle 11g", style: "#2db7f5" },
                { item: "VB.net", style: "#87d068" }
              ]
            }
          ]
        },
        {
          title: "Y公司购买系统",
          list: [
            { fix: "系统概要", content: "订货、交易、出货" },
            {
              fix: "开发规模",
              tag: [
                { item: "二次开发", style: "geekblue" },
                { item: "20画面", style: "geekblue" },
                { item: "15人月", style: "geekblue" }
              ]
            },
            {
              fix: "作业内容",
              content: "详细设计、制造、单体测试、综合测试、性能改善"
            },
            {
              fix: "开发环境",
              tag: [
                { item: "win10", style: "#f50" },
                { item: "Oracle 11g", style: "#2db7f5" },
                { item: "VB.net", style: "#87d068" }
              ]
            }
          ]
        },
        {
          title: "A公司的仓库管理系统",
          list: [
            { fix: "系统概要", content: "订货、交易、出货" },
            {
              fix: "开发规模",
              tag: [
                { item: "二次开发", style: "geekblue" },
                { item: "20画面", style: "geekblue" },
                { item: "15人月", style: "geekblue" }
              ]
            },
            {
              fix: "作业内容",
              content: "详细设计、制造、单体测试、综合测试、性能改善"
            },
            {
              fix: "开发环境",
              tag: [
                { item: "win10", style: "#f50" },
                { item: "Oracle 11g", style: "#2db7f5" },
                { item: "VB.net", style: "#87d068" }
              ]
            }
          ]
        },
        {
          title: "経営分析システム(第一期)",
          list: [
            { fix: "系统概要", content: "订货、交易、出货" },
            {
              fix: "开发规模",
              tag: [
                { item: "二次开发", style: "geekblue" },
                { item: "20画面", style: "geekblue" },
                { item: "15人月", style: "geekblue" }
              ]
            },
            {
              fix: "作业内容",
              content: "详细设计、制造、单体测试、综合测试、性能改善"
            },
            {
              fix: "开发环境",
              tag: [
                { item: "win10", style: "#f50" },
                { item: "Oracle 11g", style: "#2db7f5" },
                { item: "VB.net", style: "#87d068" }
              ]
            }
          ]
        },
        {
          title: "ERP販売管理システム",
          list: [
            { fix: "系统概要", content: "订货、交易、出货" },
            {
              fix: "开发规模",
              tag: [
                { item: "二次开发", style: "geekblue" },
                { item: "20画面", style: "geekblue" },
                { item: "15人月", style: "geekblue" }
              ]
            },
            {
              fix: "作业内容",
              content: "详细设计、制造、单体测试、综合测试、性能改善"
            },
            {
              fix: "开发环境",
              tag: [
                { item: "win10", style: "#f50" },
                { item: "Oracle 11g", style: "#2db7f5" },
                { item: "VB.net", style: "#87d068" }
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
        <div className="achievement-page">
          <PageHeader {...this.state.pageHeaderInfo} />
          <div className="achievement-container">
            <div className="container-inner">
              {this.state.achievementsData &&
                this.state.achievementsData.map(item => (
                  <div className="achievement-item">
                    <div className="achievement-box">
                      <div className="box-header">
                        <div>{item.title}</div>
                      </div>
                      <div className="box-body">
                        <ul className="box-body-container">
                          {item.list &&
                            item.list.map(li => (
                              <li className="box-li">
                                <span>{li.fix}</span>
                                {li.content}
                                {li.tag &&
                                  li.tag.map(tag => (
                                    <Tag color={tag.style}>{tag.item}</Tag>
                                  ))}
                              </li>
                            ))}
                        </ul>
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
  )(Achievements)
);
