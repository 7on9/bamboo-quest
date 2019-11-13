import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { nextQuestion, endGame } from '../../../store/socket/socket';

class Ready extends Component {
  constructor(props){
    super(props);
    this.state = {
      percent: 0,
      toQuestion: false,
      toHome: false,
      toRanking: false
    }
  }

  componentDidMount() {
    if (!this.props.game.idGame) {
      this.setState({
        toHome: true
      })
      return;
    }
    if(this.props.game.idQuestion + 1 == this.props.game.questions.length){
      endGame(this.props.game.idGame);
      this.setState({
        toHome: true
      })
    }
    this.countdown();
  }
  countdown = () => {
    const cd = setInterval(() => {      
      this.setState({
        percent: this.state.percent + 0.1
      })
      if(this.state.percent >= 10){
        clearInterval(cd);
        this.props.nextQuestion(this.props.game.idGame, this.props.game.idQuestion + 1);
        this.setState({
          toQuestion: true
        })
      }  
    }, 100)
  }
  render() {
    if(this.state.toQuestion) {
      let { from } = this.props.location.state || { from: { pathname: "/host/question" } };
      return <Redirect to={from} />
    }
    if (this.state.toHome) {
      let { from } = this.props.location.state || { from: { pathname: "/home" } };
      return <Redirect to={from} />
    }
    if (this.state.toRanking) {
      let { from } = this.props.location.state || { from: { pathname: "/host/ranking" } };
      return <Redirect to={from} />
    }
    const { game } = this.props;
    return (
      <div className='container-play_showQues' style={{ height: '100%', width: '100%' }}>
        <div className='topShow' style={{backgroundColor: 'green', color: '#fff'}}>
          Hãy sẵn sàng cho câu hỏi tiếp theo
        </div>
        <div className="progress" style={{ width: '100%', height: '5%' }}>
          <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: `${this.state.percent*10}%` }} />
        </div>
        <div className='midShow'>
          {game && game.idQuestion < game.questions.length-1  ? game.questions[game.idQuestion + 1].quiz : null}
        </div>
        <div className='botShow'>
          Câu hỏi thứ {game ? game.idQuestion + 2 : null} trong {game ? game.questions.length : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  nextQuestion: nextQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(Ready)
