import React, { Component } from "react";
import { Carousel } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/fontawesome-free-solid";
import "../css/carousal.css";

class Carousal extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="carousal">
        <div className="areatxt">
          <div className="active">
            <h1>Bizplus</h1>
            <p>新しい技術に絶えず挑戦し、ユニークな発想を大切にする</p>
          </div>
        </div>
        <div
          className="btn-prev"
          onClick={() => {
            this.refs.slide.prev();
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <Carousel ref="slide" effect="fade">
          <div className="slide-img">
            <img src="./imgs/business/354-1920x968.jpg" alt="" />
          </div>
          <div className="slide-img">
            <img src="./imgs/business/418-1920x968.jpg" alt="" />
          </div>
          <div className="slide-img">
            <img src="./imgs/business/857-1920x968.jpg" alt="" />
          </div>
        </Carousel>
        <div
          className="btn-next"
          onClick={() => {
            this.refs.slide.next();
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    );
  }
}

export default Carousal;
