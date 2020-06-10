import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { ScoreBoardItem } from '../../../components/Quest/ScoreBoardItem'

class ScoreBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toReady: false,
    }
  }
  render() {
    const { game } = this.props
    let players = game && game.players ? [...game.players] : []
    players.sort((pA, pB) => pB.score - pA.score || pA.time - pB.time)
    if (this.state.toReady) {
      let { from } = this.props.location.state || {
        from: { pathname: game && game.endGame ? '/home' : '/host/ready' },
      }
      return <Redirect to={from} />
    }
    return (
      <div
        className="container_scoreBoard"
        style={{ width: '100%', height: '100%' }}>
        <div
          className="topScoreBoard center-div"
          style={{ justifyContent: 'center' }}>
          {game && game.endGame
            ? 'TRÒ CHƠI KẾT THÚC!'
            : 'HÃY CHUẨN BỊ CHO CÂU HỎI TIẾP THEO!'}
          <br />
          Bảng xếp hạng
        </div>
        <div className="btScoreBoard bg-auto-change-color">
          <div
            className="ctn"
            style={{
              width: '100%',
              height: 'auto',
              overflowY: 'scroll',
              marginTop: '40px',
              maxHeight: '70%',
            }}>
            <div className="container">
              {players.map((player, id) => (
                <ScoreBoardItem id={id + 1} player={player} key={id} />
              ))}
            </div>
          </div>
          <div className="col-12 ">
            <button
              className="start"
              style={{
                marginTop: '20px',
                width: '30%',
                height: '50px',
                backgroundColor: '#9e69c8',
              }}
              onClick={() => this.setState({ toReady: true })}>
              {game && game.endGame ? 'Về trang chủ' : 'Câu hỏi tiếp theo'}
            </button>
          </div>
          <div
            className="end"
            style={{ width: '100%', height: '15%', background: '#red' }}>
            <div className="col-12 text-right">
              <Link to="#">Kết thúc</Link>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard)
