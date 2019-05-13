import React, { Component } from "react";
import BtnMore from "../components/BtnMore";
import Carousal from "../components/Carousal";
import PartTitle from "../components/PartTitle";
import AboutUs from "../components/AboutUs";
import CardMask from "../components/CardMask";
import CardBasic from "../components/CardBasic";
import NewsCard from "../components/NewsCard";
import Contact from "../components/Contact";
import Map from "../components/Map";

import "./HomePage.css";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      btnInfo: {
        name: "了解更多",
        url: "our services"
      },
      cardServeInfo: [
        {
          name: "外国人才派遣事业",
          url: "to_more",
          imgUrl:
            "./imgs/business/team-leader-writing-on-white-board-1080x720.jpg",
          content:
            "从取得特定劳动派遣事业许可到现在，一直在日本的IT领域开展着外国技术人员的派遣业务。",
          more: "了解更多"
        },
        {
          name: "委托方案",
          url: "to_more",
          imgUrl: "./imgs/business/business-office-building-1080x720.jpg",
          content:
            "具备经验丰富的PM，开发团队，根据客户的多种需求，提供最佳的解决方案，从业务理解·上游设计到验收测试等，提供高水平的（高品质、高技术）服务。",
          more: "了解更多"
        },
        {
          name: "其他业务",
          url: "to_more",
          imgUrl: "./imgs/business/credit-card-terminal-1080x720.jpg",
          content: "机器人开发、咨询业务、人才教育",
          more: "了解更多"
        }
      ],
      workInfo: [
        {
          url: "work",
          imgUrl:
            "https://nicottolabo.info/_kanri/wp-content/uploads/2018/07/news5.jpg",
          title: "N公司的贩卖系统"
        },
        {
          url: "work",
          imgUrl:
            "https://nicottolabo.info/_kanri/wp-content/uploads/2018/07/news4.jpg",
          title: "X公司的购物精算系统"
        },
        {
          url: "work",
          imgUrl:
            "https://nicottolabo.info/_kanri/wp-content/uploads/2018/07/news5.jpg",
          title: "A公司的物流系统"
        },
        {
          url: "work",
          imgUrl:
            "https://nicottolabo.info/_kanri/wp-content/uploads/2018/07/news4.jpg",
          title: "B公司社员培训工作"
        },
        {
          url: "work",
          imgUrl:
            "https://nicottolabo.info/_kanri/wp-content/uploads/2018/07/news5.jpg",
          title: "帮助C公司度过难关"
        },
        {
          url: "work",
          imgUrl:
            "https://nicottolabo.info/_kanri/wp-content/uploads/2018/07/news4.jpg",
          title: "与D公司的定期合作"
        }
      ],
      newsInfo: [
        {
          tag: "研讨会",
          date: "2019.04.25",
          title: "开展了研讨会，确定了下一个季度的发展方向",
          url: "news"
        },
        {
          tag: "人事调动",
          date: "2019.04.25",
          title: "将赤木先生调度到人事部门",
          url: "news"
        },
        {
          tag: "通知",
          date: "2019.04.25",
          title: "本部搬迁通知",
          url: "news"
        },
        {
          tag: "通知",
          date: "2019.04.25",
          title: "5月1日将要进行纪念活动",
          url: "news"
        }
      ],
      eventInfo: [
        {
          url: "work",
          imgUrl:
            "https://nicottolabo.info/_kanri/wp-content/uploads/2018/07/news5.jpg",
          title: "黄金周期间的工作日通知",
          date: "2019-02-23"
        },
        {
          url: "work",
          imgUrl:
            "https://nicottolabo.info/_kanri/wp-content/uploads/2018/07/news4.jpg",
          title: "新年假期",
          date: "2019-02-23"
        },
        {
          url: "work",
          imgUrl:
            "https://nicottolabo.info/_kanri/wp-content/uploads/2018/07/news5.jpg",
          title: "招聘员工！！ 【职业收养】",
          date: "2019-02-23"
        },
        {
          url: "work",
          imgUrl:
            "https://nicottolabo.info/_kanri/wp-content/uploads/2018/07/news4.jpg",
          title: "关于2019年2月的HP续订业务",
          date: "2019-02-23"
        }
      ]
    };
  }
  render() {
    return (
      <div className="main-container">
        {/* Carousal */}
        <Carousal />
        {/* About-us */}
        <div className="about">
          <AboutUs />
        </div>
        {/* serve */}
        <div className="serve">
          <PartTitle title={"our services"} />
          <div className="cards-container">
            <div className="cards-inner">
              {this.state.cardServeInfo.map(info => (
                <div className="cards-item">
                  <CardMask {...info} />
                </div>
              ))}
            </div>
          </div>
          <BtnMore {...this.state.btnInfo} />
        </div>
        {/* works */}
        <div className="work">
          <PartTitle title={"our works"} />
          <ul className="work_ul">
            {this.state.workInfo.map(info => (
              <li className="">
                <CardBasic {...info} />
              </li>
            ))}
          </ul>
          <BtnMore name={"了解更多"} />
        </div>
        
        {/* news */}
        <div className="news">
          <div className="news-content">
            <PartTitle title={"our news"} />
            <ul className="news-list">
              {this.state.newsInfo.map(info => (
                <li className="">
                  <NewsCard {...info} />
                </li>
              ))}
            </ul>
            <BtnMore name={"了解更多"} />
          </div>
        </div>
        {/* events */}
        <div className="event">
          <PartTitle title={"our events"} />
          <ul className="event_ul">
            {this.state.eventInfo.map(info => (
              <li className="">
                <CardBasic {...info} />
              </li>
            ))}
          </ul>
          <BtnMore name={"了解更多"} />
        </div>
        {/* team */}
        <div className="team">
          <PartTitle title={"our team"} />
          <div className="cards-container">
            <div className="cards-inner">
              {this.state.cardServeInfo.map(info => (
                <div className="cards-item">
                  <CardMask {...info} />
                </div>
              ))}
            </div>
          </div>
          <BtnMore {...this.state.btnInfo} />
        </div>
        {/* contact  */}
        <Contact />
        {/* maps */}
        <div className="map">
        <PartTitle title={"where we are?"} />
          <Map />
        </div>
        
      </div>
    );
  }
}

export default HomePage;
