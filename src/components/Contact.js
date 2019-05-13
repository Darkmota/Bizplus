import React, { Component } from "react";

import "../css/contact.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="contact">
      <div className="line">
        <div className="line-inner">
          <div className="line-txt-l ">
            <div className="txt-item">
              <h4 className="c-dark" data-i18n-text="faq_by_form">通过传真联系</h4>
              <p data-i18n-text="faq_by_form_summary">如果您匆忙或想要听到更多信息，请致电。</p>
              <a href="#" className="clear-a" data-i18n-text="contact_us">TEL 03-6709-8260</a>
              <div className="" data-i18n-text="reception_time">接待时间9:45至18:15（周六和周日，公众假期除外）</div>
            </div>
          </div>
          <div className="line-txt-r ">
            <div className="txt-item">
              <h4 className="c-dark" data-i18n-text="faq_by_tel">通过电话联系</h4>
              <p data-i18n-text="faq_by_tel_summary">如果您匆忙或想要听到更多信息，请致电。</p>
              <a href="#" className="clear-a">TEL 03-6709-8260
              </a>
              <div className="" data-i18n-text="reception_time">接待时间9:45至18:15（周六和周日，公众假期除外）</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Contact;