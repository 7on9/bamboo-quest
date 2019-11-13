import React, { Component } from 'react'
import './style.css'
// import Collection from '../../components/Home/Collection';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authAction from '../../store/auth/action'
import * as questActions from '../../store/quest/action'
import { Collection, Menu } from '../../components'

class Home extends Component {
  componentWillMount() {
    if (localStorage.getItem('token')) {
      if (!this.props.user.email) {
        this.props.verify()
        if (this.props.user.token === null) {
          this.setState({
            authenticated: false,
          })
        } else {
          this.setState({
            authenticated: true,
          })
          this.props.getsAllQuests()
        }
      }
    } else {
      this.setState({
        authenticated: false,
      })
      console.log('tạch')
    }
  }

  componentDidMount() {
    // this.props.getAllMeetings();
    window.scrollTo(0, 0)
  }
  top() {
    window.scrollTo(0, 0)
  }
  render() {
    const { info } = this.props.user
    const { quests } = this.props.quest
    console.log(quests)
    try {
      if (this.state.authenticated === false) {
        const { from } = this.props.location.state || {
          from: { pathname: '/' },
        }
        return <Redirect to={from} />
      }
    } catch (error) {
      if (this.state === null) {
        // window.location.reload();
        // const { from } = this.props.location.state || { from: { pathname: "/home" } };
        // return <Redirect to={from} />
      }
    }
    return (
      <div className="home">
        <a name="top" />
        {/* menu*/}
        <Menu email={info ? info.email : 'email'} />
        <Collection />
        {/* menu */}
        <div className="container">
          <div style={{ width: '100%' }}>
            <div className="row" style={{ width: '100%', marginLeft: '0' }}>
              <div className="col-12 mobile" style={{ marginTop: '90px' }}>
                <div className="item-category-moblie category-b">
                  <div className="item-category-moblie-content">
                    <p
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      Toán
                    </p>
                  </div>
                </div>
                <div className="item-category-moblie category-c">
                  <div className="item-category-moblie-content">
                    <p
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      Vật lý
                    </p>
                  </div>
                </div>
                <div className="item-category-moblie category-d">
                  <div className="item-category-moblie-content">
                    <p
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      Hoá học
                    </p>
                  </div>
                </div>
                <div className="item-category-moblie category-e">
                  <div className="item-category-moblie-content">
                    <p
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      Lịch sử
                    </p>
                  </div>
                </div>
                <div className="item-category-moblie category-f">
                  <div className="item-category-moblie-content">
                    <p
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      Xã hội
                    </p>
                  </div>
                </div>
                {/* <div className="item-category-moblie category-b"></div> */}
              </div>
              <div
                className="col-12 col-md-3 desktop"
                style={{ width: '100%' }}>
                <div className="info-category category-a">
                  <div className="info-category-content">
                    <div className="info-category-content-circle">
                      <img
                        src="/images/icon/math.png"
                        style={{ width: '60%', height: '60%' }}
                      />
                    </div>
                  </div>
                  <div className="info-category-title info-category-a">
                    <div className="btn-category">
                      <p style={{ fontWeight: 'bold' }}>Toán</p>
                    </div>
                  </div>
                </div>
                <div className="info-category category-b">
                  <div className="info-category-content">
                    <div className="info-category-content-circle">
                      <img
                        src="/images/icon/physical.png"
                        style={{ width: '60%', height: '60%' }}
                      />
                    </div>
                  </div>
                  <div className="info-category-title info-category-b">
                    <div className="btn-category">
                      <p style={{ fontWeight: 'bold' }}>Vật lý</p>
                    </div>
                  </div>
                </div>
                <div className="info-category category-c">
                  <div className="info-category-content">
                    <div className="info-category-content-circle">
                      <img
                        src="/images/icon/chemistry.png"
                        style={{ width: '80%', height: '80%' }}
                      />
                    </div>
                  </div>
                  <div className="info-category-title info-category-c">
                    <div className="btn-category">
                      <p style={{ fontWeight: 'bold' }}>Hoá học</p>
                    </div>
                  </div>
                </div>
                <div className="info-category category-d">
                  <div className="info-category-content">
                    <div className="info-category-content-circle">
                      <img
                        src="/images/icon/history.png"
                        style={{ width: '70%', height: '70%' }}
                      />
                    </div>
                  </div>
                  <div className="info-category-title info-category-d">
                    <div className="btn-category">
                      <p style={{ fontWeight: 'bold' }}>Lịch sử</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9">
                <div className="row">
                  <div
                    className="col-12 col-md-4"
                    style={{ marginBottom: '35px' }}>
                    <div className="item-game">
                      <div className="item-game-image">
                        <img
                          src="./images/icon/ig.jpeg"
                          className="item-game-image"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className="item-game-content">
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '16px',
                            color: '#383838',
                          }}>
                          Ai là triệu phú
                        </p>
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '9px',
                            color: '#383838',
                          }}>
                          {' '}
                          12/12/2020
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4"
                    style={{ marginBottom: '35px' }}>
                    <div className="item-game">
                      <div className="item-game-image">
                        <img
                          src="./images/icon/ig1.jpeg"
                          className="item-game-image"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className="item-game-content">
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '16px',
                            color: '#383838',
                          }}>
                          Ai là triệu phú
                        </p>
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '9px',
                            color: '#383838',
                          }}>
                          {' '}
                          12/12/2020
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4"
                    style={{ marginBottom: '35px' }}>
                    <div className="item-game">
                      <div className="item-game-image">
                        <img
                          src="./images/icon/ig2.jpeg"
                          className="item-game-image"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className="item-game-content">
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '16px',
                            color: '#383838',
                          }}>
                          Ai là triệu phú
                        </p>
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '9px',
                            color: '#383838',
                          }}>
                          {' '}
                          12/12/2020
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4"
                    style={{ marginBottom: '35px' }}>
                    <div className="item-game">
                      <div className="item-game-image">
                        <img
                          src="./images/icon/ig3.jpeg"
                          className="item-game-image"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className="item-game-content">
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '16px',
                            color: '#383838',
                          }}>
                          Ai là triệu phú
                        </p>
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '9px',
                            color: '#383838',
                          }}>
                          {' '}
                          12/12/2020
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4"
                    style={{ marginBottom: '35px' }}>
                    <div className="item-game">
                      <div className="item-game-image">
                        <img
                          src="./images/icon/ig4.jpeg"
                          className="item-game-image"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className="item-game-content">
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '16px',
                            color: '#383838',
                          }}>
                          Ai là triệu phú
                        </p>
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '9px',
                            color: '#383838',
                          }}>
                          {' '}
                          12/12/2020
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4"
                    style={{ marginBottom: '35px' }}>
                    <div className="item-game">
                      <div className="item-game-image">
                        <img
                          src="./images/icon/ig.jpeg"
                          className="item-game-image"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className="item-game-content">
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '16px',
                            color: '#383838',
                          }}>
                          Ai là triệu phú
                        </p>
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '9px',
                            color: '#383838',
                          }}>
                          {' '}
                          12/12/2020
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-4"
                    style={{ marginBottom: '35px' }}>
                    <div className="item-game">
                      <div className="item-game-image">
                        <img
                          src="./images/icon/ig.jpeg"
                          className="item-game-image"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <div className="item-game-content">
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '16px',
                            color: '#383838',
                          }}>
                          Ai là triệu phú
                        </p>
                        <p
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: '9px',
                            color: '#383838',
                          }}>
                          {' '}
                          12/12/2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='container'>
          <div className='col-12 content' style={{ marginTop: '50px' }}>
            <div className='col-12 collection-phone'>
              Colection
                <div className='col-12'>
                <div className='row'>
                  <div className='col-6'>
                    <button className='btn btn-success btn-block'>MATH</button>
                  </div>
                  <div className='col-6'>
                    <button className='btn btn-danger btn-block'>HISTORY</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className=' collection-md col-12 col-sm-12 col-md-3'>
                <Collection img='/images/home/collection_math.png' name='Toán học' />
                <Collection img='/images/home/collection_history.png' name='Lịch sử' />
                <Collection img='/images/home/collection_scien.png' name='Khoa học' />
                <Collection img='/images/home/collection_scien.png' name='Tất cả' />
              </div>
           
              <div className='  col-12 col-sm-12 col-md-9'>
                <div className='row'>
                  {
                    quests.map(quest => {
                      return (
                        <div className='col-12 col-sm-6 col-md-4' key={quest._id}>
                          <Item
                            title={quest.title}
                            description={quest.description}
                            link={'/quest/info/' + quest._id}
                            img={quest.img} />
                        </div>
                      )
                    })
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
        <a onClick={() => this.top()} className="btnAdd">
          <img
            src="/images/icon/btnAdd.png"
            style={{ height: '50%', width: '50%' }}
          />
        </a>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
