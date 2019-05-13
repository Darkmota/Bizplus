import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  weixin,
  faLine,
  faTwitter,
  faFacebook
} from "@fortawesome/fontawesome-free-solid";
import "../css/footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      url: props.url
    };
  }

  render() {
    return (
      <div>
        <footer>
          <div className="m-ft-wrap">
            <div className="m-left-wrap">
              <div className="m-ft-logo">
                <div>Bizplus</div>
              </div>
              <div className="m-ft-contact">
                <div>東京都新宿区富久町1番5号</div>
                <div>富久町第5服部ビル2階</div>
                <div>TEL : 03-6709-8260</div>
                <div>FAX : 03-6709-8261</div>
              </div>
              <div className="m-ft-qr">
                <img src="imgs/bizplus_qr.png" alt="" />
              </div>
            </div>
            <div className="m-right-wrap">
              <div className="m-linkitem">
                <li>
                  <a href="#" data-locate="menu.company">
                    企業情報
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.company.info">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.company.idea">
                    理念经营
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.company.grop">
                    組織図{" "}
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.company.safe">
                    アクセス
                  </a>
                </li>
              </div>
              <div className="m-linkitem">
                <li>
                  <a href="#" data-locate="menu.business">
                    事業分野
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.business.info">
                    事業紹介
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.business.disp">
                    外国人材派遣事業
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.business.bail">
                    受託開発
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.business.othr">
                    その他事業概要
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.business.ache">
                    開発実績
                  </a>
                </li>
              </div>
              <div className="m-linkitem">
                <li>
                  <a href="#" data-locate="menu.benefits">
                    福利厚生
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.benefits.cult">
                    社風について
                  </a>
                </li>
                <li>
                  <a href="#" data-locate="menu.benefits.tech">
                    社内教育について
                  </a>
                </li>
              </div>
              <div className="m-linkitem">
                <li>
                  <a href="#" data-locate="menu.jobs">
                    採用情報
                  </a>
                </li>
              </div>
              <div className="m-linkitem">
                <li>
                  <a href="#" data-locate="menu.asks">
                    お問い合わせ
                  </a>
                </li>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer">
          <div className="footer-inner">
            <div className="colophon__wrapper ">
              <ul className="colophon__links ">
                <li>
                  <span>© 2019 BizPlus CORPORATION All rights Reserved.</span>
                </li>
                <li>
                  <a href="#" className="fade-out">
                    {" "}
                    Terms &amp; HZNU
                  </a>
                </li>
                <li>
                  <a href="#" className="fade-out">
                    {" "}
                    xxx.
                  </a>
                </li>
              </ul>
              <ul className="colophon__social">
                <li>
                  <a className="fade-out" href="#">
                    1{/* <FontAwesomeIcon icon={faLine} /> */}
                  </a>
                </li>
                <li>
                  <a className="fade-out" href="#">
                    2{/* <FontAwesomeIcon icon={faTwitter} /> */}
                  </a>
                </li>
                <li>
                  <a className="fade-out" href="#">
                    3{/* <FontAwesomeIcon icon={faFacebook} /> */}
                  </a>
                </li>
                <li>
                  <a className="fade-out" href="#">
                    4{/* <FontAwesomeIcon icon={weixin} /> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
