import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import * as authAction from '../../store/auth/action'
import Edit from './Edit'
import Info from './Info'
import { Menu } from '../../components'
import ListQuest from './ListQuest'
import { APP_CONSTANTS } from '../../common/constants'
import Helmet from 'react-helmet'
import { URL } from '../../common/constant'
import './styles.css'

export default function User() {
  const history = useHistory()
  const user = useSelector((state) => state.user)
  React.useEffect(() => {
    if (!user.info) {
      history.push(URL.HOME)
    }
  }, [])

  return (
    <div className="detail-user">
      <Helmet>
        <link rel="stylesheet" type="text/css" href="/comon/css/util.css" />
        <link rel="stylesheet" type="text/css" href="/comon/css/main.css" />
      </Helmet>
      <Menu
        email={localStorage.getItem(APP_CONSTANTS.WEB_EMAIL)}
        // logout={this.props.logout}
      />
      <div className="container" style={{ marginTop: 50 }}>
        <Switch>
          <Route path={URL.USER.INFO} component={Info} />
          <Route path={URL.USER.EDIT} component={Edit} exact />
          <Route path={URL.USER.QUEST} component={ListQuest} exact />
        </Switch>
      </div>
      <div style={{ marginTop: '29px' }} />
    </div>
  )
}
