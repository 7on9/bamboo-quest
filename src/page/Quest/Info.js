/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import * as questActions from '../../store/quest/action'
import { startGame, resetResult } from '../../store/socket/socket'
import { Question } from '../../components'
import './style.css'
class Info extends Component {
  state = {
    isClick: true,
    data: [],
    show: -1,
    gameStarted: false
  }

  showAns = id => {
    this.setState({ show: id })
  }
  UNSAFE_componentWillMount() {
    let param = this.props.location.pathname
    this.props.getQuestInfo(
      param.slice(param.lastIndexOf('/') + 1, param.length)
    )
  }
  toggle = () => {
    this.setState({ isClick: !this.state.isClick })
  }
  startGame = e => {
    e.preventDefault()
    this.props.resetResult()
    this.props.startGame(this.props.quest.info._id)
    if (this.props.quest.result) {
      this.setState({
        gameStarted: true
      })
    }
  }
  render() {
    const { info } = this.props.quest

    const { from } = this.props.location.state || {
      from: { pathname: '/host' },
    }
    if (this.props.game.questions) {
      this.props.resetResult()
      return <Redirect to={from} />
    }

    if (this.state.gameStarted) {
      return <Redirect to={'/host'} />
    }
    
    let questions = this.props.quest.info ? this.props.quest.info.questions : []
    const infoUser = this.props.user.info
    const isOwnner = info && infoUser ? info._id_author===infoUser._id : false
    return (
      <div className="userShowQuest" style={{ marginTop: '50px' }}>
        <div className="container-fulid">
          <div style={{ padding: '0 1em' }}>
            <div className="row">
              <div
                className="col-12 col-sm-4 col-md-3"
                style={{ borderRadius: 12 }}>
                <div
                  className="user-info"
                  style={{
                    width: '100%',
                    marginBottom: '20px',
                    borderRadius: 12,
                    marginTop: 40,
                  }}>
                  <img
                    src={
                      info && info.img_path
                        ? info.img_path
                        : '/images/img_quest_default.png'
                    }
                    style={{
                      width: '100%',
                      height: '20rem',
                      objectFit: 'cover',
                    }}
                  />
                  <div
                    style={{
                      width: '100%',
                      padding: '10px',
                      background: '#fff',
                    }}>
                    {/* <h4>{user && user.info ? user.info.name : ''}</h4> */}
                    <h4
                      className="limitText"
                      style={{
                        margin: '10px 0',
                        textAlign: 'left',
                      }}>
                      {info ? info.title : 'Tên thử thách'}
                    </h4>
                    <p
                      className="limitText"
                      style={{ margin: '10px 0', textAlign: 'left' }}>
                      {info ? info.description : 'Mô tả thử thách'}
                    </p>

                    <div className="btn-info-user" onClick={this.startGame}>
                      <Link style={{ fontWeight: 'bold', color: '#fff' }}>
                        Chơi ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-sm-8 col-md-9"
                style={{ marginBottom: '30px' }}>
                <h3 style={{ marginBottom: '10px', textAlign: 'left' }}>
                  Các câu hỏi của thử thách
                </h3>

                {/*------- name -----------*/}
                {/*------ listQues -----------*/}
                <div className="row">
                  {questions.map((question, i) => (
                    <Question
                      key={question._id}
                      question={question}
                      showAns={id => this.showAns(id)}
                      i={i}
                      show={this.state.show}
                      isClicked={() => this.toggle()}
                    />
                  ))}
                  {isOwnner ? (
                    <div
                      className="col-12 col-sm-12 col-md-12"
                      style={{ textAlign: 'center' }}>
                      <Link to={'/quest/add/' + info._id}>
                        <i
                          className="fas fa-plus-circle"
                          style={{ fontSize: '50px', color: 'blue' }}
                        />
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
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

const mapDispatchToProps = {
  getQuestInfo: questActions.getInfoQuest,
  startGame: startGame,
  resetResult: resetResult,
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
