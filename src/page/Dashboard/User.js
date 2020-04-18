import React, { useEffect, useState, useCallback } from 'react'
import ItemTableUser from './comon/ItemTableUser'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, setPage } from '../../store/admin/action'
import Pagination from 'react-js-pagination'

export default function Table() {
  const dispatch = useDispatch()
  const redux = useSelector((state) => state.admin)
  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber))
  }
  useEffect(() => {
    dispatch(getAllUsers(redux.page))
  }, [redux.page])

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Danh sách người dùng</h1>
      {/* DataTales Example */}
      <div className="shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Danh sách người dùng
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Ngày tạo</th>
                  <th>Lượng game đã tham gia</th>
                  <th>Số cuộc thi đã tạo</th>
                  <th></th>
                </tr>
              </thead>

              {redux.user.length > 0 ? (
                <tbody>
                  {redux.user.map((item, index) => (
                    <ItemTableUser
                      id={index + 1}
                      username={item.name}
                      email={item.email}
                      createAt={'15/05/2020'}
                      countJoin={1}
                      countQuestCreated={1}
                    />
                  ))}
                </tbody>
              ) : (
                <tbody />
              )}
            </table>
            <div style={{ justifyContent: 'flex-end' }}>
              <Pagination
                hideDisabled
                itemClass="page-item"
                linkClass="page-link"
                activePage={redux.page}
                itemsCountPerPage={1}
                totalItemsCount={redux.count / 5}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
