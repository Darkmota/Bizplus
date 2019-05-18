import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter, Route, Link } from 'react-router-dom'
import zh_CN from "../locale/zh_CN.json";
import en_US from "../locale/en_US.json";
import ja_JP from "../locale/ja_JP.json";
import RouteName from '../config/RouteName'
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
  faTimes,
  faBars,
  faPlus
} from "@fortawesome/fontawesome-free-solid";
console.table(RouteName)

class GlobelHeader extends Component {
  constructor() {
    super();
    this.state = {
      //字体语言state
      locale: zh_CN,

      btnExpendDisplay:"block",
      btnFoldDisplay:"none",

      //二级菜单state
      isFold: true,
      top: "-100%",
      expendDisplay:"none",

      //search按钮控制input
      searchFlag: false,
      display: "none",
      isSearchShow: true,
      isXShow: false
    };
    this.handleFoldClick = this.handleFoldClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  goRoute = (link, event) => {
    event.stopPropagation()
    this.props.history.push(`${link}`)
  }

  //二级菜单展开/收起
  handleFoldClick() {
    if (this.state.isFold === false) {
      this.setState({
        isFold: true,
        top: "-100%",
        btnExpendDisplay:"block",
        btnFoldDisplay:"none"
      });
    } else if (this.state.isFold === true) {
      this.setState({
        isFold: false,
        top: "80px",
        btnExpendDisplay:"none",
        btnFoldDisplay:"block"
      });
    }
  }

  handleExpendClick = (e) => {
    if(this.state.expendDisplay === "none"){
      this.setState({
        expendDisplay:"block"
      });
    }
    if(this.state.expendDisplay === "block"){
      this.setState({
        expendDisplay:"none"
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
              <FontAwesomeIcon icon={faBars} 
                className="img-btn" 
                onClick={this.handleFoldClick}
                style={{display:this.state.btnExpendDisplay}}
                 />
              <FontAwesomeIcon icon={faTimes} 
                className="img-btn" 
                onClick={this.handleFoldClick}
                style={{display:this.state.btnFoldDisplay}} />
            </div>
            <div className="nav-logo">
              <a className="navbar-brand " href="#">
                <img src="./imgs/Biz.png" className="img-responsive" />
              </a>
              <div className="logo-font">Bizplus</div>
            </div>
            <div className="nav-menu">
              <div className="navbar-center">
                {
                  RouteName.map(route => (
                    <div onClick={this.goRoute.bind(this, `/${route.name}`)} key={route.name} className={'menu-item caps' + (route.children ? ' expand' : '')}>
                      <span className="item-txt">
                        {this.state.locale[route.name]}
                      </span>
                      {
                        route.children
                        ?
                        <>
                          <span>
                            <FontAwesomeIcon icon={faAngleDown} className="svg-down" />
                          </span>
                          <div className="menu-information" />
                          <ul>
                            {
                              route.children.map(child => (
                                <li key={child}>
                                  <a href="#" onClick={this.goRoute.bind(this, `/${route.name}/${child}`)}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                    {this.state.locale[child]}
                                  </a>
                                </li>
                              ))
                            }
                          </ul>
                        </>
                        :
                        <></>
                      }
                    </div>
                  ))
                }
                <div className="nav-right">
                  <div className="nav-lan" style={{ marginRight: "15px" }}>
                    <div className="lan-txt">
                    <span>{this.state.locale.language}</span>
                    </div>
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
          </div>
        </div>
        {/* 移动端二级菜单 */}
        <div
          className="second-menu"
          style={{ top: this.state.top, transition: ".35s all" }}
        >
          <div style={{height:'80%',overflowY:'scroll'}}>

          {
            RouteName.map(route => (
              <div onClick={this.goRoute.bind(this, `/${route.name}`)} key={route.name} className={'second-menu-item caps' + (route.children ? ' expand' : '')}>
                <span className="item-txt">
                  {this.state.locale[route.name]}
                </span>
                {
                  route.children
                  ?
                  <>
                    <span>
                      <FontAwesomeIcon icon={faAngleDown} className="svg-down" />
                    </span>
                    <div className="menu-information" />
                    <ul>
                      {
                        route.children.map(child => (
                          <li key={child}>
                            <a href="#" onClick={this.goRoute.bind(this, `/${route.name}/${child}`)}>
                              <FontAwesomeIcon icon={faArrowRight} />
                              {this.state.locale[child]}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </>
                  :
                  <></>
                }
              </div>
            ))
          }
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


const mapStateToProps = state => ({
})

const mapStateToDispatch = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(GlobelHeader))
