import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authAction from '../../store/auth/action'
import { Redirect } from 'react-router-dom'

export class Authentication extends Component {
  render() {
    return !this.props.authenticated ? (
      <Redirect to={{ pathname: '/auth' }} />) : this.children
  }
}

const mapStateToProps = state => ({
  ...state.user,
})

const mapDispatchToProps = {
  verify: authAction.verify,
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)
