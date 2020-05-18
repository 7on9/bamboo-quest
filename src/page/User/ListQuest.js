/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import './styles.css'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authAction from '../../store/auth/action'
import * as questActions from '../../store/quest/action'
import { Button, Cardlist } from '../../components'

class ListQuest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toCreateQuest: false,
    }
  }
  UNSAFE_componentWillMount() {
    this.props.getMyQuests()
    this.props.resetQuiz()
    if (
      !this.props.quest ||
      !this.props.quest.quests ||
      !this.props.quest.quests.length
    ) {
      this.props.getsAllQuests(3)
    }
  }

  render() {
    const { user, quest } = this.props
    const { quests, myQuests } = quest
    return this.state.toCreateQuest ? (
      <Redirect to={'/quest/create'} />
    ) : (
      <div className="container-fulid">
        <div className="row" style={{ width: '100%', margin: 0 }}>
          <div
            className="col-12 col-md-3"
            style={{
              // marginBottom: '20px ',
              padding: '0 5px',
              marginBottom: '15px',
            }}>
            <div
              className="user-info"
              style={{
                width: '100%',
                marginBottom: '20px',
                borderRadius: '3px',
              }}>
              <img
                src={
                  user.info && user.info.avatar_path
                    ? user.info.avatar_path
                    : '/images/img_quest_default.png'
                }
                style={{
                  width: '100%',
                  height: '130px',
                  objectFit: 'cover',
                }}
                className="avatar-img"
              />
              <div
                style={{ width: '100%', padding: '10px', background: '#fff' }}
                className="info-user-div">
                <h4>{user && user.info ? user.info.name : ''}</h4>
                <p style={{ color: '#000' }}>
                  Tổng số thử thách: {myQuests ? myQuests.length : 0}
                </p>

                <Link
                  to="/user/info"
                  style={{ fontWeight: 'bold', color: '#fff' }}>
                  <div className="btn-info-user"> Thông tin</div>
                </Link>
              </div>
            </div>

            <Link to="/home">
              <img
                src="/images/bannerDiscover.jpg"
                className="discover"
                style={{ borderRadius: '4px' }}
                alt="cover"
              />
            </Link>
          </div>
          <div
            className="col-12 col-md-9"
            style={{ marginBottom: '20px ', padding: '0 5px', margin: 0 }}>
            <div className="container-quiz ">
              <div
                className="row"
                style={{ borderBottom: '2px solid  #F2F2F2', margin: '0' }}>
                <div className="col-6">
                  <div style={{ marginBottom: '15px' }}>Thử thách của tôi</div>
                </div>
                <div className="col-6">
                  <Button
                    style={{ backgroundColor: '#267ee2' }}
                    onClick={() => this.setState({ toCreateQuest: true })}
                    title="Tạo thử thách mới"
                  />
                </div>
              </div>
              <div style={{ margin: '20px' }} />
              {myQuests
                ? myQuests.map((item) => {
                    return (
                      <Cardlist
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        question={item.questions}
                        img_path={
                          item.img_path
                            ? item.img_path
                            : '/images/img_quest_default.png'
                        }
                      />
                    )
                  })
                : null}
            </div>
            <div className="container-quiz">
              <div
                className="row"
                style={{ borderBottom: '2px solid  #F2F2F2', margin: '0' }}>
                <div className="col-6">
                  <div style={{ marginBottom: '15px' }}>Thư viện</div>
                </div>
              </div>
              <div style={{ margin: '20px' }} />
              {quests
                ? quests.map((item) => {
                    return (
                      <Cardlist
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        question={item.questions}
                        img_path={item.img || item.img_path}
                      />
                    )
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  quest: state.quest,
})

const mapDispatchToProps = {
  getMyQuests: questActions.getMyQuests,
  verify: authAction.verify,
  getsAllQuests: questActions.getsAllQuests,
  resetQuiz: questActions.resetQuiz,
  logout: authAction.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListQuest)
