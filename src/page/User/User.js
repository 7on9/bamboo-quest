import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'
import { Link, Redirect, Switch, Route } from 'react-router-dom'
import * as authAction from '../../store/auth/action'
import Edit from './Edit'
import Info from './Info'
import { Menu } from '../../components'
import ListQuest from './ListQuest'

class User extends Component {
  componentWillMount() {
    if (localStorage.getItem('token')) {
      this.props.verify()
      // this.props.getInfo()
    }
    else {
      let { from } = this.props.location.state || { from: { pathname: "/home" } }
      return <Redirect to={from} />
    }
  }
  render() {
    if (!this.props.user.token) {
      let { from } = this.props.location.state || { from: { pathname: "/home" } }
      return <Redirect to={from} />
    }
    console.log (this.props.user)
    return (
      <div className="detail-user">
        <Menu email={localStorage.getItem('email')} />
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
