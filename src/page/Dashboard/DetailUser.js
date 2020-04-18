import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { timestampConverter } from '../../utils/date'

export default function Table() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isDanger, setIsDanger] = useState(false)
  const [statusEdit, setStatusEdit] = useState(false)
  const redux = useSelector((state) => state.admin)
  const data = redux.user[redux.item]
  useEffect(async ()=>{
    setEmail(data.email)
    setUsername(data.name)
  },[redux.user])
  const handleEdit = () => {
    setStatusEdit(true)
  }

  const handleSave = () => {
    if (
      email === '' ||
      password === '' ||
      username === ''
    ) {
      setIsDanger(true)
    }
  }

  const onChange = (event) => {
    switch(event.target.name) {
      case 'email':
        setEmail(event.target.value)
        break;
      case 'password':
        setPassword(event.target.value)
        break;
      case 'username':
        setUsername(event.target.value)
        break;
    }
  }

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Chi tiết người dùng</h1>
      <div className="shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Thông tin</h6>
          <div style={{ marginBottom: '15px' }} />
          <div className="form-group">
            <label>ID</label>
            <input type="text" className="form-control" value={data._id} readOnly />
          </div>
          <div className="form-group">
            <label>Ngày tạo</label>
            <input className="form-control" value={timestampConverter(data.last_update)} readOnly />
          </div>
          <div className="form-group">
            <label>Tên người dùng</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Tên người dùng ..."
              value={username}
              readOnly={!statusEdit}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email ..."
              value={email}
              readOnly={!statusEdit}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Mật khẩu ..."
              value={password}
              readOnly={!statusEdit}
              onChange={onChange}
            />
          </div>
          {isDanger && (
            <p style={{ color: 'red' }}> * Vui lòng nhập đầy đủ thông tin </p>
          )}
          {statusEdit ? (
            <button
              type="button"
              className="btn btn-success"
              style={{ marginRight: '10px' }}
              onClick={handleSave}>
              LƯU
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginRight: '10px' }}
              onClick={handleEdit}>
              CHỈNH SỬA
            </button>
          )}
          <button type="button" className="btn btn-danger">
            XOÁ TÀI KHOẢN
          </button>
        </div>
      </div>
    </div>
  )
}
