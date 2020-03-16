/* eslint-disable react/prop-types */
import './style.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Helmet from 'react-helmet'

class ReturnResult extends Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = { status: false }
  }
  render() {
    const { game } = this.props
    if (game) {
      if (game.newQuestion) {
        let { from } = this.props.location.state || {
          from: { pathname: '/client/play' },
        }
        return <Redirect to={from} />
      }
      if (game.endGame) {
        let { from } = this.props.location.state || {
          from: { pathname: '/host/ranking' },
        }
        return <Redirect to={from} />
      }
    }
    return (
      <div
        className="return-result center-div"
        style={{ justifyContent: 'center' }}>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/comon/css/util.css"/>
          <link rel="stylesheet" type="text/css" href="/comon/css/main.css"/>
        </Helmet>
        {this.props.game.correct == -1 ? (
          <div style={{ color: '#ad1d1d' }}>
            <i
              className="fas fa-sad-tear"
              style={{ fontSize: '10vw', marginBottom: '20px' }}
            />
            <h4 style={{ fontSize: '5vw' }}>Sai rồi</h4>
          </div>
        ) : this.props.game.correct == 1 ? (
          <div style={{ color: '#138402' }}>
            <i
              className="fas fa-laugh"
              style={{ fontSize: '10vw', marginBottom: '20px' }}
            />
            <h4 style={{ fontSize: '8vw' }}>Chính xác</h4>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ReturnResult)
