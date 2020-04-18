import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ItemTableUser extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.stt}</td>
        <td>{this.props.id}</td>
        <td>{this.props.username}</td>
        <td>{this.props.email}</td>
        <td>{this.props.createAt}</td>
        <td>{this.props.countJoin}</td>
        <td>{this.props.countQuestCreated}</td>
        <td>
          <Link
            to={'/dashboard/user/' + this.props.id}
            onClick={(item) => this.props.handleSetItem(item)}>
            <i className="fas fa-info-circle"></i>
          </Link>{' '}
        </td>
      </tr>
    )
  }
}
