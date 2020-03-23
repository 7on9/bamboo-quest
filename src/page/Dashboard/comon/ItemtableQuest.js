import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ItemTableUser extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.created}</td>
        <td>{this.props.creator}</td>
        <td>{this.props.countQuestion}</td>
        <td> <Link to={'/dashboard/quest/'+this.props.id}><i className="far fa-eye"></i></Link> </td>
      </tr>
    )
  }
}