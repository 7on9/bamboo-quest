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
      if (!this.props.user.email) {
        this.props.verify()
        if (this.props.user.token === null) {
          this.setState({
            authenticated: false,
          })
        } else {
          this.setState({
            authenticated: true,
          })
        }
      }
    } else {
      this.setState({
        authenticated: false,
      })
      console.log('tạch')
    }
  }
  render() {
    // try {
    //   if (this.state.authenticated === false) {
    //     const { from } = this.props.location.state || {
    //       from: { pathname: '/' },
    //     }
    //     return <Redirect to={from} />
    //   }
    // } catch (error) {
    //   if (this.state === null) {
    //     // window.location.reload();
    //     // const { from } = this.props.location.state || { from: { pathname: "/home" } };
    //     // return <Redirect to={from} />
    //   }
    // }
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
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
