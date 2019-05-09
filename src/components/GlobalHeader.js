import React, { Component } from 'react'

import zh_CN from '../locale/zh_CN.json'
import en_US from '../locale/en_US.json'
import ja_JP from '../locale/ja_JP.json'

import '../css/normalize.css'
import '../css/common.css'
import '../css/fold.css'
import '../css/header.css'
// import '../css/slide.css'
// import '../css/index.css'
// import '../css/web-end.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowRight, faSearch, faTimes } from "@fortawesome/fontawesome-free-solid";

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
                </div>
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
                      <span className="item-txt">{ this.state.locale.information }</span>
                      <span><FontAwesomeIcon icon={faAngleDown} id="svg-down" /></span>
                      <div className="menu-information"></div>
                      <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.company_profile }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.business_philosophy }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.representative_s_greetings }</a>
                        </li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.privacy_policy }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.organizational_chart }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.access }</a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.company_culture }</a></li>
                      
                      </ul>
                    </div>
                    <div className="menu-item caps expand">
                      <span className="item-txt">{ this.state.locale.business_field }
                      </span>
                      <span><FontAwesomeIcon icon={faAngleDown} id="svg-down" /></span>
                      <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.business_summary }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.quality_control }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.project_management }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.development_language_and_environment }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.foreign_temporary_staffing_business }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.commission_proposal }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.other_business }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.development_performance }</a></li>
                      </ul>
                    </div>
                    <div className="menu-item caps expand">
                      <span className="item-txt">{ this.state.locale.welfare }
                      </span>
                      <span><FontAwesomeIcon icon={faAngleDown} id="svg-down" /></span>
                      <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.education }</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.leisure_and_entertainment }</a>
                        </li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.medical_insurance }</a></li>
                      </ul>
                    </div>
                    <div className="menu-item caps">{ this.state.locale.recruitment_information }</div>
                    <div className="menu-item caps">{ this.state.locale.contact_us }</div>
                  </div>
                </div>
                <div className="nav-right">
                  <div className="nav-search" style={{marginRight: '15px'}}>
                    <div className="search-click">
                      <FontAwesomeIcon icon={faSearch} className="search-on"/>
                      <FontAwesomeIcon icon={faTimes} className="search-off"/>
                    </div>
                  </div>
                  <div className="search-input">
                    <input type="text" placeholder={ this.state.locale.input_here }/>
                    <div className=""><button id="btn-search"><FontAwesomeIcon icon={faSearch} /></button></div>
                  </div>
                  <div className="nav-lan">
                    <div className="lan-txt">{ this.state.locale.language }
                    </div>
                    <span><FontAwesomeIcon icon={faAngleDown} id="svg-down" /></span>
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
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
                <div className="second-menu-information"></div>
                <ul>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.company_profile }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.business_philosophy }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.representative_s_greetings }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.privacy_policy }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.organizational_chart }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.access }</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.company_culture }</a></li>
                      
                </ul>
              </div>
              <div className="second-menu-item caps expand">
                <span>{ this.state.locale.business_field }
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
                <ul>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.business_summary }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.quality_control }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.project_management }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} /><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.development_language_and_environment }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.foreign_temporary_staffing_business }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.commission_proposal }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.other_business }</a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.development_performance }</a></li>
                </ul>
              </div>
              <div className="second-menu-item caps expand">
                <span>{ this.state.locale.welfare }
                  <FontAwesomeIcon icon={faAngleDown} />  
                </span>
                <ul>
                  <li><a href="#">{ this.state.locale.education }<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.leisure_and_entertainment }</a>
                        </li>
                        <li><a href="#"><FontAwesomeIcon icon={faArrowRight} />{ this.state.locale.medical_insurance }</a></li>
                </ul>
              </div>
              <div className="second-menu-item caps">{ this.state.locale.recruitment_information }</div>
              <div className="second-menu-item caps">{ this.state.locale.contact_us }</div>

              <div className="second-menu-nav">
                <div className="nav-search">
                  <div className="search-click">
                    <FontAwesomeIcon icon={faSearch} className="search-on"/>
                    <FontAwesomeIcon icon={faTimes} className="search-off"/>
                  </div>
                </div>
                <div className="search-input">
                  <input type="text" placeholder={ this.state.locale.input_here }/>
                  <div className=""><button id="btn-search"><FontAwesomeIcon icon={faSearch}/></button></div>
                </div>
                <div className="nav-lan second-nav-lan">
                  <div className="lan">{ this.state.locale.language }
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  <ul className="lan-select">
                    <li><a href="./index.html?locale=ja_JP">日本語</a></li>
                    <li><a href="./index.html?locale=en_US">English</a></li>
                    <li><a href="./index.html?locale=zh_CN">中文</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </>
        )
    }
}

export default GlobelHeader