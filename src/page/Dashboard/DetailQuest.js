import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert' // Import
import { deleteQuest } from '../../store/quest/action'

export default React.memo(function DetailQuest() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [title, settitle] = useState('')
  const [isDanger, setIsDanger] = useState(false)
  const [statusEdit, setStatusEdit] = useState(false)
  const redux = useSelector((state) => state.adminQuest)
  const data = redux.quest[redux.item]

  useEffect(() => {
    settitle(data.title)
  }, [redux])
  const handleEdit = () => {
    setStatusEdit(true)
  }

  const handleSave = () => {
    if (title === '') {
      setIsDanger(true)
    }
  }

  const handleDelete = () => {
    dispatch(deleteQuest(data._id))
    history.push('/dashboard/quest')
  }

  const confirmDelete = () => {
    confirmAlert({
      title: 'Xóa câu hỏi',
      message: 'Bạn có chắc chắn muốn xóa câu hỏi này',
      buttons: [
        {
          label: 'Đồng ý',
          onClick: () => handleDelete(),
        },
        {
          label: 'Không',
          onClick: () => alert('Hủy'),
        },
      ],
    })
  }

  const onChange = (event) => settitle(event.currentTarget.value)

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Chi tiết cuộc thi</h1>
      <div className="shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Thông tin</h6>
          <div style={{ marginBottom: '15px' }} />
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              value={data._id}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Người tạo</label>
            <input className="form-control" value={data.id_author} readOnly />
          </div>
          <div className="form-group">
            <label>Số câu hỏi</label>
            <input
              className="form-control"
              value={data.questions.length}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Tên cuộc thi</label>
            <input
              type="title"
              className="form-control"
              name="title"
              placeholder="Tên cuộc thi ..."
              value={title}
              readOnly={!statusEdit}
              onChange={onChange}
            />
          </div>

          {isDanger && (
            <p style={{ color: 'red' }}> * Vui lòng nhập đầy đủ thông tin </p>
          )}

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => confirmDelete()}>
            XOÁ THỬ THÁCH
          </button>
        </div>
      </div>
    </div>
  )
})
