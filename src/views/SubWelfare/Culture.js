import React, { Component } from "react";
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { withRouter, Route, Link } from 'react-router-dom'
import PageHeader from "../../components/PageHeader"
import "./culture.css"

class Culture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeaderInfo: {
        title: "企业文化",
        imgUrl: "https://picsum.photos/1920/500"
      },
      
    };
  }

  render() {
    return (
      <>
        <div className="education-container">
          {/* 页面顶部布局 */}
          <PageHeader {...this.state.pageHeaderInfo} />
          <div className="education-page-main">
            {/* 社内教育 */}
            <div className="company-culture">
              <div className="culture-page-top">
              企业文化
              </div>
              <div className="education-content">
                123
              </div>
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

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Culture))