import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import * as authAction from '../../store/auth/action'
import Info from './Info'
import Create from './Create'
import CreateQuestion from './CreateQuestion'
import { Menu } from '../../components'
import { APP_CONSTANTS } from '../../common/constants'
import Helmet from 'react-helmet'

class Quest extends Component {
  UNSAFE_componentWillMount() {
    if (localStorage.getItem(APP_CONSTANTS.WEB_TOKEN)) {
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
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="home">
        <Helmet>
        <link rel="stylesheet" type="text/css" href="/comon/css/util.css"/>
        <link rel="stylesheet" type="text/css" href="/comon/css/main.css"/>
        </Helmet>
        <Menu
          email={this.props.user.info ? this.props.user.info.email : 'email'}
        />

        <Switch>
          <Route path="/quest/info/:id" component={Info} />
          <Route path="/quest/create" component={Create} />
          <Route path="/quest/add" component={CreateQuestion} />
        </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Quest)
