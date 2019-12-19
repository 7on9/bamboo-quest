import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { timeout } from '../../../store/socket/socket'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      toHome: false,
      toResult: false,
    }
  }
  componentDidMount() {
    if (this.props.game.idGame) {
      this.setState({
        time: this.props.game.questions[this.props.game.idQuestion].duration,
      })
      this.countDown()
    } else {
      this.setState({
        toHome: true,
      })
    }
  }

  countDown = () => {
    const cd = setInterval(() => {
      this.setState({
        time: this.state.time - 1,
      })
      if (this.state.time <= 0) {
        clearInterval(cd)
        timeout(this.props.game.idGame)
        this.setState({
          toResult: true,
        })
      }
    }, 1000)
  }

  render() {
    const { game } = this.props
    if (this.state.toHome) {
      let { from } = this.props.location.state || {
        from: { pathname: '/home' },
      }
      return <Redirect to={from} />
    }

    if (this.state.toResult) {
      let { from } = this.props.location.state || {
        from: { pathname: '/host/result' },
      }
      return <Redirect to={from} />
    }

    return (
      <div className="container-play" style={{ height: '100%', width: '100%' }}>
        <div className="top">
          <div className="quest-play">
            {game ? game.questions[game.idQuestion].quiz : 'Câu hỏi'}
          </div>
        </div>
        <br style={{ height: '1px' }} />
        <div className="m">
          <div className="row" style={{ width: '100%', height: '100%' }}>
            <div
              className="col-12 col-sm-2 col-md-2 center-div"
              style={{
                textAlign: 'center',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}>
              <div id="countdown">{this.state.time}</div>
            </div>
            <div
              className="col-12 col-sm-8 col-md-8 center-div"
              style={{
                textAlign: 'center',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}>
              <img
                style={{ width: '75%', height: '90%', textAlign: 'center' }}
                src={
                  game
                    ? game.questions[game.idQuestion].img_path
                      ? game.questions[game.idQuestion].img_path
                      : '/images/img_quest_default.png'
                    : null
                }
              />
            </div>
            <div
              className="col-12 col-sm-2 col-md-2"
              style={{
                textAlign: 'center',
                width: '100%',
                height: '100%',
                marginTop: '20px',
              }}>
              <div className="col-12">
                <a href="#" className="btn btn-primary">
                  Bỏ qua
                </a>
              </div>
              {/* <div className='col-12' style={{ marginTop: '30px', fontSize: '50px' }}>0</div>
              <div className='col-12' style={{ marginTop: '30px', fontSize: '25px' }}>Đã trả lời</div> */}
            </div>
          </div>
        </div>
        <div className="b">
          <div className="container">
            <div className="col-12" style={{ height: '100%' }}>
              <div className="row" style={{ height: '100%' }}>
                <div
                  className="col-6 answer  center-div"
                  style={{ textAlign: 'left', marginBottom: '13px' }}>
                  <div
                    className="center-div a1"
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: '10px',
                      paddingLeft: '15px',
                    }}>
                    <h3 className="ansPlay" style={{ marginRight: '10px' }}>
                      A
                    </h3>
                    <h3 className="ansPlay">
                      {game
                        ? game.questions[game.idQuestion].ans[0].content
                        : 'Đáp án'}
                    </h3>
                  </div>
                </div>
                <div
                  className="col-6 answer  center-div"
                  style={{ textAlign: 'left', marginBottom: '13px' }}>
                  <div
                    className="center-div a2"
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: '10px',
                      paddingLeft: '15px',
                    }}>
                    <h3 className="ansPlay" style={{ marginRight: '10px' }}>
                      B
                    </h3>
                    <h3 className="ansPlay">
                      {game
                        ? game.questions[game.idQuestion].ans[1].content
                        : 'Đáp án'}
                    </h3>
                  </div>
                </div>
                <div
                  className="col-6 answer  center-div"
                  style={{ textAlign: 'left', marginBottom: '13px' }}>
                  <div
                    className="center-div a3"
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: '10px',
                      paddingLeft: '15px',
                    }}>
                    <h3 className="ansPlay" style={{ marginRight: '10px' }}>
                      C
                    </h3>
                    <h3 className="ansPlay">
                      {game
                        ? game.questions[game.idQuestion].ans[2].content
                        : 'Đáp án'}
                    </h3>
                  </div>
                </div>
                <div
                  className="col-6 answer  center-div"
                  style={{ textAlign: 'left', marginBottom: '13px' }}>
                  <div
                    className="center-div a4"
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: '10px',
                      paddingLeft: '15px',
                    }}>
                    <h3 className="ansPlay" style={{ marginRight: '10px' }}>
                      D
                    </h3>
                    <h3 className="ansPlay">
                      {game
                        ? game.questions[game.idQuestion].ans[3].content
                        : 'Đáp án'}
                    </h3>
                  </div>
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

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
