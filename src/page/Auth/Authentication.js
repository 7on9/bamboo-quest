import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authAction from '../../store/auth/action'
import { Redirect } from 'react-router-dom'

export class Authentication extends Component {

  verifyAccount = async () => {
    await this.props.verify()
  }
  render() {
    if(!this.props.authenticated) {
      this.verifyAccount()
    }
    return <Redirect to={{ pathname: '/auth' }} />
  }
}

const mapStateToProps = state => ({
  ...state.user,
})

const mapDispatchToProps = {
  verify: authAction.verify,
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)
