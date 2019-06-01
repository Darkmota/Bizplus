import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import "./recruit.css";
import PageHeader from "../components/PageHeader";

class RecruitmentInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "contact us",
        imgUrl: "./imgs/findjob.jpg"
      },
      recruitListInfo: [
        {
          name: "津贴",
          conent: "根据多年工作经验，拥有资格，年龄等公司规定确定"
        },
        {
          name: "各种好处",
          conent:
            "邮资津贴，家庭津贴，加班津贴，通勤津贴（实际开支），出差津贴等"
        },
        {
          name: "工资修改",
          conent: " 一年一次（1月 - ）"
        },
        {
          name: "奖金",
          conent: "如果超过某些利润，奖金支付（原则上，每年一次，冬季）"
        },
        {
          name: "工作地点",
          conent: "东京，大阪及其邻近的县"
        },
        {
          name: "工作时间",
          conent: "9：30-18：30  ※根据工作地点和工作类型可能会有所不同。"
        },
        {
          name: "假期放假",
          conent:
            "周六，周日，假期，暑假（全职员工），新年假期，带薪假期  ※有茶点假期  ※关于假日度假，根据公司，工作的种类可能不同。"
        },
        {
          name: "保险",
          conent: "健康保险，福利养老保险，就业保险"
        },
        {
          name: "申请方法",
          conent: "请来自与我们联系。"
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="recruit-container">
          {/* 页面顶部布局 */}
          <PageHeader {...this.state.pageHeaderInfo} />
          {/* 面包屑 */}
          <div className="recruit-breadcrumb">
            <div className="recruit-content">
              <div>Home / 採用情报</div>
            </div>
          </div>
          {/* 主要内容 */}
          <div className="recruit-page-main">
            <div className="recruit-page-container">
              <div className="recruit-page-top">
                <div className="recruit-top-img">
                  <img
                    src="./imgs/business/sketching-startup-website-ideas-on-paper_free_stock_photos_picjumbo_HNCK4890-1080x720.jpg"
                    alt="."
                  />
                </div>
                <div className="recruit-top-slogan">
                  <h1 className="caps">Will you join us?</h1>
                  <h2>
                    Bizplusはエンジニア経験の有無ではなく、前向きで成長意欲のある人を求めています！
                  </h2>
                </div>
              </div>
              <div className="recruit-page-top">
                <div className="recruit-top-slogan-1">
                  <h2>我们的希望</h2>
                  <div>我们公司成立于2014年。</div>
                  <div>员工的平均年龄为30岁，其特点是许多年轻人。</div>
                  <div>简而言之，它仍然是一个不成熟的公司。</div>
                  <div>
                    这就是为什么“增长”是一个你可以挑战任何事情的环境，如果你有动力的话。
                  </div>
                  <div>
                    那些有能力在这些地方感受到潜力的愿望的人正在寻找能够在享受乐趣的同时共同成长的朋友。
                  </div>
                  <div>我们期待着您的回音。</div>
                </div>
                <div className="recruit-top-img-1">
                  <img
                    src="./imgs/business/business-agency-team-working-on-new-ideas-1080x720.jpg"
                    alt="."
                  />
                </div>
              </div>
              <div className="recruit-page-guide">
                <div className="recruit-page-title">
                  <div className="recruit-title-inner">
                    <div className="inner-item-title">
                      <h3 className="caps">招聘指南</h3>
                    </div>
                    <div className="inner-item">
                      <h4>申请资格</h4>
                      <ul>
                        <li>
                          那些能够以自己的想法行动和行动，而不是等待指示的人
                        </li>
                        <li>有高中或以上学历</li>
                        <li>具有IT设计和开发经验</li>
                        <li>项目管理和顾问经验的人</li>
                      </ul>
                    </div>
                    <div className="inner-item">
                      <h4>工作类型</h4>
                      <ul>
                        <li>2个销售职位</li>
                        <li>10个技术职位（程序员，系统工程师）</li>
                        <li>项目管理和顾问经验管理工作</li>
                      </ul>
                    </div>
                    <div className="inner-item-detail">
                      <div className="detail-title">
                        <h4 className="caps">具体工作</h4>
                      </div>
                      <div className="detail-item">
                        <h5 className="caps">销售职位</h5>
                        <ul>
                          <li>
                            销售职位扩大销售渠道，向客户提出建议，提供信息等
                          </li>
                          <li>关注员工</li>
                          <li>谁想 积极参与每个销售活动</li>
                        </ul>
                      </div>
                      <div className="detail-item">
                        <h5 className="caps">技术员（程序员/系统工程师）</h5>
                        <ul>
                          <li>对IT感兴趣的人</li>
                          <li>
                            行政，物流，财务，销售管理等各个行业的信息系统设计（更喜欢某种实力）
                          </li>
                          <li>网络建设和软件，系统开发和提案</li>
                          <li>业务应用程序开发（Java，.NET等）</li>
                          <li>Web应用程序开发（PHP，Ruby，Perl等）</li>
                          <li>通信应用程序开发（Java，C＃等）</li>
                          <li>网络服务器构建操作</li>
                          <li>信息系统维护，操作，服务台</li>
                          <li>Android，iPhone系统开发</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recruit-page-info">
                <div className="recruit-info-container">
                  <h3>详细信息</h3>
                  <ul className="recruit-list-area">
                    {this.state.recruitListInfo.map(info => (
                      <li className="recruit-list-area-item">
                        <dl>
                          <dt className="recruit-list-area-name">
                            {info.name}
                          </dt>
                          <dd className="recruit-list-area-content">
                            <dl>
                              <dd>{info.conent}</dd>
                            </dl>
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
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
  )(RecruitmentInformation)
);
