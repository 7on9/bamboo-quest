import React from 'react'
import Fullscreen from './comon/Fullscreen'
import Home from './Home'
import User from './User'

import { Switch, Route } from 'react-router-dom'
import DetailUser from './DetailUser'

export default function Dashboard() {
  return (
    <Fullscreen>
      <Switch>
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/dashboard/user" component={User} />
        <Route path="/dashboard/user/:id" component={DetailUser} />
      </Switch>
    </Fullscreen>
  )
  
}
