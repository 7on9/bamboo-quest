import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

class Entry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      begin: false,
      toHome: false,
    }
  }

  begin = () => {
    if (this.props.game.idGame) {
      this.setState({
        begin: true,
      })
    } else {
      this.setState({
        toHome: true,
      })
    }
  }

  render() {
    const { game } = this.props
    if (this.state.begin) {
      let { from } = this.props.location.state || {
        from: { pathname: '/host/ready' },
      }
      return <Redirect to={from} />
    }
    if (this.state.toHome) {
      let { from } = this.props.location.state || {
        from: { pathname: '/home' },
      }
      return <Redirect to={from} />
    }
    return (
      <div>
        <div>
          <div style={{ marginTop: '40px' }}>
            <h1 className="titlePlay">Truy cập bambooquest.xyz </h1>
          </div>
          <div>
            <h1 style={{ fontSize: '2em' }}>tham gia bằng mã PIN:</h1>
          </div>
          <div
            id="inner"
            style={{
              marginTop: '10px',
              width: '300px',
              height: '90px',
              background: '#fff',
              color: '#000',
            }}>
            <h1 className="id_game">
              <b>{this.props.game ? this.props.game.code : ''}</b>
            </h1>
          </div>
          <hr align="left" width="100%" height="" />
          <div style={{ margin: '35px 0', fontSize: '8px' }}>
            <div className="row" style={{ fontSize: '2em' }}>
              <div className="col-4 ">
                <div>{game.players ? game.players.length : 0}</div>
                <div>Người chơi</div>
              </div>
              <div className="col-4 name">
                {game.info ? game.info.title : 'BAMBOO'}
              </div>
              <div className="col-4 ">
                <button
                  className="start"
                  style={{ marginTop: '20px', width: '30%', height: '50px' }}
                  onClick={this.begin}>
                  BẮT ĐẦU
                </button>
              </div>
            </div>
          </div>
          <hr align="right" width="100%" height="" />
          <div style={{ marginTop: '50px' }}>
            <div className="row item" style={{ fontSize: '2em' }}>
              {game.players.map(player => (
                <div key={player.username} className="col-4">
                  {player.username}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  game: state.game
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Entry)
