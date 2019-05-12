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
      <footer className="footer">
        <div className="footer-inner">
          <div className="colophon__wrapper ">
            <ul className="colophon__links ">
              <li>
                <span>© 2019. Bizplus, Inc.</span>
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
                1
                {/* <FontAwesomeIcon icon={faLine} /> */}
                </a>
              </li>
              <li>
                <a className="fade-out" href="#">
                2
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
                </a>
              </li>
              <li>
                <a className="fade-out" href="#">
                3
                {/* <FontAwesomeIcon icon={faFacebook} /> */}
                </a>
              </li>
              <li>
                <a className="fade-out" href="#">
                4
                {/* <FontAwesomeIcon icon={weixin} /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
