import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { APP_CONSTANTS } from '../common/constants'
import { useSelector, useDispatch } from 'react-redux'
import { verify, changeStatusRunning } from '../store/auth/action'

function PrivateRoute({ component: Component, ...rest }) {
  const logging = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(logging)
    dispatch(verify())
  }, [logging.authenticated])
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem(APP_CONSTANTS.WEB_TOKEN) &&
        logging.authenticated ? (
          <Component {...props} />
        ) : //   (
        //     <Redirect to={{ path: '/auth', state: { from: props.location } }} />
        //   )
        logging.running ? (
          <Redirect
            to={{ pathname: '/auth', state: { from: props.location } }}
          />
        ) : logging.token === '' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/auth', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
