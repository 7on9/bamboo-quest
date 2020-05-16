import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
import { Redirect } from 'react-router-dom'
import { answer } from '../../../store/socket/socket'
import GAME_TYPES from '../../../store/socket/types'
import { Answer } from '../../../components'
import Helmet from 'react-helmet'

/*Play game*/
class Play extends Component {
  componentDidMount() {
    this.setState({
      time: (new Date().getTime() / 1000.0).toFixed(2),
      answered: false,
    })
  }
  onAnswer = value => {
    if (this.state.answered) {
      return
    }
    const { game } = this.props
    let ans = {
      time: parseFloat(
        (new Date().getTime() / 1000.0 - this.state.time).toFixed(2)
      ),
      idAnswer: value,
      username: game.username,
    }
    answer(game.idGame, game.idQuestion, ans)
    this.setState({
      answered: true,
    })
  }
  render() {
    const { game } = this.props
    if (game) {
      if (game.timeout) {
        const { answered } = this.state
        if (answered === false) {
          let ans = {
            time: GAME_TYPES.GAME.TIMEOUT,
            idAnswer: -1,
            username: game.username,
          }
          answer(game.idGame, game.idQuestion, ans)
        }
        let { from } = this.props.location.state || {
          from: { pathname: '/client/result' },
        }
        return <Redirect to={from} />
      }
    }
    return (
      <div className="client-answer">
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/comon/css/util.css"/>
          <link rel="stylesheet" type="text/css" href="/comon/css/main.css"/>
        </Helmet>
        <div style={{ width: '100%', height: '100%', background: '' }}>
          <div style={{ width: '100%', height: '100%' }}>
            <Answer
              id={1}
              value={0}
              onAnswer={this.onAnswer}
              label={'A'}
              style={{ background: '#d03542', float: 'left' }}
            />
            <Answer
              id={2}
              value={1}
              onAnswer={this.onAnswer}
              label={'B'}
              style={{ background: '#2a68c7', float: 'right' }}
            />
            <Answer
              id={3}
              value={2}
              onAnswer={this.onAnswer}
              label={'C'}
              style={{ background: '#d0a036', float: 'left' }}
            />
            <Answer
              id={4}
              value={3}
              onAnswer={this.onAnswer}
              label={'D'}
              style={{ background: '#498c2b', float: 'left' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Play)
