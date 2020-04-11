import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { APP_CONSTANTS } from './constants'
import { useSelector, useDispatch } from 'react-redux'
import { verify, changeStatusRunning } from '../store/auth/action'

function PrivateRoute({ component: Component, ...rest }) {
  const logging = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!localStorage.getItem(APP_CONSTANTS.WEB_TOKEN))
      dispatch(changeStatusRunning(true))
  }, [])
  useEffect(() => {
    dispatch(verify())
  }, [logging.authenticated])
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem(APP_CONSTANTS.WEB_TOKEN) &&
        logging.authenticated ? (
          <Component {...props} />
        ) : logging.running ? (
          <Redirect to={{ path: '/auth', state: { from: props.location } }} />
        ) : logging.token === '' ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ path: '/auth', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
