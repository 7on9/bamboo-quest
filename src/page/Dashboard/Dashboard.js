import React from 'react'
import Fullscreen from './comon/Fullscreen'
import Home from './Home'
import Table from './Table'

import { Switch, Route } from 'react-router-dom'

export default function Dashboard() {
  return (
    <Fullscreen>
      <Switch>
        <Route path="/dashboard/index" component={Home} />
        <Route path="/dashboard/table" component={Table} />
      </Switch>
    </Fullscreen>
  )
  
}
