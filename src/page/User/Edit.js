import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles.css'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img_path: '',
    }
  }
  onUploadImage = async event => {
    if (event.target.files[0]) {
      this.setState({
        img_path: URL.createObjectURL(event.target.files[0]),
      })
    }
    let reader = new FileReader()
    reader.onloadend = () => {
      this.setState({
        newQuest: {
          ...this.state.newQuest,
          img_path: reader.result,
        },
      })
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
  }

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
          <input
            type="file"
            style={{ background: 'none', width: '100%' }}
            onChange={this.onUploadImage}
          />
          <img
            src={
              this.props.user.info
                ? this.props.user.info.avatar_path
                  ? this.props.user.info.avatar_path
                  : '/images/avatar-default.png'
                : '/images/avatar-default.png'
            }
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
                  <input
                    name="name"
                    style={{ width: '85%' }}
                    placeholder={
                      this.props.user.info ? this.props.user.info.name : 'Tên'
                    }/>
                </div>
                <div className="item-edit-user">
                  <i className="fas fa-envelope icon" />
                  <input
                    type="email"
                    style={{ width: '85%' }}
                    name="email"
                    placeholder={
                      this.props.user.info
                        ? this.props.user.info.email
                        : 'Email'
                    }/>
                </div>
                <div className="item-edit-user">
                  {/* <i className="fas fa-venus-mars"/> */}
                  <i className="fas fa-venus-mars icon" />
                  Nam
                  <input type="radio" style={{}} name="gender" value={false} />
                  Nữ
                  <input type="radio" style={{}} name="gender" value={true} />
                  {/* {this.props.user.info ? this.props.user.info.gender === false ? 'Nữ' : this.props.user.info.gender === true ? 'Nam' : 'Chưa cập nhật' : null} */}
                </div>
                <div className="item-edit-user">
                  <i className="fas fa-building icon" />
                  <input
                    style={{ width: '85%' }}
                    name="organization"
                    placeholder={
                      this.props.user.info
                        ? this.props.user.info.organization
                          ? this.props.user.info.organization
                          : 'Đơn vị công tác'
                        : null
                    }/>
                  {/* {this.props.user.info ? this.props.user.info.organization ? this.props.user.info.organization : 'Chưa cập nhật' : null} */}
                </div>
                <div className="item-edit-user">
                  <i className="fas fa-phone icon" />
                  {/* {this.props.user.info ? this.props.user.info.phone ? this.props.user.info.phone : 'Chưa cập nhật' : null} */}
                  <input
                    style={{ width: '85%' }}
                    name="phone"
                    placeholder="Số điện thoại"/>
                </div>
                <div className="item-edit-user" style={{ width: '100%' }}>
                  <i className="fas fa-lock" />
                  <input
                    type="passwordC"
                    style={{ width: '85%' }}
                    name="password"
                    placeholder="PASSWORD"/>
                </div>
                <div className="col-md-1 col-12"></div>
                <Link
                  to=""
                  className="col-12 btn btn-block btn-success"
                  style={{ height: '40px' }}>
                  <i className="fas fa-edit" />
                  Chỉnh sửa
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
