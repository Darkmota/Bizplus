import React, { Component } from "react";

import zh_CN from "../locale/zh_CN.json";
import en_US from "../locale/en_US.json";
import ja_JP from "../locale/ja_JP.json";


// import "../css/common.css";
import "../css/fold.css";
import "../css/header.css";
// import '../css/slide.css'
// import '../css/index.css'
// import '../css/web-end.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRight,
  faSearch,
  faTimes
} from "@fortawesome/fontawesome-free-solid";

class GlobelHeader extends Component {
  constructor() {
    super();
    this.state = {
      //字体语言state
      locale: zh_CN,

      //二级菜单state
      isFold: true,
      left: "-80%",

      //二级菜单子元素state
      isItemFold: true,
      itemDisplay: "none",

      //search按钮控制input
      searchFlag: false,
      display: "none",
      isSearchShow: true,
      isXShow: false
    };
    this.handleFoldClick = this.handleFoldClick.bind(this);
    this.handleItemFoldClick = this.handleItemFoldClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  //二级菜单展开/收起
  handleFoldClick() {
    if (this.state.isFold === false) {
      this.setState({
        isFold: true,
        left: "-80%"
      });
    } else if (this.state.isFold === true) {
      this.setState({
        isFold: false,
        left: "0%"
      });
    }
  }

  //二级菜单内容展开/收起
  handleItemFoldClick(e) {
    if (this.state.isItemFold === false) {
      this.setState({
        isItemFold: true,
        itemDisplay: "none"
      });
    } else if (this.state.isItemFold === true) {
      this.setState({
        isItemFold: false,
        itemDisplay: "block"
      });
    }
  }

  //搜索框展开/收起
  handleSearchClick() {
    if (this.state.searchFlag === false) {
      this.setState({
        searchFlag: true,
        // searchOn: "flex",
        display: "flex",
        isSearchShow: false,
        isXShow: true
      });
      console.log("on");
    } else if (this.state.searchFlag === true) {
      this.setState({
        searchFlag: false,
        display: "none",
        isSearchShow: true,
        isXShow: false
      });
      console.log("off");
    }
  }

  render() {
    return (
      // g-Header
      <>
        <div className="g-navbar">
          {/* PC端header */}
          <div className="g-nav">
            <div className="left-fold">
              <img
                src="./imgs/icon-fold.svg"
                alt=""
                className="img-fold"
                id="btn-fold"
                onClick={this.handleFoldClick}
              />
            </div>
            <div className="nav-logo ">
              <a className="navbar-brand " href="#">
                <img src="./imgs/Biz.png" className="img-responsive" />
              </a>
              <div className="logo-font">Bizplus</div>
            </div>
            <div className="nav-menu">
              <div className="navbar-center">
                <div className="menu-item caps">
                  <span className="item-txt">{this.state.locale.homepage}</span>
                </div>
                <div className="menu-item caps expand">
                  <span className="item-txt">
                    {this.state.locale.information}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faAngleDown} className="svg-down" />
                  </span>
                  <div className="menu-information" />
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.company_profile}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.business_philosophy}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.representative_s_greetings}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.privacy_policy}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.organizational_chart}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.access}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.company_culture}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-item caps expand">
                  <span className="item-txt">
                    {this.state.locale.business_field}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faAngleDown} className="svg-down" />
                  </span>
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.business_summary}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.quality_control}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.project_management}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.development_language_and_environment}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.foreign_temporary_staffing_business}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.commission_proposal}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.other_business}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.development_performance}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-item caps expand">
                  <span className="item-txt">{this.state.locale.welfare}</span>
                  <span>
                    <FontAwesomeIcon icon={faAngleDown} className="svg-down" />
                  </span>
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.education}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.leisure_and_entertainment}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />
                        {this.state.locale.medical_insurance}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-item caps">
                  <span className="item-txt">
                    {this.state.locale.recruitment_information}
                  </span>
                </div>
                <div className="menu-item caps">
                  <span className="item-txt">
                    {this.state.locale.contact_us}
                  </span>
                </div>
                <div className="nav-right">
                  <div className="nav-lan" style={{ marginRight: "15px" }}>
                    <div className="lan-txt">{this.state.locale.language}</div>
                    <span>
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="svg-down"
                      />
                    </span>
                    <ul className="lan-select">
                      <li>
                        <a href="./index.html?locale=ja_JP">日本語</a>
                      </li>
                      <li>
                        <a href="./index.html?locale=en_US">English</a>
                      </li>
                      <li>
                        <a href="./index.html?locale=zh_CN">中文</a>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-search">
                    <div
                      className="search-click"
                      onClick={this.handleSearchClick}
                    >
                      <FontAwesomeIcon
                        icon={faSearch}
                        className={
                          this.state.isSearchShow ? "search-on" : "search-off"
                        }
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          this.state.isXShow ? "search-on" : "search-off"
                        }
                      />
                    </div>
                  </div>
                  <div
                    className="search-input"
                    style={{
                      display: this.state.display,
                      transition: ".35s all"
                    }}
                  >
                    <input
                      type="text"
                      placeholder={this.state.locale.input_here}
                    />
                    <div className="">
                      <button id="btn-search">
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-pad">
              <div
                className="search-input"
                style={{
                  display: this.state.display,
                  transition: ".35s all"
                }}
              >
                <input type="text" placeholder={this.state.locale.input_here} />
                <div className="">
                  <button id="btn-search">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
              <div className="nav-lan" style={{ marginRight: "15px" }}>
                <div className="lan-txt">{this.state.locale.language}</div>
                <span>
                  <FontAwesomeIcon icon={faAngleDown} id="svg-down" />
                </span>
                <ul className="lan-select">
                  <li>
                    <a href="./index.html?locale=ja_JP">日本語</a>
                  </li>
                  <li>
                    <a href="./index.html?locale=en_US">English</a>
                  </li>
                  <li>
                    <a href="./index.html?locale=zh_CN">中文</a>
                  </li>
                </ul>
              </div>
              <div className="nav-search">
                <div className="search-click" onClick={this.handleSearchClick}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={
                      this.state.isSearchShow ? "search-on" : "search-off"
                    }
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={this.state.isXShow ? "search-on" : "search-off"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 移动端header */}
        <div
          className="second-menu"
          style={{ left: this.state.left, transition: ".35s all" }}
        >
          <div className="second-menu-item caps">
            {this.state.locale.homepage}
          </div>

          <div className="second-menu-item caps expand" onClick={this.handleItemFoldClick}>
            <span>
              {this.state.locale.information}
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <div className="second-menu-information" />
            <ul style={{ display: this.state.itemDisplay, transition: ".35s all" }}>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.company_profile}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.business_philosophy}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.representative_s_greetings}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.privacy_policy}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.organizational_chart}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.access}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.company_culture}
                </a>
              </li>
            </ul>
          </div>

          <div className="second-menu-item caps expand" onClick={this.handleItemFoldClick}>
            <span>
              {this.state.locale.business_field}
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <ul style={{ display: this.state.itemDisplay, transition: ".35s all" }}>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.business_summary}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.quality_control}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.project_management}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.development_language_and_environment}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.foreign_temporary_staffing_business}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.commission_proposal}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.other_business}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.development_performance}
                </a>
              </li>
            </ul>
          </div>

          <div className="second-menu-item caps expand" onClick={this.handleItemFoldClick}>
            <span>
              {this.state.locale.welfare}
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <ul style={{ display: this.state.itemDisplay, transition: ".35s all" }}>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.education}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.leisure_and_entertainment}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowRight} />
                  {this.state.locale.medical_insurance}
                </a>
              </li>
            </ul>
          </div>

          <div className="second-menu-item caps">
            {this.state.locale.recruitment_information}
          </div>

          <div className="second-menu-item caps">
            {this.state.locale.contact_us}
          </div>

          <div className="second-menu-nav">
            <div className="nav-search">
              <div className="search-click">
                <FontAwesomeIcon icon={faSearch} className="search-on" />
                <FontAwesomeIcon icon={faTimes} className="search-off" />
              </div>
            </div>
            <div className="search-input">
              <input type="text" placeholder={this.state.locale.input_here} />
              <div className="">
                <button id="btn-search">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
            <div className="nav-lan second-nav-lan">
              <div className="lan">
                {this.state.locale.language}
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <ul className="lan-select">
                <li>
                  <a href="./index.html?locale=ja_JP">日本語</a>
                </li>
                <li>
                  <a href="./index.html?locale=en_US">English</a>
                </li>
                <li>
                  <a href="./index.html?locale=zh_CN">中文</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GlobelHeader;
