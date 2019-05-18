import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { withRouter, Route, Link } from "react-router-dom";
import BtnSend from "./BtnMore";

import "../css/from.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <form className="form">
          <div className="field">
            <label for="">
              Name
              <span className="notice">*</span>
            </label>
            <input id="" name="" type="text" value="Andy Tran" />
          </div>
          <div className="field">
            <label for="email">
              Email Address
              <span className="notice">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value="hello@andytran.me"
            />
          </div>
          <div className="field">
            <label for="">
              Phone
              <span className="notice">*</span>
            </label>
            <input id="" name="" type="text" />
          </div>
          <div className="field">
            <label for="">Address</label>
            <input id="" name="" type="text" />
          </div>
          <div className="content">
            <label for="rpassword">
              Content
              <span className="notice">*</span>
            </label>
            <textarea name="content" rows="5" />
          </div>
        </form>
        <div className="form-button">
          <BtnSend name={"Submit"} />
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
  )(ContactForm)
);
