import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'
import { Link, Redirect, Switch, Route } from 'react-router-dom'
import * as authAction from '../../store/auth/action'
import Edit from './Edit'
import Info from './Info'
import { Menu } from '../../components'
import ListQuest from './ListQuest'
import { Authentication } from '../Auth/Authentication'
import { APP_CONSTANTS } from '../../common/constants'

class User extends Component {
  render() {
    console.log (this.props.user)
    return (
      <div className="detail-user">
        {/* <Authentication /> */}
        <Menu email={localStorage.getItem(APP_CONSTANTS.WEB_EMAIL)} logout={this.props.logout} a="aas" />
        <div className="container" style={{ marginTop: 50 }}>
          <Switch>
            <Route path="/user/info" component={Info} />
            <Route path="/user/edit" component={Edit} exact />
            <Route path="/user/quest" component={ListQuest} exact />
          </Switch>
        </div>
        <div style={{ marginTop: '29px' }} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = {
  verify: authAction.verify,
  login: authAction.login,
  // getInfo: authAction.getInfo,
  logout: authAction.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
