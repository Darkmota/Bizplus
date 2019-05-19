import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import "./contactUS.css";
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";

class ContactUS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "contact us",
        imgUrl: "http://localhost:3000/imgs/main-information.jpg"
      }
    };
  }

  render() {
    return (
      <>
        <div className="contact-container">
          {/* 页面顶部布局 */}
          <PageHeader {...this.state.pageHeaderInfo} />
          {/* 面包屑 */}
          <div className="contact-breadcrumb">
            <div className="contact-content">
              <div>Home / お問い合わせ</div>
            </div>
          </div>
          {/* 主要内容 */}
          <div className="contact-page-main">
            <div className="contact-page-container">
              <p className="contact-page-txt">
                お問い合わせご希望の方は下記フォームよりどうぞ。
                <br />
                送信内容を確認させていただき、3営業日以内にご連絡させていただきます。
                <br />
                <small>
                  <span className="notice">※</span>は入力必須項目です。
                </small>
              </p>
              <div className="contact-page-form">
                <div className="main-form">
                  <ContactForm />
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
  )(ContactUS)
);
