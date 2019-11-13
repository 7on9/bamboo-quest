import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//router
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//redux
import { Provider } from 'react-redux';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';

import Join from './page/Game/Client/Join';
import Auth from './page/Auth/Auth';
import Home from './page/Home/Home';
import Client from './page/Game/Client/Client';
import Quest from './page/Quest/Quest';
import Host from './page/Game/Host/Host';
import DashBoard from './page/Dashboard/index'
import configureSocket from './store/socket/socket';
import { User } from './page';

const store = configureStore();
export const socket = configureSocket(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Join} />
      <Route path="/auth" component={Auth} />
      <Route path="/home" component={Home} />
      <Route path="/client" component={Client} />
      <Route path="/quest" component={Quest} />
      <Route path="/user" component={User} />
      <Route path="/host" component={Host} />
      <Route path="/dashboard" component={DashBoard} />

    </Router>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can changec
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
