import React, { Component } from "react";
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { withRouter, Route, Link } from 'react-router-dom'

class Welfare extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<h1>Welfare</h1>)
  }
}

const mapStateToProps = state => ({
})

const mapStateToDispatch = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Welfare))
