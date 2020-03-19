import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Fullscreen from './comon/Fullscreen'
import Home from './Home'
import User from './User'
import Quest from './Quest'
import DetailUser from './DetailUser'
import DetailQuest from './DetailQuest'


export default function Dashboard() {
  return (
    <Fullscreen>
      <Switch>
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/dashboard/user" component={User} />
        <Route path="/dashboard/user/:id" component={DetailUser} />
        <Route exact path="/dashboard/quest" component={Quest} />
        <Route path="/dashboard/quest/:id" component={DetailQuest} />
      </Switch>
    </Fullscreen>
  )
  
}
