import React, { Component } from 'react'

export default class DetailUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      statusEdit:false,
      email: 'phq@gmail.com',
      password:'123',
      username: 'Pham Hong Quan',
      isDanger: false
    }
  }
  handleEdit = () =>{
    this.setState ({
      statusEdit: true
    })
  }

  handleSave = () => {
    if (this.state.email === '' || this.state.password === '' || this.state.username === '' ){
      this.setState ({
        isDanger: true
      })
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Chi tiết cuộc thi</h1>
        <div className="shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Thông tin</h6>
            <div style={{marginBottom:'15px'}}/>
            <div className="form-group">
              <label>ID</label>
              <input type="text" className="form-control" value="123" readOnly/>
            </div>
            <div className="form-group">
              <label>Ngày tạo</label>
              <input className="form-control" value="01/01/2020" readOnly/>
            </div>
            <div className="form-group">
              <label>Tên người dùng</label>
              <input type="text" className="form-control" name= 'username' placeholder="Tên người dùng ..." value={this.state.username} readOnly={!this.state.statusEdit} 
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name= 'email' placeholder="Email ..." value={this.state.email} readOnly={!this.state.statusEdit} 
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="password" className="form-control" name= 'password' placeholder="Mật khẩu ..." value={this.state.password} readOnly={!this.state.statusEdit} 
                onChange={this.onChange} />
            </div>
            {this.state.isDanger && (<p style={{color:'red'}}> * Vui lòng nhập đầy đủ thông tin </p>)}
            {
              this.state.statusEdit?(<button type="button" className="btn btn-success" style={{marginRight:'10px'}} onClick={()=>this.handleSave()}>LƯU</button>)
                :(<button type="button" className="btn btn-primary" style={{marginRight:'10px'}} onClick={()=>this.handleEdit()}>CHỈNH SỬA</button>)
            }
            <button type="button" className="btn btn-danger">XOÁ TÀI KHOẢN</button>
            
          </div>
        </div>
      </div>
    )
  }
}
