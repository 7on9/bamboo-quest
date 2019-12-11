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

  render() {
    try {
      if (this.state.authenticated === false) {
        const { from } = this.props.location.state || {
          from: { pathname: '/' },
        }
        return <Redirect to={from} />
      }
    } catch (error) {
      if (this.state === null) {
        window.location.reload()
        const { from } = this.props.location.state || {
          from: { pathname: '/home' },
        }
        return <Redirect to={from} />
      }
    }
    const { quests } = this.props.quest
    console.log(quests)
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
            <div className="user-info" style={{ padding: '10px' }}>
              <h4 style={{ color: '#285938' }}>Quan</h4>
              <h4 style={{ color: '#316d44' }}>Tổng số thử thách: 2</h4>
              <div className="btn-info-user">
                <Link to="/" style={{ fontWeight: 'bold', color: '#bcc6c0' }}>
                  Thông tin
                </Link>
              </div>
              <div className="btn-info-user">
                <Link to="/" style={{ fontWeight: 'bold', color: '#bcc6c0' }}>
                  Chỉnh sửa thông tin
                </Link>
              </div>
            </div>
            <Link to="/home">
              <img
                src={window.location.origin + '/images/bannerDiscover.jpg'}
                className="discover"
                style={{ borderRadius: '4px' }}
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
<<<<<<< Updated upstream
                    style={{ backgroundColor: '#267ee2' }}
=======
                    // style={{ backgroundColor: 'red' }}
>>>>>>> Stashed changes
                    onClick={() => this.setState({ toCreateQuest: true })}
                    title="Tạo thử thách mới"
                  />
                </div>
              </div>
              <div style={{ margin: '20px' }} />
<<<<<<< Updated upstream
              <Cardlist id="123" title="Ai là triệu phú" question={[]}/>
              <Cardlist id="123" title="Ai là triệu phú" question={[]}/>
              <Cardlist id="123" title="Ai là triệu phú" question={[]}/>
              <Cardlist id="123" title="Ai là triệu phú" question={[]}/>
=======
              <div className="item-my-quest">
                <div
                  className="row"
                  style={{ margin: 0, width: '100%', height: '100%' }}>
                  <div
                    className="col-4 col-md-2"
                    style={{ padding: 0, height: '100%', background: 'red' }}>
                    <img style={{ width: '100%', height: '100%' }} />
                    <div className="count-quest">
                      <h5 style={{ color: '#fff' }}>5</h5>
                    </div>
                  </div>
                  <div className="col-8 col-md-10" style={{ padding: '10px' }}>
                    <h4 style={{ color: '#5e5e5e' }}>Ai là triệu phú</h4>
                    <p style={{ fontSize: '10px' }}>Tạo ngày: 11/11/11</p>
                  </div>
                </div>
              </div>
              <div className="item-my-quest">
                <div
                  className="row"
                  style={{ margin: 0, width: '100%', height: '100%' }}>
                  <div
                    className="col-4 col-md-2"
                    style={{ padding: 0, height: '100%', background: 'red' }}>
                    <img
                      src="https://9mobi.vn/cf/images/2015/03/nkk/anh-dep-1.jpg"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="count-quest">
                      <h5 style={{ color: '#fff' }}>10</h5>
                    </div>
                  </div>
                  <div className="col-8 col-md-10" style={{ padding: '10px' }}>
                    <h4 style={{ color: '#5e5e5e' }}>Ai là triệu phú</h4>
                    <p style={{ fontSize: '10px' }}>Tạo ngày: 11/11/11</p>
                  </div>
                </div>
              </div>
              <div className="item-my-quest">
                <div
                  className="row"
                  style={{ margin: 0, width: '100%', height: '100%' }}>
                  <div
                    className="col-4 col-md-2"
                    style={{ padding: 0, height: '100%', background: 'red' }}>
                    <img src="" style={{ width: '100%', height: '100%' }} />
                    <div className="count-quest">
                      <h5 style={{ color: '#fff' }}>7</h5>
                    </div>
                  </div>
                  <div className="col-8 col-md-10" style={{ padding: '10px' }}>
                    <h4 style={{ color: '#5e5e5e' }}>Ai là triệu phú</h4>
                    <p style={{ fontSize: '10px' }}>Tạo ngày: 11/11/11</p>
                  </div>
                </div>
              </div>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              {
                quests.map((item)=>{
                  return(
                    <Cardlist id={item._id} title={item.title} question={item.questions} />
                  )
                })
              }

=======
              <div className="item-my-quest">
                <div
                  className="row"
                  style={{ margin: 0, width: '100%', height: '100%' }}>
                  <div
                    className="col-4 col-md-2"
                    style={{ padding: 0, height: '100%', background: 'red' }}>
                    <img
                      src="https://ipm-cdn.kahoot.it/wp-content/uploads/2019/03/HigherEd-Plus.png"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="count-quest">
                      <h5 style={{ color: '#fff' }}>10</h5>
                    </div>
                  </div>
                  <div className="col-8 col-md-10" style={{ padding: '10px' }}>
                    <h4 style={{ color: '#5e5e5e' }}>Ai là triệu phú</h4>
                    <p style={{ fontSize: '10px' }}>Tạo ngày: 11/11/11</p>
                  </div>
                </div>
              </div>
              <div className="item-my-quest">
                <div
                  className="row"
                  style={{ margin: 0, width: '100%', height: '100%' }}>
                  <div
                    className="col-4 col-md-2"
                    style={{ padding: 0, height: '100%', background: 'red' }}>
                    <img
                      src="https://ipm-cdn.kahoot.it/wp-content/uploads/2019/03/HigherEd-Plus.png"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="count-quest">
                      <h5 style={{ color: '#fff' }}>10</h5>
                    </div>
                  </div>
                  <div className="col-8 col-md-10" style={{ padding: '10px' }}>
                    <h4 style={{ color: '#5e5e5e' }}>Ai là triệu phú</h4>
                    <p style={{ fontSize: '10px' }}>Tạo ngày: 11/11/11</p>
                  </div>
                </div>
              </div>
>>>>>>> Stashed changes
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
  verify: authAction.verify,
  getsAllQuests: questActions.getsAllQuests,
  logout: authAction.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListQuest)
