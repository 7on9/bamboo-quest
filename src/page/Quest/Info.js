import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import * as questActions from '../../store/quest/action'
import { startGame, resetResult } from '../../store/socket/socket'
import { Question } from '../../components'

class Info extends Component {
  state = {
    isClick: true,
    data: [],
    show:-1
  }

  showAns=(id)=>{
    this.setState({show:id})
    console.log (this.state.show)
  }
  componentWillMount() {
    let param = this.props.location.pathname
    console.log(param.slice(param.lastIndexOf('/') + 1, param.length))
    this.props.getQuestInfo(
      param.slice(param.lastIndexOf('/') + 1, param.length)
    )
  }
  toggle = () => {
    this.setState ({isClick: !this.state.isClick})
  }
  startGame = e => {
    e.preventDefault()
    this.props.startGame(this.props.quest.info._id)
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

    let questions = this.props.quest.info ? this.props.quest.info.questions : []
    const infoUser = this.props.user.info
    const isOwnner = info && infoUser ? info._id_author == infoUser._id : false
    return (
      <div className="userShowQuest" style={{ marginTop: '50px' }}>
        <div className="container-fulid">
          <div style={{ padding: '0 1em' }}>
            <div className="row">
              <div className="show-detail-quiz col-12 col-sm-4 col-md-4">
                <img
                  src={
                    info
                      ? info.img
                        ? info.img
                        : '/images/img_quest_default.png'
                      : '/images/img_quest_default.png'
                  }
                  style={{
                    width: '100%',
                    height: '15em',
                    objectFit: 'contain',
                    marginBottom: '10px',
                  }}
                />
                <h4
                  style={{
                    margin: '10px 0',
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                  {info ? info.title : 'Tên thử thách'}
                </h4>
                <p style={{ margin: '10px 0' }}>
                  {info ? info.description : 'Miêu tả thử thách'}
                </p>
                <Link
                  to="#"
                  onClick={this.startGame}
                  className="btn btn-success"
                  style={{ width: '100%', margin: '10px 0' }}>
                  Tạo trò chơi
                </Link>
              </div>
              <div
                className="col-12 col-sm-8 col-md-8"
                style={{ marginBottom: '30px' }}>
                <h3 style={{ marginBottom: '10px', textAlign: 'left' }}>
                  Các câu hỏi của thử thách
                </h3>

                {/*------- name -----------*/}
                {/*------ listQues -----------*/}
                <div className="row">
                  {questions.map((question, i) => (
                    
                      <Question  key={question._id} question={question} showAns={(id)=>this.showAns(id)} i={i} show={this.state.show} isClicked={()=>this.toggle()} />
                    
                  ))}

                  {/* {questions.map(question =>
                      <li key={question._id}>{question.ans}</li>
                  )} */}
                  {/* <p>{this.state.data}</p> */}
                  {/* <Question question={info ? info.questions[0] : null} />
                  <Question question={info ? info.questions[1] : null} />
                  <Question question={info ? info.questions[2] : null} />
                  <Question question={info ? info.questions[3] : null} /> */}
                  {/* <Question key="{question._id}" question="{question}" /> */}
                  {/* <Question quiz='Ai là chủ tịch nước CHXHCNVN' timeLimit='10' /> */}
                  {/* <Question _id='2' quiz='THU THACH 2' timeLimit='10' />
                  <Question _id='3' quiz='THU THACH 3' timeLimit='10' />
                  <Question _id='4' quiz='THU THACH 4' timeLimit='10' /> */}
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
