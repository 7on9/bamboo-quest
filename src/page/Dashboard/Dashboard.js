import React, { Component } from 'react';
// import './../../component/dashboard/assets/css/style.css'
// import './../../component/dashboard/assets/css/csSkinElastic.css'
import {Images} from './../../component/dashboard/images/index'
export default class index extends Component {
  render() {
    return (
        <div>
        <aside id="left-panel" className="left-panel">
          <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="index.html"><i className="menu-icon fa fa-laptop" />Dashboard </a>
                </li>
                <li className="menu-title">UI elements</li>{/* /.menu-title */}
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-cogs" />Components</a>
                  <ul className="sub-menu children dropdown-menu">                            <li><i className="fa fa-puzzle-piece" /><a href="ui-buttons.html">Buttons</a></li>
                    <li><i className="fa fa-id-badge" /><a href="ui-badges.html">Badges</a></li>
                    <li><i className="fa fa-bars" /><a href="ui-tabs.html">Tabs</a></li>
                    <li><i className="fa fa-id-card-o" /><a href="ui-cards.html">Cards</a></li>
                    <li><i className="fa fa-exclamation-triangle" /><a href="ui-alerts.html">Alerts</a></li>
                    <li><i className="fa fa-spinner" /><a href="ui-progressbar.html">Progress Bars</a></li>
                    <li><i className="fa fa-fire" /><a href="ui-modals.html">Modals</a></li>
                    <li><i className="fa fa-book" /><a href="ui-switches.html">Switches</a></li>
                    <li><i className="fa fa-th" /><a href="ui-grids.html">Grids</a></li>
                    <li><i className="fa fa-file-word-o" /><a href="ui-typgraphy.html">Typography</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table" />Tables</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="fa fa-table" /><a href="tables-basic.html">Basic Table</a></li>
                    <li><i className="fa fa-table" /><a href="tables-data.html">Data Table</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th" />Forms</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="menu-icon fa fa-th" /><a href="forms-basic.html">Basic Form</a></li>
                    <li><i className="menu-icon fa fa-th" /><a href="forms-advanced.html">Advanced Form</a></li>
                  </ul>
                </li>
                <li className="menu-title">Icons</li>{/* /.menu-title */}
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks" />Icons</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="menu-icon fa fa-fort-awesome" /><a href="font-fontawesome.html">Font Awesome</a></li>
                    <li><i className="menu-icon ti-themify-logo" /><a href="font-themify.html">Themefy Icons</a></li>
                  </ul>
                </li>
                <li>
                  <a href="widgets.html"> <i className="menu-icon ti-email" />Widgets </a>
                </li>
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart" />Charts</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="menu-icon fa fa-line-chart" /><a href="charts-chartjs.html">Chart JS</a></li>
                    <li><i className="menu-icon fa fa-area-chart" /><a href="charts-flot.html">Flot Chart</a></li>
                    <li><i className="menu-icon fa fa-pie-chart" /><a href="charts-peity.html">Peity Chart</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart" />Maps</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="menu-icon fa fa-map-o" /><a href="maps-gmap.html">Google Maps</a></li>
                    <li><i className="menu-icon fa fa-street-view" /><a href="maps-vector.html">Vector Maps</a></li>
                  </ul>
                </li>
                <li className="menu-title">Extras</li>{/* /.menu-title */}
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-glass" />Pages</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="menu-icon fa fa-sign-in" /><a href="page-login.html">Login</a></li>
                    <li><i className="menu-icon fa fa-sign-in" /><a href="page-register.html">Register</a></li>
                    <li><i className="menu-icon fa fa-paper-plane" /><a href="pages-forget.html">Forget Pass</a></li>
                  </ul>
                </li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </nav>
        </aside>
        {/* /#left-panel */}
        {/* Right Panel */}
        <div id="right-panel" className="right-panel">
          {/* Header*/}
          <header id="header" className="header">
            <div className="top-left">
              <div className="navbar-header">
                {/* <a className="navbar-brand" href="./"><img src="images/logo.png" alt="Logo" /></a> */}
                <a className="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo" /></a>
                <a id="menuToggle" className="menutoggle"><i className="fa fa-bars" /></a>
              </div>
            </div>
            <div className="top-right">
              <div className="header-menu">
                <div className="header-left">
                  <button className="search-trigger"><i className="fa fa-search" /></button>
                  <div className="form-inline">
                    <form className="search-form">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                      <button className="search-close" type="submit"><i className="fa fa-close" /></button>
                    </form>
                  </div>
                  <div className="dropdown for-notification">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-bell" />
                      <span className="count bg-danger">3</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="notification">
                      <p className="red">You have 3 Notification</p>
                      <a className="dropdown-item media" href="#">
                        <i className="fa fa-check" />
                        <p>Server #1 overloaded.</p>
                      </a>
                      <a className="dropdown-item media" href="#">
                        <i className="fa fa-info" />
                        <p>Server #2 overloaded.</p>
                      </a>
                      <a className="dropdown-item media" href="#">
                        <i className="fa fa-warning" />
                        <p>Server #3 overloaded.</p>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown for-message">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="message" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-envelope" />
                      <span className="count bg-primary">4</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="message">
                      <p className="red">You have 4 Mails</p>
                      <a className="dropdown-item media" href="#">
                        <span className="photo media-left"><img alt="avatar" src={Images.A} /></span>
                        <div className="message media-body">
                          <span className="name float-left">Jonathan Smith</span>
                          <span className="time float-right">Just now</span>
                          <p>Hello, this is an example msg</p>
                        </div>
                      </a>
                      <a className="dropdown-item media" href="#">
                        <span className="photo media-left"><img alt="avatar" src={Images.B} /></span>
                        <div className="message media-body">
                          <span className="name float-left">Jack Sanders</span>
                          <span className="time float-right">5 minutes ago</span>
                          <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                      </a>
                      <a className="dropdown-item media" href="#">
                        <span className="photo media-left"><img alt="avatar" src={Images.C} /></span>
                        <div className="message media-body">
                          <span className="name float-left">Cheryl Wheeler</span>
                          <span className="time float-right">10 minutes ago</span>
                          <p>Hello, this is an example msg</p>
                        </div>
                      </a>
                      <a className="dropdown-item media" href="#">
                        <span className="photo media-left"><img alt="avatar" src={Images.D} /></span>
                        <div className="message media-body">
                          <span className="name float-left">Rachel Santos</span>
                          <span className="time float-right">15 minutes ago</span>
                          <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="user-area dropdown float-right">
                  <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="user-avatar rounded-circle" src={Images.ADMIN} alt="User Avatar" />
                  </a>
                  <div className="user-menu dropdown-menu">
                    <a className="nav-link" href="#"><i className="fa fa- user" />My Profile</a>
                    <a className="nav-link" href="#"><i className="fa fa- user" />Notifications <span className="count">13</span></a>
                    <a className="nav-link" href="#"><i className="fa fa -cog" />Settings</a>
                    <a className="nav-link" href="#"><i className="fa fa-power -off" />Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* /#header */}
          {/* Content */}
          <div className="content">
            {/* Animated */}
            <div className="animated fadeIn">
              {/* Widgets  */}
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="stat-widget-five">
                        <div className="stat-icon dib flat-color-1">
                          <i className="pe-7s-cash" />
                        </div>
                        <div className="stat-content">
                          <div className="text-left dib">
                            <div className="stat-text">$<span className="count">23569</span></div>
                            <div className="stat-heading">Revenue</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="stat-widget-five">
                        <div className="stat-icon dib flat-color-2">
                          <i className="pe-7s-cart" />
                        </div>
                        <div className="stat-content">
                          <div className="text-left dib">
                            <div className="stat-text"><span className="count">3435</span></div>
                            <div className="stat-heading">Sales</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="stat-widget-five">
                        <div className="stat-icon dib flat-color-3">
                          <i className="pe-7s-browser" />
                        </div>
                        <div className="stat-content">
                          <div className="text-left dib">
                            <div className="stat-text"><span className="count">349</span></div>
                            <div className="stat-heading">Templates</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="stat-widget-five">
                        <div className="stat-icon dib flat-color-4">
                          <i className="pe-7s-users" />
                        </div>
                        <div className="stat-content">
                          <div className="text-left dib">
                            <div className="stat-text"><span className="count">2986</span></div>
                            <div className="stat-heading">Clients</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Widgets */}
              {/*  Traffic  */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="box-title">Traffic </h4>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="card-body">
                          {/* <canvas id="TrafficChart"></canvas>   */}
                          <div id="traffic-chart" className="traffic-chart" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card-body">
                          <div className="progress-box progress-1">
                            <h4 className="por-title">Visits</h4>
                            <div className="por-txt">96,930 Users (40%)</div>
                            <div className="progress mb-2" style={{height: '5px'}}>
                              <div className="progress-bar bg-flat-color-1" role="progressbar" style={{width: '40%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          <div className="progress-box progress-2">
                            <h4 className="por-title">Bounce Rate</h4>
                            <div className="por-txt">3,220 Users (24%)</div>
                            <div className="progress mb-2" style={{height: '5px'}}>
                              <div className="progress-bar bg-flat-color-2" role="progressbar" style={{width: '24%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          <div className="progress-box progress-2">
                            <h4 className="por-title">Unique Visitors</h4>
                            <div className="por-txt">29,658 Users (60%)</div>
                            <div className="progress mb-2" style={{height: '5px'}}>
                              <div className="progress-bar bg-flat-color-3" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          <div className="progress-box progress-2">
                            <h4 className="por-title">Targeted  Visitors</h4>
                            <div className="por-txt">99,658 Users (90%)</div>
                            <div className="progress mb-2" style={{height: '5px'}}>
                              <div className="progress-bar bg-flat-color-4" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                        </div> {/* /.card-body */}
                      </div>
                    </div> {/* /.row */}
                    <div className="card-body" />
                  </div>
                </div>{/* /# column */}
              </div>
              {/*  /Traffic */}
              <div className="clearfix" />
              {/* Orders */}
              <div className="orders">
                <div className="row">
                  <div className="col-xl-8">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="box-title">Orders </h4>
                      </div>
                      <div className="card-body--">
                        <div className="table-stats order-table ov-h">
                          <table className="table ">
                            <thead>
                              <tr>
                                <th className="serial">#</th>
                                <th className="avatar">Avatar</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="serial">1.</td>
                                <td className="avatar">
                                  <div className="round-img">
                                    <a href="#"><img className="rounded-circle" src={Images.A} alt="" /></a>
                                  </div>
                                </td>
                                <td> #5469 </td>
                                <td>  <span className="name">Louis Stanley</span> </td>
                                <td> <span className="product">iMax</span> </td>
                                <td><span className="count">231</span></td>
                                <td>
                                  <span className="badge badge-complete">Complete</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="serial">2.</td>
                                <td className="avatar">
                                  <div className="round-img">
                                    <a href="#"><img className="rounded-circle" src={Images.B}alt="" /></a>
                                  </div>
                                </td>
                                <td> #5468 </td>
                                <td>  <span className="name">Gregory Dixon</span> </td>
                                <td> <span className="product">iPad</span> </td>
                                <td><span className="count">250</span></td>
                                <td>
                                  <span className="badge badge-complete">Complete</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="serial">3.</td>
                                <td className="avatar">
                                  <div className="round-img">
                                    <a href="#"><img className="rounded-circle" src={Images.C} alt="" /></a>
                                  </div>
                                </td>
                                <td> #5467 </td>
                                <td>  <span className="name">Catherine Dixon</span> </td>
                                <td> <span className="product">SSD</span> </td>
                                <td><span className="count">250</span></td>
                                <td>
                                  <span className="badge badge-complete">Complete</span>
                                </td>
                              </tr>
                              <tr>
                                <td className="serial">4.</td>
                                <td className="avatar">
                                  <div className="round-img">
                                    <a href="#"><img className="rounded-circle" src={Images.D} alt="" /></a>
                                  </div>
                                </td>
                                <td> #5466 </td>
                                <td>  <span className="name">Mary Silva</span> </td>
                                <td> <span className="product">Magic Mouse</span> </td>
                                <td><span className="count">250</span></td>
                                <td>
                                  <span className="badge badge-pending">Pending</span>
                                </td>
                              </tr>
                              <tr className=" pb-0">
                                <td className="serial">5.</td>
                                <td className="avatar pb-0">
                                  <div className="round-img">
                                    <a href="#"><img className="rounded-circle" src={Images.E} alt="" /></a>
                                  </div>
                                </td>
                                <td> #5465 </td>
                                <td>  <span className="name">Johnny Stephens</span> </td>
                                <td> <span className="product">Monitor</span> </td>
                                <td><span className="count">250</span></td>
                                <td>
                                  <span className="badge badge-complete">Complete</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div> {/* /.table-stats */}
                      </div>
                    </div> {/* /.card */}
                  </div>  {/* /.col-lg-8 */}
                  <div className="col-xl-4">
                    <div className="row">
                      <div className="col-lg-6 col-xl-12">
                        <div className="card br-0">
                          <div className="card-body">
                            <div className="chart-container ov-h">
                              <div id="flotPie1" className="float-chart" />
                            </div>
                          </div>
                        </div>{/* /.card */}
                      </div>
                      <div className="col-lg-6 col-xl-12">
                        <div className="card bg-flat-color-3  ">
                          <div className="card-body">
                            <h4 className="card-title m-0  white-color ">August 2018</h4>
                          </div>
                          <div className="card-body">
                            <div id="flotLine5" className="flot-line" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> {/* /.col-md-4 */}
                </div>
              </div>
              {/* /.orders */}
              {/* To Do and Live Chat */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title box-title">To Do List</h4>
                      <div className="card-content">
                        <div className="todo-list">
                          <div className="tdl-holder">
                            <div className="tdl-content">
                              <ul>
                                <li>
                                  <label>
                                    <input type="checkbox" /><i className="check-box" /><span>Conveniently fabricate interactive technology for ....</span>
                                    <a href="#" className="fa fa-times" />
                                    <a href="#" className="fa fa-pencil" />
                                    <a href="#" className="fa fa-check" />
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input type="checkbox" /><i className="check-box" /><span>Creating component page</span>
                                    <a href="#" className="fa fa-times" />
                                    <a href="#" className="fa fa-pencil" />
                                    <a href="#" className="fa fa-check" />
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input type="checkbox" defaultChecked /><i className="check-box" /><span>Follow back those who follow you</span>
                                    <a href="#" className="fa fa-times" />
                                    <a href="#" className="fa fa-pencil" />
                                    <a href="#" className="fa fa-check" />
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input type="checkbox" defaultChecked /><i className="check-box" /><span>Design One page theme</span>
                                    <a href="#" className="fa fa-times" />
                                    <a href="#" className="fa fa-pencil" />
                                    <a href="#" className="fa fa-check" />
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input type="checkbox" defaultChecked /><i className="check-box" /><span>Creating component page</span>
                                    <a href="#" className="fa fa-times" />
                                    <a href="#" className="fa fa-pencil" />
                                    <a href="#" className="fa fa-check" />
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div> {/* /.todo-list */}
                      </div>
                    </div> {/* /.card-body */}
                  </div>{/* /.card */}
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title box-title">Live Chat</h4>
                      <div className="card-content">
                        <div className="messenger-box">
                          <ul>
                            <li>
                              <div className="msg-received msg-container">
                                <div className="avatar">
                                  <img src={Images.G} alt="" />
                                  <div className="send-time">11.11 am</div>
                                </div>
                                <div className="msg-box">
                                  <div className="inner-box">
                                    <div className="name">
                                      John Doe
                                    </div>
                                    <div className="meg">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sunt placeat velit ad reiciendis ipsam
                                    </div>
                                  </div>
                                </div>
                              </div>{/* /.msg-received */}
                            </li>
                            <li>
                              <div className="msg-sent msg-container">
                                <div className="avatar">
                                  <img src={Images.H} alt="" />
                                  <div className="send-time">11.11 am</div>
                                </div>
                                <div className="msg-box">
                                  <div className="inner-box">
                                    <div className="name">
                                      John Doe
                                    </div>
                                    <div className="meg">
                                      Hay how are you doing?
                                    </div>
                                  </div>
                                </div>
                              </div>{/* /.msg-sent */}
                            </li>
                          </ul>
                          <div className="send-mgs">
                            <div className="yourmsg">
                              <input className="form-control" type="text" />
                            </div>
                            <button className="btn msg-send-btn">
                              <i className="pe-7s-paper-plane" />
                            </button>
                          </div>
                        </div>{/* /.messenger-box */}
                      </div>
                    </div> {/* /.card-body */}
                  </div>{/* /.card */}
                </div>
              </div>
              {/* /To Do and Live Chat */}
              {/* Calender Chart Weather  */}
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      {/* <h4 class="box-title">Chandler</h4> */}
                      <div className="calender-cont widget-calender">
                        <div id="calendar" />
                      </div>
                    </div>
                  </div>{/* /.card */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card ov-h">
                    <div className="card-body bg-flat-color-2">
                      <div id="flotBarChart" className="float-chart ml-4 mr-4" />
                    </div>
                    <div id="cellPaiChart" className="float-chart" />
                  </div>{/* /.card */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card weather-box">
                    <h4 className="weather-title box-title">Weather</h4>
                    <div className="card-body">
                      <div className="weather-widget">
                        <div id="weather-one" className="weather-one" />
                      </div>
                    </div>
                  </div>{/* /.card */}
                </div>
              </div>
              {/* /Calender Chart Weather */}
              {/* Modal - Calendar - Add New Event */}
              <div className="modal fade none-border" id="event-modal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h4 className="modal-title"><strong>Add New Event</strong></h4>
                    </div>
                    <div className="modal-body" />
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-success save-event waves-effect waves-light">Create event</button>
                      <button type="button" className="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /#event-modal */}
              {/* Modal - Calendar - Add Category */}
              <div className="modal fade none-border" id="add-category">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h4 className="modal-title"><strong>Add a category </strong></h4>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <label className="control-label">Category Name</label>
                            <input className="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                          </div>
                          <div className="col-md-6">
                            <label className="control-label">Choose Category Color</label>
                            <select className="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                              <option value="success">Success</option>
                              <option value="danger">Danger</option>
                              <option value="info">Info</option>
                              <option value="pink">Pink</option>
                              <option value="primary">Primary</option>
                              <option value="warning">Warning</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /#add-category */}
            </div>
            {/* .animated */}
          </div>
          {/* /.content */}
          <div className="clearfix" />
          {/* Footer */}
          <footer className="site-footer">
            <div className="footer-inner bg-white">
              <div className="row">
                <div className="col-sm-6">
                  Copyright © 2018 Ela Admin
                </div>
                <div className="col-sm-6 text-right">
                  Designed by <a href="https://colorlib.com">Colorlib</a>
                </div>
              </div>
            </div>
          </footer>
          {/* /.site-footer */}
        </div>
      </div>
      
    );
  }
}
