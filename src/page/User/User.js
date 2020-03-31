import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'
import { Switch, Route } from 'react-router-dom'
import * as authAction from '../../store/auth/action'
import Edit from './Edit'
import Info from './Info'
import { Menu } from '../../components'
import ListQuest from './ListQuest'
import { APP_CONSTANTS } from '../../common/constants'
import Helmet from 'react-helmet'

class User extends Component {
  render() {
    return (
      <div className="detail-user">
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/comon/css/util.css" />
          <link rel="stylesheet" type="text/css" href="/comon/css/main.css" />
        </Helmet>
        <Menu
          email={localStorage.getItem(APP_CONSTANTS.WEB_EMAIL)}
          logout={this.props.logout}
          a="aas"
        />
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
  logout: authAction.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
