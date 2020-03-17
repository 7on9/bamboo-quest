import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ItemTableUser extends Component {
  render() {
    return (
      <tr>
        <td>Cedric Kelly</td>
        <td>Senior Javascript Developer</td>
        <td>Edinburgh</td>
        <td>22</td>
        <td>2012/03/29</td>
        <td>$433,060</td>
        <td> <Link to="/dashboard/user/1"><i className="far fa-eye"></i></Link> </td>
      </tr>
    )
  }
}
