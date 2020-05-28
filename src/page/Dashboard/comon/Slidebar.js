import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Slidebar extends Component {
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar">
        {/* Sidebar - Brand */}
        <Link
          to="/dashboard"
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">Bamboo Quest Admin </div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* Heading */}

        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Addons</div>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/user">
            <i className="fas fa-user" />
            <span>User</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/quest">
            <i className="fas fa-gamepad"></i>
            <span>Quest</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/collection">
            <i class="fas fa-folder-open"></i>
            <span>Collection</span>
          </Link>
        </li>
      </ul>
    )
  }
}
