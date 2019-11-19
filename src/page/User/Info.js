import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Info extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-4 col-md-4">
          <div
            className="center-div"
            style={{
              height: '50px',
              background: '#FF7051',
              marginBottom: '5px',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '200%',
            }}>
            <h2>Ảnh đại diện</h2>
          </div>
          <img
            src="/images/avatar-default.png"
            style={{ width: '100%', height: '15em', objectFit: 'cover' }}
          />
        </div>
        <div className="col-12 col-sm-8 col-md-8">
          <div
            className=" center-div"
            style={{
              height: '50px',
              background: '#FF7051',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '200%',
            }}>
            <h2>Thông tin tài khoản</h2>
          </div>
          <div
            className="col-12 text-left"
            style={{ marginTop: '20px', justifyContent: 'center' }}>
            <div className="row">
              <div className="col-md-1 col-12"></div>
              <div className="col-md-10 col-12">
                <div className="item-edit-user">
                  <i className="fas fa-user icon" />
                  {this.props.user.info ? this.props.user.info.name : 'Tên'}
                </div>
                <div className="item-edit-user">
                  <i className="fas fa-envelope icon" />
                  {this.props.user.info ? this.props.user.info.email : 'Email'}
                </div>
                <div className="item-edit-user">
                  {/* <i className="fas fa-venus-mars"/> */}
                  <i className="fas fa-venus-mars icon" />
                  {this.props.user.info
                    ? this.props.user.info.gender === false
                      ? 'Nữ'
                      : this.props.user.info.gender === true
                      ? 'Nam'
                      : 'Chưa cập nhật'
                    : null}
                </div>
                <div className="item-edit-user">
                  <i className="fas fa-building icon" />
                  {this.props.user.info
                    ? this.props.user.info.organization
                      ? this.props.user.info.organization
                      : 'Chưa cập nhật'
                    : null}
                </div>
                <div className="item-edit-user">
                  <i className="fas fa-phone icon" />
                  {this.props.user.info
                    ? this.props.user.info.phone
                      ? this.props.user.info.phone
                      : 'Chưa cập nhật'
                    : null}
                </div>
                <Link
                  to="/user/edit"
                  className="col-12 btn btn-block btn-success"
                  style={{ height: '40px' }}>
                  <i className="fas fa-edit" />
                  Chỉnh sửa{' '}
                </Link>
              </div>
              <div className="col-md-1 col-12"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Info)
