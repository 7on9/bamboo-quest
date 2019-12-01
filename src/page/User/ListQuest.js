import React, { Component } from 'react'
import './styles.css'
import { Link, Redirect, Switch, Route } from 'react-router-dom'
import { CreateQuiz } from '../../components'
export default class ListQuest extends Component {
  render() {
    return (
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
                <CreateQuiz/>
              </div>
              <div style={{ margin: '20px' }} />
              <div className="item-myquiz">
                <div
                  className="row"
                  style={{ margin: 0, width: '100%', height: '100%' }}>
                  <div
                    className="col-4 col-md-2"
                    style={{ padding: 0, height: '100%', background: 'red' }}>
                    <img
                      src="data:image/jpeg;base64,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"
                      style={{ width: '100%', height: '100%' }}
                    />
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
              <div className="item-myquiz">
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
              <div className="item-myquiz">
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
              <div className="item-myquiz">
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
              <div className="item-myquiz">
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
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
