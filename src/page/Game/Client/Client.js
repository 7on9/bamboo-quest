import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './style.css'
import Welcome from './Welcome'
import ReturnResult from './ReturnResult'
import Play from './Play'
import Helmet from 'react-helmet'

/*Play game*/
class Client extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/comon/css/util.css"/>
          <link rel="stylesheet" type="text/css" href="/comon/css/main.css"/>
        </Helmet>        
        <Switch>
          {/* <Route path="/client/join" component={Join} /> */}
          <Route path="/client/welcome" component={Welcome} />
          <Route path="/client/play" component={Play} />
          <Route path="/client/result" component={ReturnResult} />
        </Switch>
      </div>
    )
  }
}

export default Client
