import React, { Component } from "react";
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { withRouter, Route, Link } from 'react-router-dom'

class BusinessField extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <>
        <h1>BusinessField</h1> 
      </>
    )
  }
}

const mapStateToProps = state => ({
})

const mapStateToDispatch = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(BusinessField))