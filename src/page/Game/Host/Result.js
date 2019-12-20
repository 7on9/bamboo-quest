/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toRanking: false,
    }
  }
  render() {
    const { game } = this.props
    if (this.state.toRanking) {
      let { from } = this.props.location.state || {
        from: { pathname: '/host/ranking' },
      }
      return <Redirect to={from} />
    }
    return (
      <div
        style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}
        className="center-div">
        <div className="container">
          <div className="row">
            <div className="col-2" />
            <div
              className="col-2"
              style={{ fontSize: '200%', color: '#d03542' }}>
              <i
                className={`${
                  game && game.questions[game.idQuestion].correct_id == 0
                    ? 'check_show'
                    : ''
                } fas fa-check`}
                style={{ opacity: '0', fontSize: '1px' }}
              />
              <div className="ans_re a1" />
              <div
                className="ans_re1 a1 center-div"
                style={{ color: '#fff', justifyContent: 'center' }}>
                A
              </div>
            </div>
            <div
              className="col-2"
              style={{ fontSize: '200%', color: '#2a68c7' }}>
              <i
                className={`${
                  game && game.questions[game.idQuestion].correct_id == 1
                    ? 'check_show'
                    : ''
                } fas fa-check`}
                style={{ opacity: '0', fontSize: '1px' }}
              />
              <div className="ans_re a2" />
              <div
                className="ans_re1 a2 center-div"
                style={{ color: '#fff', justifyContent: 'center' }}>
                B
              </div>
            </div>
            <div
              className="col-2"
              style={{ fontSize: '200%', color: '#d0a036' }}>
              <i
                className={`${
                  game && game.questions[game.idQuestion].correct_id == 2
                    ? 'check_show'
                    : ''
                } fas fa-check`}
                style={{ opacity: '0', fontSize: '1px' }}
              />
              <div className="ans_re a3" />
              <div
                className="ans_re1 a3 center-div"
                style={{ color: '#fff', justifyContent: 'center' }}>
                C
              </div>
            </div>
            <div
              className="col-2"
              style={{ fontSize: '200%', color: '#498c2b' }}>
              <i
                className={`${
                  game && game.questions[game.idQuestion].correct_id == 3
                    ? 'check_show'
                    : ''
                } fas fa-check`}
                style={{ opacity: '0', fontSize: '1px' }}
              />
              <div className="ans_re a4" />
              <div
                className="ans_re1 a4 center-div"
                style={{ color: '#fff', justifyContent: 'center' }}>
                D
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
                onClick={() => this.setState({ toRanking: true })}>
                Xem bảng xếp hạng
              </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Result)
