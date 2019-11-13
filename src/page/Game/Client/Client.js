import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './style.css';
import Welcome from './Welcome';
import ReturnResult from './ReturnResult';
import Play from './Play';

/*Play game*/
class Client extends Component {
  render() {
    return (
      <div>
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
