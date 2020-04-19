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
        <Route path="/dashboard/user" component={User} />
        <Route path="/dashboard/detailuser" component={DetailUser} />
        <Route exact path="/dashboard/quest" component={Quest} />
        <Route path="/dashboard/detaiquest" component={DetailQuest} />
      </Switch>
    </Fullscreen>
  )
  
}
