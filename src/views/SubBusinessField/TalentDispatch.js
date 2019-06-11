import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import TagBox from "../../components/TagBox";
import GridCard from "../../components/GridCard";

import "./talentdispatch.css";

class TalentDispatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "业务领域 - 人力资源调度",
        imgUrl: "https://picsum.photos/1920/500"
      },
      DevelopmentLanguage: [
        {
          tagName: "Java",
          color: "magenta"
        },
        {
          tagName: "C / C++ / C#",
          color: "green"
        },
        {
          tagName: ".Net系[VB/ASP/C#]",
          color: "red"
        },
        {
          tagName: "VBA(Excel、Access)",
          color: "blue"
        },
        {
          tagName: "PHP",
          color: "red"
        },
        {
          tagName: "COBOL",
          color: "cyan"
        },
        {
          tagName: "PYTHON",
          color: "geekblue"
        }
      ],
      GoodsArea: [
        {
          tagName: "金融[银行/证券]",
          color: "red"
        },
        {
          tagName: "保险",
          color: "green"
        },
        {
          tagName: "销售管理",
          color: "magenta"
        },
        {
          tagName: "制造系统",
          color: "cyan"
        },
        {
          tagName: "分销行业系统",
          color: "purple"
        },
        {
          tagName: "物流行业",
          color: "blue"
        },
        {
          tagName: "运营管理业务",
          color: "red"
        },
        {
          tagName: "人力资源，薪资，会计，财务系统",
          color: "blue"
        },
        {
          tagName: "建设基础设施",
          color: "geekblue"
        }
      ],
      qualifications: [
        {
          tagName: "基本信息处理工程师",
          color: "red"
        },
        {
          tagName: "Oracle Gold(10g, 11g)",
          color: "green"
        },
        {
          tagName: "PL/SQL Silver",
          color: "magenta"
        },
        {
          tagName: "Java Silver",
          color: "cyan"
        },
        {
          tagName: "LPIC Level2",
          color: "purple"
        },
        {
          tagName: "Red Hat Certified Engineer",
          color: "blue"
        },
        {
          tagName: "PMP",
          color: "geekblue"
        }
      ],
      Languages: [
        {
          name: "01",
          title: "N1級",
          imgUrl: "http://103.44.28.14:1888/imgs/skill/lang-jlpt.svg"
        },
        {
          name: "02",
          title: "N2級",
          imgUrl: "http://103.44.28.14:1888/imgs/skill/lang-jlpt.svg"
        },
        {
          name: "03",
          title: ">850点",
          imgUrl: "http://103.44.28.14:1888/imgs/skill/lang-toeic.svg"
        },
        {
          name: "04",
          title: ">750点",
          imgUrl: "http://103.44.28.14:1888/imgs/skill/lang-toeic.svg"
        }
      ],
      DataBase: [
        {
          name: "01",
          title: "DB2",
          imgUrl: "http://103.44.28.14:1888/imgs/skill/db-db2.svg"
        },
        {
          name: "02",
          title: "MYSQL",
          imgUrl: "http://103.44.28.14:1888/imgs/skill/db-mysql.svg"
        },
        {
          name: "03",
          title: "ORACLE",
          imgUrl: "http://103.44.28.14:1888/imgs/skill/db-oracle.svg"
        },
        {
          name: "04",
          title: "SQL SERVER",
          imgUrl: "http://103.44.28.14:1888/imgs/skill/db-sqlserver.svg"
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="talent-dispatch">
          <PageHeader {...this.state.pageHeaderInfo} />
          <div className="talent-dispatch-top">
            <h1>Talent Dispatch</h1>
            <div className="talent-dispatch-desc">
              <div className="talent-dis-txt">
                <h3>
                  Bizplus有许多外国工程师来支持客户的业务推广和支持。2015年，我们获得了特殊工人派遣业务的许可证，目前我们在日本的IT领域。我们正致力于派遣外国工程师
                </h3>
                <p>派遣内容: ＳＥ、ＰＧ、ＢＳＥ</p>
                <p>派遣地域: 東京、大阪、名古屋、神戸、長野、浜松</p>
              </div>
            </div>
          </div>
          <div className="talent-dispatch-container">
            <div className="talent-dispatch-inner">
              <div className="talent-dispatch-item">
                <h1>信息相关资格</h1>
                <div className="talent-dispatch-wrap">
                  {this.state.qualifications &&
                    this.state.qualifications.map(tag => <TagBox {...tag} />)}
                </div>
              </div>
              <div className="talent-dispatch-item">
                <h1>语言相关</h1>
                <div className="talent-dispatch-wrap">
                  {this.state.Languages &&
                    this.state.Languages.map(card => <GridCard {...card} />)}
                </div>
              </div>
              <div className="talent-dispatch-item">
                <h1>开发语言</h1>
                <div className="talent-dispatch-wrap">
                  {this.state.DevelopmentLanguage &&
                    this.state.DevelopmentLanguage.map(tag => <TagBox {...tag} />)}
                </div>
              </div>
              <div className="talent-dispatch-item">
                <h1>数据库相关</h1>
                <div className="talent-dispatch-wrap">
                  {this.state.DataBase &&
                    this.state.DataBase.map(card => <GridCard {...card} />)}
                </div>
              </div>
              <div className="talent-dispatch-item">
                <h1>擅长方向</h1>
                <div className="talent-dispatch-wrap">
                  {this.state.GoodsArea &&
                    this.state.GoodsArea.map(tag => <TagBox {...tag} />)}
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
  )(TalentDispatch)
);
