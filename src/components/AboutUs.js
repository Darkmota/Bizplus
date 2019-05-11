import React, { Component } from "react";
import BtnMore from "./BtnMore";
import "../css/aboutus.css";

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      btnInfo: {
        name: "了解更多",
        url: "about us"
      }
    };
  }
  render() {
    return (
      <div>
        <div className="about-us">
          <div className="about-inner">
            <b>关于我们</b>
            <h1>使您的商业如虎添翼</h1>
            <hr />
            <p>
              Bizplus，为了顾客的业务推进以及业务支持而提供了大量外国技术人员。
              在2015年，从取得特定劳动派遣事业许可到现在，
              一直在日本的IT领域开展着外国技术人员的派遣业务。
              派遣内容：SE、PG、BSE
              派遣地点：东京、大阪、名古屋、神户、长野、滨松.
            </p>
            <div className="about-icon">
              <div className="about-icon-item">
                <div>
                  <img src="./imgs/svg/professional.svg" alt="" />
                </div>
                <b>profession</b>
              </div>
              <div className="about-icon-item">
                <div>
                  <img src="./imgs/svg/highly.svg" alt="" />
                </div>
                <b>efficient</b>
              </div>
              <div className="about-icon-item">
                <div>
                  <img src="./imgs/svg/nice1.svg" alt="" />
                </div>
                <b>quality</b>
              </div>
            </div>
          </div>
        </div>
        <BtnMore {...this.state.btnInfo} />
      </div>
    );
  }
}

export default AboutUs;
