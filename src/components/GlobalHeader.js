import React, { Component } from 'react'
import zh_CN from '../locale/zh_CN.json'
import en_US from '../locale/en_US.json'
import ja_JP from '../locale/ja_JP.json'
import '../css/common.css'
import '../css/fold.css'
import '../css/header.css'
// import '../css/slide.css'
// import '../css/index.css'
// import '../css/web-end.css'

class GlobelHeader extends Component {

    constructor () {
      super()
      this.state = {
        locale: zh_CN
      }
    }

    render () {
        return(
          // g-Header
          <>
            <div className="g-navbar">
              <div className="g-nav">
                <div className="left-fold">
                  <img src="./imgs/icon-fold.svg" className="img-fold" id="btn-fold"/>
                <div className="nav-logo ">
                  <a className="navbar-brand " href="#">
                    <img src="./imgs/Biz.png" className="img-responsive"/>
                  </a>
                  <div className="logo-font">Bizplus</div>
                </div>
                <div className="nav-menu">    
                  <div className="navbar-center">
                    <div className="menu-item caps">{ this.state.locale.homepage}</div>
                    <div className="menu-item caps expand">
                      <span>{ this.state.locale.information }{ this.state.locale.information }
                        <i className="fas fa-angle-down svg-down"></i>
                      </span>
                      <div className="menu-information"></div>
                      <ul>
                        <li><a href="#">{ this.state.locale.company_profile }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.business_philosophy }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.representative_s_greetings }<i className="fas fa-arrow-right"></i></a>
                        </li>
                        <li><a href="#">{ this.state.locale.privacy_policy }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.organizational_chart }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.access }<i className="fas fa-arrow-right"></i></a></li>
                      <li><a href="#">{ this.state.locale.company_culture }<i className="fas fa-arrow-right"></i></a></li>
                      
                      </ul>
                    </div>
                    <div className="menu-item caps expand">
                      <span>{ this.state.locale.business_field }
                        <i className="fas fa-angle-down svg-down"></i>
                      </span>
                      <ul>
                        <li><a href="#">{ this.state.locale.business_summary }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.quality_control }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.project_management }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.development_language_and_environment }<i
                              className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.foreign_temporary_staffing_business }<i
                              className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.commission_proposal }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.other_business }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.development_performance }<i className="fas fa-arrow-right"></i></a></li>
                      </ul>
                    </div>
                    <div className="menu-item caps expand">
                      <span>{ this.state.locale.welfare }
                        <i className="fas fa-angle-down svg-down"></i>
                      </span>
                      <ul>
                        <li><a href="#">{ this.state.locale.education }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.leisure_and_entertainment }<i className="fas fa-arrow-right"></i></a>
                        </li>
                        <li><a href="#">{ this.state.locale.medical_insurance }<i className="fas fa-arrow-right"></i></a></li>
                      </ul>
                    </div>
                    <div className="menu-item caps">{ this.state.locale.recruitment_information }</div>
                    <div className="menu-item caps">{ this.state.locale.contact_us }</div>
                  </div>
                </div>
                <div className="nav-right">
                  <div className="nav-search" style={{marginRight: '15px'}}>
                    <div className="search-click">
                      <i className="fas fa-search search-on"></i>
                      <i className="fas fa-times search-off"></i>
                    </div>
                  </div>
                  <div className="search-input">
                    <input type="text" placeholder={ this.state.locale.input_here }/>
                    <div className=""><button id="btn-search"><i className="fas fa-search"></i></button></div>
                  </div>
                  <div className="nav-lan">
                    <div>{ this.state.locale.language }
                      <i className="fas fa-angle-down svg-down"></i>
                    </div>
                    <ul className="lan-select">
                      <li><a href="./index.html?locale=ja_JP">日本語</a></li>
                      <li><a href="./index.html?locale=en_US">English</a></li>
                      <li><a href="./index.html?locale=zh_CN">中文</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="second-menu">

              <div className="second-menu-item caps">{ this.state.locale.homepage }</div>
              <div className="second-menu-item caps expand">
                <span>{ this.state.locale.information }
                  <i className="fas fa-angle-down svg-down"></i>
                </span>
                <div className="second-menu-information"></div>
                <ul>
                  <li><a href="#">{ this.state.locale.company_profile }<i className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.business_philosophy }<i className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.representative_s_greetings }<i className="fas fa-arrow-right"></i></a>
                  </li>
                  <li><a href="#">{ this.state.locale.privacy_policy }<i className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.organizational_chart }<i className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.access }<i className="fas fa-arrow-right"></i></a></li>
                <li><a href="#">{ this.state.locale.company_culture }<i className="fas fa-arrow-right"></i></a></li>
                      
                </ul>
              </div>
              <div className="second-menu-item caps expand">
                <span>{ this.state.locale.business_field }
                  <i className="fas fa-angle-down svg-down"></i>
                </span>
                <ul>
                  <li><a href="#">{ this.state.locale.business_summary }<i className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.quality_control }<i className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.project_management }<i className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.development_language_and_environment }<i
                        className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.foreign_temporary_staffing_business }<i
                        className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.commission_proposal }<i className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.other_business }<i className="fas fa-arrow-right"></i></a></li>
                  <li><a href="#">{ this.state.locale.development_performance }<i className="fas fa-arrow-right"></i></a></li>
                </ul>
              </div>
              <div className="second-menu-item caps expand">
                <span>{ this.state.locale.welfare }
                  <i className="fas fa-angle-down svg-down"></i>
                </span>
                <ul>
                  <li><a href="#">{ this.state.locale.education }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#">{ this.state.locale.leisure_and_entertainment }<i className="fas fa-arrow-right"></i></a>
                        </li>
                        <li><a href="#">{ this.state.locale.medical_insurance }<i className="fas fa-arrow-right"></i></a></li>
                </ul>
              </div>
              <div className="second-menu-item caps">{ this.state.locale.recruitment_information }</div>
              <div className="second-menu-item caps">{ this.state.locale.contact_us }</div>

              <div className="second-menu-nav">
                <div className="nav-search">
                  <div className="search-click">
                    <i className="fas fa-search search-on"></i>
                    <i className="fas fa-times search-off" style={{paddingTop: '8px'}} ></i>
                  </div>
                </div>
                <div className="search-input">
                  <input type="text" placeholder={ this.state.locale.input_here }/>
                  <div className=""><button id="btn-search"><i className="fas fa-search"></i></button></div>
                </div>
                <div className="nav-lan second-nav-lan">
                  <div className="lan">{ this.state.locale.language }
                    <i className="fas fa-angle-down svg-down"></i>
                  </div>
                  <ul className="lan-select">
                    <li><a href="./index.html?locale=ja_JP">日本語</a></li>
                    <li><a href="./index.html?locale=en_US">English</a></li>
                    <li><a href="./index.html?locale=zh_CN">中文</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
        )
    }
}

export default GlobelHeader